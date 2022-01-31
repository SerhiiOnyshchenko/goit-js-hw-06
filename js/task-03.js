const images = [
   {
      url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'White and Black Long Fur Cat',
   },
   {
      url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
   },
   {
      url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Group of Horses Running',
   },
];
const ul = document.querySelector('.gallery');
const arrayLi = []
ul.style.display = 'flex';
ul.style.columnGap = '20px';
ul.style.listStyle = 'none';
images.map(el => {
	const liEl = document.createElement('li')
		liEl.insertAdjacentHTML('beforeend', `<img src='${el.url}' alt='${el.alt}'></img>`);
arrayLi.push(liEl)
});
ul.append(...arrayLi);

