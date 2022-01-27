const inputElement = document.querySelector('input#name-input');
const spanElementH1 = document.querySelector('span#name-output');

inputElement.addEventListener('input', () => {
   spanElementH1.innerHTML = inputElement.value;
   if (!inputElement.value) {
      spanElementH1.innerHTML = 'Anonymous';
   }
});
