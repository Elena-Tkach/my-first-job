const menuBurgerEl = document.querySelector(`.js-burger__btn`);
const navEl = document.querySelector(`.js-menu`);
const overlayEl = document.querySelector(`.js-overlay`);


const onShowHideBurgerClick = () => {
    const addClassActive = navEl.classList.toggle(`active`);
    overlayEl.classList.toggle(`active`);


    if (addClassActive) {
        menuBurgerEl.setAttribute(`aria-label`, `Закрыть навигационное меню`);
    }

    if (!addClassActive) {
        menuBurgerEl.setAttribute(`aria-label`, `Открыть навигационное меню`);

    }
}

menuBurgerEl.addEventListener(`click`, onShowHideBurgerClick);

overlayEl.addEventListener(`click`, onShowHideBurgerClick);

navEl.addEventListener(`keydown`, (e) => {
    if (e.code === `Escape`) {
        onShowHideBurgerClick();

    }
});



