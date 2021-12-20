const headerMenu = document.querySelector(".header__menu-checkbox");
const mobileMenu = document.querySelector(".header__mobile");

headerMenu.addEventListener("click", () => {
    mobileMenu.classList.toggle("header__mobile--active");
    document.body.classList.toggle("no-scroll");
});