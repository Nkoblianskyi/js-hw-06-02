const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// Отримати силку на <li> з id ingredients
const ingredientsList = document.getElementById('ingredients');

//створити li з текстом та класом item та вставити його в список ul 

ingredients.forEach( ingredient => {
  const listItem = document.createElement('li');

  //добавити текст з масива ingredients 
  listItem.textContent = ingredient;

  //Добавляємо клас елементу
  listItem.classList.add('item');

  // вставляємо li в ul 
  ingredientsList.appendChild(listItem);
});