function getRandomHexColor() {
   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const divBoxes = document.querySelector('#boxes');
const btnCreate = document.querySelector('button[data-create]');
const btnDestroy = document.querySelector('button[data-destroy]');
const inputEl = document.querySelector('input');

function destroyBoxes(coutDiv) {
   const arrayDiv = divBoxes.querySelectorAll('div');
   for (let i = coutDiv; i > inputEl.value; i -= 1) {
      arrayDiv[i-1].remove();
   }
}

btnCreate.addEventListener('click', () => {
   let divElAll = divBoxes.querySelectorAll('div').length;
   if (divElAll <= inputEl.value) {
      for (let i = divElAll; i < inputEl.value; i += 1) {
         let divEl = document.createElement('div');
         divEl.style.backgroundColor = getRandomHexColor();
         divEl.style.width = 30 + i * 10 + 'px';
         divEl.style.height = 30 + i * 10 + 'px';
         divBoxes.append(divEl);
      }
   } else {
      destroyBoxes(divElAll);
   }
});

btnDestroy.addEventListener('click', () => {
   divBoxes.innerHTML = '';
});
