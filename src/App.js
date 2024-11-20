import React, { useEffect, useState } from 'react';
import './App.scss';
import { Container } from '@mui/material';
import { motion } from 'framer-motion';
import { TelegramIcon, GitHubIcon, InstagramIcon } from '@mui/icons-material';

function App() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const moveCursor = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', moveCursor);
    
    // Имитация загрузки
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
    };
  }, []);

  useEffect(() => {
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
      link.addEventListener('click', function() {
        alert('Вы нажали на ' + this.textContent);
      });
    });
  }, []);

  useEffect(() => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });

    // Animated Counter Function
    function animateCounter(element, target) {
      let current = 0;
      const increment = target / 100;
      const duration = 2000; // 2 seconds
      const stepTime = duration / 100;

      const counter = setInterval(() => {
        current += increment;
        if (current >= target) {
          element.textContent = target;
          clearInterval(counter);
        } else {
          element.textContent = Math.floor(current);
        }
      }, stepTime);
    }

    // Intersection Observer for Animations
    const observerOptions = {
      threshold: 0.2,
      rootMargin: '0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Animate stats when they come into view
          if (entry.target.classList.contains('stat-number')) {
            const target = parseInt(entry.target.getAttribute('data-target'));
            animateCounter(entry.target, target);
          }
          
          // Add animation classes for other elements
          if (entry.target.classList.contains('portfolio-item')) {
            entry.target.classList.add('animate');
          }
          
          if (entry.target.classList.contains('contact-card') || 
              entry.target.classList.contains('social-card')) {
            entry.target.style.opacity = '1';
          }
          
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Observe elements
    document.querySelectorAll('.stat-number, .portfolio-item, .contact-card, .social-card')
      .forEach(el => observer.observe(el));

    // Parallax Effect for Stat Boxes
    document.querySelectorAll('.stat-box').forEach(box => {
      box.addEventListener('mousemove', (e) => {
        const rect = box.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const xPercent = (x / rect.width - 0.5) * 20;
        const yPercent = (y / rect.height - 0.5) * 20;
        
        box.style.transform = `perspective(1000px) rotateX(${yPercent}deg) rotateY(${xPercent}deg) scale3d(1.05, 1.05, 1.05)`;
      });
      
      box.addEventListener('mouseleave', () => {
        box.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
      });
    });

    // Portfolio Hover Effect
    document.querySelectorAll('.portfolio-item').forEach(item => {
      item.addEventListener('mouseenter', () => {
        const info = item.querySelector('.portfolio-info');
        info.style.transform = 'translateY(0)';
      });
      
      item.addEventListener('mouseleave', () => {
        const info = item.querySelector('.portfolio-info');
        info.style.transform = 'translateY(100%)';
      });
    });

    // Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {
      menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        menuToggle.classList.toggle('active');
      });
    }

    // Initialize on page load
    document.addEventListener('DOMContentLoaded', () => {
      // Start animations for elements in viewport
      document.querySelectorAll('.stat-number').forEach(stat => {
        if (isElementInViewport(stat)) {
          const target = parseInt(stat.getAttribute('data-target'));
          animateCounter(stat, target);
        }
      });
    });

    // Utility function to check if element is in viewport
    function isElementInViewport(el) {
      const rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }
  }, []);

  useEffect(() => {
    // Анимация чисел в блоках статистики
    const animateNumbers = () => {
      const statNumbers = document.querySelectorAll('.stat-number');
      
      statNumbers.forEach(number => {
        const targetNumber = parseInt(number.getAttribute('data-target'));
        const startNumber = Math.floor(targetNumber * 0.1); // Начинаем с 10% от целевого значения
        number.textContent = startNumber;
        
        const increment = Math.ceil((targetNumber - startNumber) / 30);
        
        let currentNumber = startNumber;
        const updateNumber = () => {
          if (currentNumber < targetNumber) {
            currentNumber += increment;
            if (currentNumber > targetNumber) {
              currentNumber = targetNumber;
            }
            number.textContent = currentNumber;
            requestAnimationFrame(updateNumber);
          }
        };
        
        updateNumber();
      });
    };

    // Запускаем анимацию при прокрутке до секции статистики
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateNumbers();
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    const statsSection = document.querySelector('.stats-section');
    if (statsSection) {
      observer.observe(statsSection);
    }
  }, []);

  if (isLoading) {
    return (
      <div className="loader">
        <motion.div
          className="loader-logo"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 360],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        >
          SweDev
        </motion.div>
      </div>
    );
  }

  return (
    <div className="app">
      <div className="ink-cursor" style={{
        transform: `translate3d(${cursorPosition.x}px, ${cursorPosition.y}px, 0)`,
      }}>
        <span></span>
      </div>

      <nav className="vector-menu-content">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="nav-content"
          >
            <div className="logo">SweDev</div>
            <ul className="vector-menu-content-list">
              <li className="vector-menu-content-item">
                <a href="#about">О себе</a>
              </li>
              <li className="vector-menu-content-item">
                <a href="#portfolio">Портфолио</a>
              </li>
              <li className="vector-menu-content-item">
                <a href="#services">Услуги</a>
              </li>
              <li className="vector-menu-content-item">
                <a href="#contact">Контакты</a>
              </li>
            </ul>
          </motion.div>
        </Container>
      </nav>

      <main>
        <section className="hero">
          <div className="animated-background"></div>
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="hero-content"
            >
              <h1 className="marketing-text">
                Разработка <em>умных</em> ботов<br />
                для вашего <em>бизнеса</em><span className="dot">.</span>
              </h1>
              <p className="hero-description">
                Создаем эффективные решения для автоматизации вашего бизнеса
              </p>
              <div className="hero-buttons">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="t-btn primary"
                >
                  Заказать бота
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="t-btn secondary"
                >
                  Посмотреть портфолио
                </motion.button>
              </div>
            </motion.div>
          </Container>
        </section>

        <section id="about" className="about-section">
          <Container>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="about-content"
            >
              <div className="about-image">
                <div className="avatar-container">
                  <div className="avatar-animation"></div>
                </div>
              </div>
              <div className="about-text">
                <h2>О себе</h2>
                <p>Привет! Я разработчик ботов и основатель SweDev. Более 5 лет создаю эффективные решения для бизнеса с использованием современных технологий.</p>
                <ul className="skills-list">
                  <motion.li whileHover={{ scale: 1.05 }}>Python</motion.li>
                  <motion.li whileHover={{ scale: 1.05 }}>Node.js</motion.li>
                  <motion.li whileHover={{ scale: 1.05 }}>Telegram API</motion.li>
                  <motion.li whileHover={{ scale: 1.05 }}>AI & ML</motion.li>
                </ul>
              </div>
            </motion.div>
          </Container>
        </section>

        <section id="portfolio" className="portfolio-section">
          <Container>
            <h2 className="section-title">Портфолио</h2>
            <div className="portfolio-filters">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="filter-btn active"
              >
                Все
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="filter-btn"
              >
                Telegram
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="filter-btn"
              >
                AI боты
              </motion.button>
            </div>
            <div className="portfolio-grid">
              {[1, 2, 3].map((item) => (
                <motion.div
                  key={item}
                  className="portfolio-item"
                  whileHover={{ y: -10 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <div className="portfolio-image">
                    <div className="swedev-watermark">SweDev</div>
                  </div>
                  <h3>Бот для автоматизации продаж</h3>
                  <p>Telegram бот с интеграцией CRM и платежных систем</p>
                </motion.div>
              ))}
            </div>
          </Container>
        </section>

        <section id="services" className="services-section">
          <Container>
            <h2 className="section-title">Услуги</h2>
            <div className="services-grid">
              {[
                {
                  title: 'Telegram боты',
                  price: 'от 30 000 ₽',
                  features: ['Автоматизация продаж', 'Интеграция с CRM', 'Платежные системы']
                },
                {
                  title: 'AI ассистенты',
                  price: 'от 50 000 ₽',
                  features: ['Обработка языка', 'Машинное обучение', 'Персонализация']
                },
                {
                  title: 'Чат-боты',
                  price: 'от 40 000 ₽',
                  features: ['Поддержка клиентов', 'Аналитика', 'Интеграции']
                }
              ].map((service, index) => (
                <motion.div
                  key={index}
                  className="service-card"
                  whileHover={{ y: -10 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <div className="service-icon"></div>
                  <h3>{service.title}</h3>
                  <p className="price">{service.price}</p>
                  <ul className="features-list">
                    {service.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="t-btn"
                  >
                    Заказать
                  </motion.button>
                </motion.div>
              ))}
            </div>
          </Container>
        </section>

        <section id="contact" className="contact-section">
          <Container>
            <h2 className="section-title">Связаться со мной</h2>
            <motion.form
              className="contact-form"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <div className="form-group">
                <input type="text" placeholder="Ваше имя" required />
              </div>
              <div className="form-group">
                <input type="email" placeholder="Email" required />
              </div>
              <div className="form-group">
                <textarea placeholder="Ваше сообщение" required></textarea>
              </div>
              <motion.button
                type="submit"
                className="t-btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Отправить
              </motion.button>
            </motion.form>
          </Container>
        </section>
      </main>

      <footer className="footer">
        <Container>
          <div className="footer__content">
            <div className="footer__logo">SweDev</div>
            <div className="footer__social">
              <motion.a
                href="#"
                whileHover={{ scale: 1.2 }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <TelegramIcon />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.2 }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitHubIcon />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.2 }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <InstagramIcon />
              </motion.a>
            </div>
          </div>
        </Container>
      </footer>
    </div>
  );
}

export default App;
