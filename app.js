document.addEventListener('DOMContentLoaded', function () {
    const navContainer = document.querySelector('.nav');
    const navItems = navContainer.querySelectorAll('.nav__item');
    const navList = navContainer.querySelector('.nav__list');
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
            oldChild = navList.removeChild(navList.children[navList.children.length - 1]);
            subList.insertBefore(oldChild, subList.firstChild);

        }
        

        if (subList.children.length) {
            
            subItem.appendChild(subList);
            navList.appendChild(subItem);

   
        }
        
        
    }
});




function outerWidth(element) {
    let elWidth = element.offsetWidth;
    let elStyle = getComputedStyle(element);
    elWidth += parseInt(elStyle.marginLeft) + parseInt(elStyle.marginRight);
    return +elWidth;
}