// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize any necessary functionality here
    console.log('Website loaded successfully');
    
    // Инициализация меню-бургера
    function t_menuburger_init(recid) {
        var rec = document.querySelector('#rec' + recid);
        if (!rec) return;
        
        var burger = rec.querySelector('.t-menuburger');
        if (!burger) return;
        
        var isSecondStyle = burger.classList.contains('t-menuburger_second');
        
        if (isSecondStyle && !window.isMobile && !('ontouchend' in document)) {
            burger.addEventListener('mouseenter', function() {
                if (burger.classList.contains('t-menuburger-opened')) return;
                burger.classList.remove('t-menuburger-unhovered');
                burger.classList.add('t-menuburger-hovered');
            });
            
            burger.addEventListener('mouseleave', function() {
                if (burger.classList.contains('t-menuburger-opened')) return;
                burger.classList.remove('t-menuburger-hovered');
                burger.classList.add('t-menuburger-unhovered');
                setTimeout(function() {
                    burger.classList.remove('t-menuburger-unhovered');
                }, 300);
            });
        }
        
        burger.addEventListener('click', function() {
            if (!burger.closest('.tmenu-mobile') &&
                !burger.closest('.t450__burger_container') &&
                !burger.closest('.t466__container') &&
                !burger.closest('.t204__burger') &&
                !burger.closest('.t199__js__menu-toggler')) {
                burger.classList.toggle('t-menuburger-opened');
                burger.classList.remove('t-menuburger-unhovered');
            }
        });
        
        var menu = rec.querySelector('[data-menu="yes"]');
        if (!menu) return;
        
        var menuLinks = menu.querySelectorAll('.t-menu__link-item');
        var submenuClassList = ['t978__menu-link_hook', 't978__tm-link', 't966__tm-link', 't794__tm-link', 't-menusub__target-link'];
        
        Array.prototype.forEach.call(menuLinks, function(link) {
            link.addEventListener('click', function() {
                var isSubmenuHook = submenuClassList.some(function(submenuClass) {
                    return link.classList.contains(submenuClass);
                });
                if (isSubmenuHook) return;
                burger.classList.remove('t-menuburger-opened');
            });
        });
        
        menu.addEventListener('clickedAnchorInTooltipMenu', function() {
            burger.classList.remove('t-menuburger-opened');
        });
    }
    
    // Инициализация при загрузке страницы
    t_menuburger_init('567440345');
});

// Animation for records
(function () {
    if (typeof(sessionStorage) != 'undefined' && sessionStorage.getItem('visited') !== 'y' && document.visibilityState) {
        var records = document.querySelectorAll('.t-records');
        records.forEach(function(el) {
            el.classList.add("t-records_animated");
        });
        
        setTimeout(function () {
            records.forEach(function(el) {
                el.classList.add("t-records_visible");
            });
            sessionStorage.setItem("visited", "y");
        }, 400);
    }
})();
