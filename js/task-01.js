const items = document.querySelectorAll('.item');
console.log(`Number of categories: ${items.length}`);
items.forEach(element => {
      console.log(`Category: ${element.querySelector('h2').innerHTML}`);
      console.log(`Elements: ${element.getElementsByTagName('li').length}`);
});
