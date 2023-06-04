const emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
const formValues = document.getElementById('form');
const inputEmailValue = document.getElementById('input-email');
const spanText = document.getElementById('span-text');
const mainInfoContainer = document.getElementById('main-info-container');
const successActiveSection = document.getElementById('success-active-section');

formValues.addEventListener('submit', (e) => {
    e.preventDefault();

    if (emailRegex.test(inputEmailValue.value)) {
        inputEmailValue.classList.remove('error');
        spanText.classList.add('hide');
        mainInfoContainer.classList.add('inactive');
        successActiveSection.classList.remove('inactive');
    }else{
        inputEmailValue.classList.add('error');
        spanText.classList.remove('hide');
    }
});

const goToMain = () => {
    mainInfoContainer.classList.remove('inactive');
    successActiveSection.classList.add('inactive');
    inputEmailValue.value = '';
}