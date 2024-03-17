const validationInput = document.getElementById('validation-input');

validationInput.addEventListener('blur', () => {
    const isValid = validationInput.value.length === parseInt(validationInput.getAttribute('data-length'));
    validationInput.classList.toggle('valid', isValid);
    validationInput.classList.toggle('invalid', !isValid);
});