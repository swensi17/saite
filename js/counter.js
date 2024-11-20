document.addEventListener('DOMContentLoaded', () => {
    // Функция для запуска анимации счетчика
    function startCounter(element) {
        // Проверяем, является ли элемент счетчиком 24/7
        if (element.classList.contains('support-time')) {
            return; // Пропускаем анимацию для 24/7
        }

        const target = parseInt(element.getAttribute('data-target'));
        const duration = 2000; // Продолжительность анимации в миллисекундах
        const step = target / (duration / 16); // 60 FPS
        let current = 0;

        // Определяем символ (+ или %)
        const symbolSpan = element.querySelector('.stat-symbol');
        const symbol = symbolSpan ? symbolSpan.textContent : '';

        // Сбрасываем текущее значение на 0
        element.childNodes[0].textContent = '0';

        const counter = setInterval(() => {
            current += step;
            if (current >= target) {
                element.childNodes[0].textContent = target;
                clearInterval(counter);
            } else {
                element.childNodes[0].textContent = Math.floor(current);
            }
        }, 16);
    }

    // Функция для проверки, находится ли элемент в видимой области
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.bottom >= 0 &&
            rect.left <= (window.innerWidth || document.documentElement.clientWidth) &&
            rect.right >= 0
        );
    }

    // Получаем все элементы с классом stat-number
    const statNumbers = document.querySelectorAll('.stat-number');
    
    // Создаем наблюдатель за пересечением
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Запускаем анимацию для всех счетчиков
                statNumbers.forEach(number => {
                    startCounter(number);
                });
            }
        });
    }, {
        threshold: 0.5 // Запускать, когда 50% элемента видно
    });

    // Находим секцию со статистикой
    const statsSection = document.querySelector('.stats-section');
    if (statsSection) {
        // Начинаем наблюдение за секцией
        observer.observe(statsSection);
    }
});
