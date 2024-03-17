function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// const bodyElement = document.querySelector('body');
// const spanElement = document.querySelector ('span.color');
// const buttonElement = document.querySelector ('.change-color');
// 
// buttonElement.addEventListener('click', (event) => {
  // const color = getRandomHexColor();
  // bodyElement.style.backgroundColor = color;
  // spanElement.innerHTML = color;
// });

document.querySelectorAll('.change-color').forEach(button => {

  button.addEventListener('click', () => {
    
  const color = getRandomHexColor();

  document.body.style.backgroundColor = color;
  document.querySelector ('span.color').textContent = color;
    });
});