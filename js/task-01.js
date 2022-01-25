const items = document.getElementById('categories').getElementsByClassName('item');
console.log('Number of categories:' + ' ' + items.length);
for (const el of items) {
   console.log('Category:' + ' ' + el.firstElementChild.innerHTML);
   console.log('Elements:' + ' ' + el.getElementsByTagName('li').length);
}
