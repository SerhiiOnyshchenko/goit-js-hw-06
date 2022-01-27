function getRandomHexColor() {
   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyElement = document.querySelector('body');
const btnElement = document.querySelector('.change-color');
const spanElement = document.querySelector('span.color');

btnElement.addEventListener('click', () => {
	const color = getRandomHexColor();
	bodyElement.style.backgroundColor = color;
	spanElement.innerHTML = color;
})

