const modalEl = document.querySelector('.js-modals');
const btns = document.querySelectorAll('.js-btn');
const modalsEl = document.querySelectorAll('js-modal');
const btnClose = document.querySelector('.js_btn-close');
const popupEl = document.querySelector(`.js-popup`);
const formPhone = document.querySelector(`.js-form__phone`);
const formMail = document.querySelector(`.js-form_mail`);
let previousActiveElement;


const formReset = (el) => {
    (el).reset();
}

const showModal = (e) => {
    const path = e.currentTarget.getAttribute('data-path');

    document.querySelector(`[data-target="${path}"]`).classList.add('modal--visible');
    modalEl.classList.add('modals__inner--visible');
    body.classList.add('no-scroll');

    previousActiveElement = document.activeElement;

    setTimeout(() => {
        btnClose.focus();
    }, 100);

    document.addEventListener('keydown', onPressEscKeydown);

};

const hideModal = (elem) => {
    const modalVisible = document.querySelector('.modal--visible');

    modalEl.classList.remove('modals__inner--visible');
    modalVisible.classList.remove('modal--visible');
    popupEl.classList.remove('popup__visible');
    body.classList.remove('no-scroll');

    previousActiveElement.focus();

    document.removeEventListener('keydown', onPressEscKeydown);

};

const onPressEscKeydown = (el) => {
    if (el.code === `Escape`) {
        hideModal();
        formReset(formPhone);
        formReset(formMail);
    }
};

btns.forEach((el) => {
    el.addEventListener('click', showModal)
})


btnClose.addEventListener('click', () => {
    hideModal();
    formReset(formPhone);
    formReset(formMail);
});

modalEl.addEventListener('click', (el) => {
    if (el.target == modalEl) {
        hideModal();
        formReset(formPhone);
        formReset(formMail);
    }
});






