document.addEventListener('DOMContentLoaded', function () {
    if (document.documentElement.clientWidth < 1024) {
        const navContainer = document.querySelector('.nav');
        const navList = navContainer.querySelector('.nav__list');
        const navItems = navContainer.querySelectorAll('.nav__list .nav__item');

        let oldChild = null;
        let navItemsWidth = 0;

        let subItem = document.createElement('li');
        let subList = document.createElement('ul');
        subItem.classList.add('nav__item', 'more');
        subList.classList.add('sub-menu');
        
        let navContainerWidth = outerWidth(navContainer);

        [...navItems].forEach((item) => {
            navItemsWidth += outerWidth(item);
        });


        responsiveMenu();

        window.addEventListener('resize', function () {
            responsiveMenu();
        });

        function responsiveMenu() {
            navContainerWidth = outerWidth(navContainer);

            while (navItemsWidth > navContainerWidth) {
                navItemsWidth -= outerWidth(navList.lastElementChild);
                console.dir(navList.children);
                console.log(navList.children[position]);
                if (navList.children[position]) {
                    oldChild = navList.removeChild(navList.children[navList.children.length - 1]);
                    subList.insertBefore(oldChild, subList.firstChild);
                }
            }

            if (subList.children.length) {
                subItem.innerHTML = '<a href="javascript:void(0)">...</a>'
                subItem.appendChild(subList);
                navList.appendChild(subItem);
            }
        }
    }
});




function outerWidth(element) {
    let elWidth = element.offsetWidth;
    let elStyle = getComputedStyle(element);
    elWidth += parseInt(elStyle.marginLeft) + parseInt(elStyle.marginRight);
    return +elWidth;
}