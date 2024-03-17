const valueSpan = document.getElementById('value');

const decrementButton = document.querySelector('button[data-action="decrement"]');
const incrementButton = document.querySelector('button[data-action="increment"]');

let counterValue = 0 ;
valueSpan.textContent = counterValue;

function decrement () {
    counterValue-- ;
    return valueSpan.textContent = counterValue;
};

function increment () {
    counterValue++ ;
    return valueSpan.textContent = counterValue;
};

decrementButton.addEventListener('click', decrement);
incrementButton.addEventListener('click', increment);
