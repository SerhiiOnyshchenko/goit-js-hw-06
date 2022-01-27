const items = document.getElementsByClassName('item');
console.log(`Number of categories: ${items.length}`);
for (const el of items) {
   console.log(`Category: ${el.querySelector('h2').innerHTML}`);
   console.log(`Elements: ${el.getElementsByTagName('li').length}`);
}