// task-10.js

// const inputElement = document.querySelector('#controls input');
// const createButton = document.querySelector('[data-create]');
// const destroyButton = document.querySelector('[data-destroy]');
// const boxesContainer = document.querySelector('#boxes');
// 
// function createBoxes(amount) {
  // for (let i = 0; i < amount; i++) {
    // const box = document.createElement('div');
    // const size = 30 + i * 10;
    // box.style.cssText = `
      // width: ${size}px;
      // height: ${size}px;
      // background-color: ${getRandomHexColor()};
      // margin-bottom: 10px;
    // `;
    // boxesContainer.appendChild(box);
  // }
// }
// 
// function destroyBoxes() {
  // boxesContainer.innerHTML = '';
// }
// 
// function getRandomHexColor() {
  // return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
// }
// 
// createButton.addEventListener('click', () => {
  // createBoxes(inputElement.value);
// });
// 
// destroyButton.addEventListener('click', () => {
  // destroyBoxes();
// });
// 
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
}

const createButton = document.getElementById('[data-create]');
const destroyButton = document.getElementById('[data-destroy]');
const boxesContainer = document.getElementById('boxes');

createButton.addEventListener ('click', () => {
  const amount = document.querySelector('#controls input').value;

  for (let i = 0; i < amount; i++) {

    const size = 30 + 1 *10;

    const box = `<div style="width:${size}px;height:${size}px;background-color:${getRandomHexColor()};margin-bottom:10px;"></div>`;
  
    boxesContainer.insertAdjacentHTML('beforeend', box);
  }
});



