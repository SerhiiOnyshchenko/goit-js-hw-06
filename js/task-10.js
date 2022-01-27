function getRandomHexColor() {
   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const divBoxes = document.querySelector('#boxes');
const btnCreate = document.querySelector('button[data-create]');
const btnDestroy = document.querySelector('button[data-destroy]');
const inputEl = document.querySelector('input');

btnCreate.addEventListener('click', () => {
	divBoxes.innerHTML = '';
   for (let i = 0; i < inputEl.value; i += 1) {
      let divEl = document.createElement('div');
      divEl.style.backgroundColor = getRandomHexColor();
      divEl.style.width = 30+i*10+'px';
      divEl.style.height = 30+i*10+'px';
      divBoxes.append(divEl);
   }
});
btnDestroy.addEventListener('click', () => {
   divBoxes.innerHTML = '';
});

