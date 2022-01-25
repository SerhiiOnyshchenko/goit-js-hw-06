const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const ul = document.querySelector('#ingredients');
for (const el of ingredients) {
   let li = document.createElement('li');
   li.className = 'item';
   li.innerHTML = el;
   ul.append(li);
}
