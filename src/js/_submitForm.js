const selector = document.querySelectorAll(`input[type="tel"]`);
const im = new Inputmask(`+7 (999) 999-99-99`);

const successSentForm = function () {
    popupEl.classList.add('popup__visible');
    setTimeout(() => {
        btnClose.focus();
    }, 100);
};


const formSend = (form, successModal) => {
    const formData = new FormData(form);
    const xhr = new XMLHttpRequest();

    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                successModal();
            }
        }
    }
    xhr.open('POST', '../resources/mail.php', true);
    xhr.send(formData);

    form.reset();
}

im.mask(selector);



formPhone.addEventListener('submit', event => {
    event.preventDefault();
    formSend(formPhone, successSentForm);
})


formMail.addEventListener('submit', event => {
    event.preventDefault();
    formSend(formMail, successSentForm);

})