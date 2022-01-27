const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const ulElement = document.querySelector('#ingredients');
const liElements = ingredients.map(ingredient => {
   const li = document.createElement('li');
   li.className = 'item';
   li.innerHTML = ingredient;
   return li;
});
ulElement.append(...liElements);
