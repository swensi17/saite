// Navigation scroll effect
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    
    // Add/remove scrolled class based on scroll position
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

document.addEventListener('DOMContentLoaded', () => {
    // Theme toggle
    const themeToggle = document.querySelector('.theme-toggle');
    const body = document.body;
    let isDarkTheme = localStorage.getItem('darkTheme') === 'true';

    // Initialize theme
    if (isDarkTheme) {
        body.classList.add('dark-theme');
        themeToggle.querySelector('i').classList.replace('fa-moon', 'fa-sun');
    }

    themeToggle?.addEventListener('click', () => {
        isDarkTheme = !isDarkTheme;
        body.classList.toggle('dark-theme');
        localStorage.setItem('darkTheme', isDarkTheme);
        
        const icon = themeToggle.querySelector('i');
        if (isDarkTheme) {
            icon.classList.replace('fa-moon', 'fa-sun');
        } else {
            icon.classList.replace('fa-sun', 'fa-moon');
        }
    });

    // Settings menu functionality
    const settingsToggle = document.querySelector('.settings-toggle');
    const settingsDropdown = document.querySelector('.settings-dropdown');
    const closeSettings = document.querySelector('.close-settings');

    if (settingsToggle && settingsDropdown && closeSettings) {
        // Toggle settings menu
        settingsToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            settingsDropdown.classList.toggle('active');
        });

        // Close settings menu
        closeSettings.addEventListener('click', () => {
            settingsDropdown.classList.remove('active');
        });

        // Close settings when clicking outside
        document.addEventListener('click', (e) => {
            if (!settingsDropdown.contains(e.target) && !settingsToggle.contains(e.target)) {
                settingsDropdown.classList.remove('active');
            }
        });

        // Font size controls
        const decreaseFont = document.querySelector('.decrease-font');
        const increaseFont = document.querySelector('.increase-font');
        let fontSize = parseInt(localStorage.getItem('fontSize')) || 16;

        // Initialize font size
        document.documentElement.style.fontSize = `${fontSize}px`;

        if (decreaseFont && increaseFont) {
            decreaseFont.addEventListener('click', () => {
                if (fontSize > 12) {
                    fontSize -= 1;
                    document.documentElement.style.fontSize = `${fontSize}px`;
                    localStorage.setItem('fontSize', fontSize);
                }
            });

            increaseFont.addEventListener('click', () => {
                if (fontSize < 20) {
                    fontSize += 1;
                    document.documentElement.style.fontSize = `${fontSize}px`;
                    localStorage.setItem('fontSize', fontSize);
                }
            });
        }

        // Animation toggle
        const animationToggle = document.querySelector('.setting-item input[type="checkbox"]');
        let animationsEnabled = localStorage.getItem('animationsEnabled') !== 'false';

        if (animationToggle) {
            // Initialize animation state
            animationToggle.checked = animationsEnabled;
            document.body.classList.toggle('no-animations', !animationsEnabled);

            animationToggle.addEventListener('change', () => {
                animationsEnabled = animationToggle.checked;
                document.body.classList.toggle('no-animations', !animationsEnabled);
                localStorage.setItem('animationsEnabled', animationsEnabled);
            });
        }

        // Language select
        const languageSelect = document.querySelector('.language-select');
        if (languageSelect) {
            // Initialize language
            const currentLang = localStorage.getItem('language') || 'ru';
            languageSelect.value = currentLang;

            languageSelect.addEventListener('change', () => {
                const selectedLang = languageSelect.value;
                localStorage.setItem('language', selectedLang);
                // Here you would typically implement language switching logic
                // For example:
                // switchLanguage(selectedLang);
            });
        }
    }

    // Mobile menu
    const menuButton = document.querySelector('.menu-button');
    const mainMenu = document.querySelector('.main-menu');

    menuButton?.addEventListener('click', () => {
        mainMenu.classList.toggle('active');
        menuButton.classList.toggle('active');
    });

    // Close mobile menu when clicking a link
    const navLinks = document.querySelectorAll('.main-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            mainMenu.classList.remove('active');
            menuButton?.classList.remove('active');
        });
    });

    // Mobile menu functionality
    const navMenu = document.querySelector('nav ul');
    const navLinksMobile = document.querySelectorAll('nav ul li a');

    // Toggle mobile menu
    menuButton?.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        menuButton.classList.toggle('active');
    });

    // Close mobile menu when clicking a link
    navLinksMobile.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            menuButton?.classList.remove('active');
        });
    });

    // Add active class to current section in navigation
    const sections = document.querySelectorAll('section');
    
    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (window.scrollY >= (sectionTop - 300)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinksMobile.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').slice(1) === current) {
                link.classList.add('active');
            }
        });
    });

    // Language handling
    const translations = {
        en: {
            title: 'Title',
            description: 'Description',
            // Add more translations here
        },
        tg: {
            title: 'Сарлавҳа',
            description: 'Шарҳ',
            // Add more translations here
        },
        uz: {
            title: 'Sarlavha',
            description: 'Tavsif',
            // Add more translations here
        },
        zh: {
            title: '',
            description: '',
            // Add more translations here
        },
    };

    function setLanguage(lang) {
        // Save the selected language to localStorage
        localStorage.setItem('selectedLanguage', lang);
        
        // Update all elements with data-lang attribute
        document.querySelectorAll('[data-lang]').forEach(element => {
            const key = element.getAttribute('data-lang');
            const keys = key.split('.');
            let translation = translations[lang];
            
            // Navigate through nested translation objects
            for (const k of keys) {
                if (translation && translation[k]) {
                    translation = translation[k];
                } else {
                    translation = key; // Fallback to key if translation not found
                    break;
                }
            }
            
            if (element.tagName.toLowerCase() === 'input' || 
                element.tagName.toLowerCase() === 'textarea') {
                element.placeholder = translation;
            } else {
                element.textContent = translation;
            }
        });

        // Update language select dropdown
        const languageSelect = document.querySelector('.language-select');
        if (languageSelect) {
            languageSelect.value = lang;
        }

        // Trigger an event for other components that might need to know about language changes
        document.dispatchEvent(new CustomEvent('languageChanged', { detail: { language: lang } }));
    }

    // Initialize language from localStorage or browser preference
    function initializeLanguage() {
        const savedLanguage = localStorage.getItem('selectedLanguage');
        const browserLanguage = navigator.language.split('-')[0];
        const supportedLanguages = ['en', 'tg', 'uz', 'zh'];
        
        let defaultLanguage = 'en';
        
        // Check if browser language is supported
        if (supportedLanguages.includes(browserLanguage)) {
            defaultLanguage = browserLanguage;
        }
        
        // Use saved language or fall back to detected/default language
        const initialLanguage = savedLanguage || defaultLanguage;
        setLanguage(initialLanguage);
    }

    // Event listener for language selection
    languageSelect?.addEventListener('change', (e) => {
        setLanguage(e.target.value);
    });
    
    // Initialize language
    initializeLanguage();

    // Инициализация темы
    const themeToggle = document.querySelector('.theme-toggle');
    const icon = themeToggle.querySelector('i');
    
    // Проверяем сохраненную тему
    if (localStorage.getItem('darkMode') === 'true') {
        document.body.classList.add('dark-mode');
        icon.classList.replace('fa-moon', 'fa-sun');
    }
    
    // Обработчик клика по кнопке темы
    themeToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        
        if (document.body.classList.contains('dark-mode')) {
            icon.classList.replace('fa-moon', 'fa-sun');
            localStorage.setItem('darkMode', 'true');
        } else {
            icon.classList.replace('fa-sun', 'fa-moon');
            localStorage.setItem('darkMode', 'false');
        }
    });

    // Utility function for showing notifications
    function showNotification(title, message) {
        if (Notification.permission === 'granted') {
            new Notification(title, {
                body: message,
                icon: '/path/to/your/icon.png' // Add your notification icon path
            });
        }
    }

    // Smooth scroll for navigation links
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
});
