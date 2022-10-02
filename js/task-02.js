const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsEl = document.querySelector('#ingredients');
const elementsArr = [];

ingredients.forEach(ingredient => {
  const item = document.createElement('li');
  item.classList.add('item')
  item.textContent = ingredient
  elementsArr.push(item)
});

ingredientsEl.append(...elementsArr);
