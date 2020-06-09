let moreArray = document.querySelectorAll('.services__container__item-more');
let servicesContainer = document.querySelector('.services__container');
let openBurgerBtn = document.querySelector('.header__burger-menu');
let menu = document.querySelector('.header__nav__menu');

servicesContainer.addEventListener('click', servicesClick);
openBurgerBtn.addEventListener('click', openMenu);

function servicesClick(e) {
    e.stopPropagation();

    moreArray.forEach(item => {
        if (e.target == item) {
            item.parentNode.childNodes[1].childNodes[1].classList.add('services__container__item-svg-fill');
            item.classList.toggle('services__container__item-more');
            item.classList.toggle('services__container__item-moreOpen');
            item.previousElementSibling.children[0].classList.toggle('blockDisplay')
        } else {
            item.classList.remove('services__container__item-moreOpen');
            item.previousElementSibling.children[0].classList.remove('blockDisplay')
            item.classList.add('services__container__item-more');

        }
    })
}

function openMenu(e) {
    menu.classList.toggle('header__nav__menu-open');
    openBurgerBtn.classList.toggle('header__burger-menu-open');

}