const menuLinks = Array.from(document.querySelectorAll('.menu__link'));

menuLinks.forEach(link => {
    link.onclick = function (event) {
        const parentItem = link.closest('.menu__item');
        const subMenu = parentItem.querySelector('.menu_sub');

        if (!subMenu) {
            return true;
        }

        event.preventDefault();

        subMenu.classList.toggle('menu_active');

        return false;
    };
});
