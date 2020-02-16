document.addEventListener('DOMContentLoaded', function () {
    const navContainer = document.querySelector('.nav');
    const navItems = navContainer.querySelectorAll('.nav__item');
    const navList = navContainer.querySelector('.nav__list');
    let newItems = '';
    
    let navItemsWidth = 0;
    let navContainerWidth = outerWidth(navContainer);

    [...navItems].forEach((item) => {
        navItemsWidth += outerWidth(item);
    })


    responsiveMenu();

    window.addEventListener('resize', function () {
        responsiveMenu(); 
    });

    function responsiveMenu() {

        let oldChild = null;
        navContainerWidth = outerWidth(navContainer);
        
        while (navContainerWidth < navItemsWidth) {
            navItemsWidth -= outerWidth(navList.lastElementChild);
            oldChild = navList.removeChild(navList.lastElementChild);
            console.log(navItemsWidth);
            newItems += `<span>${oldChild}</span>`
        }
        console.log('items: ', navItemsWidth);
        console.log('nav: ', navContainerWidth);
        console.log(newItems);

    }
});




function outerWidth(element) {
    let elWidth = element.offsetWidth;
    let elStyle = getComputedStyle(element);
    elWidth += parseInt(elStyle.marginLeft) + parseInt(elStyle.marginRight);
    return +elWidth;
}