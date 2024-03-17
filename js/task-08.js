
const loginForm = document.querySelector('.login-form');

//додали обробку submit та забороняємо відправлення форми по дефолту
loginForm.addEventListener('submit', (event) => {
    event.preventDefault();



//деструктуризація для отрмання значення поля
const { email, password} = event.target.elements;

if (!email.value.trim() || !password.value.trim()) {
    alert('Заповніть всі поля');
} else {
    const formData = {
        email: email.value.trim(),
        password: password.value.trim()
    };

    console.log(formData);

    event.target.reset();
}

});