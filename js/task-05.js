const inputElement = document.querySelector('input#name-input');
const spanElementH1 = document.querySelector('span#name-output');

inputElement.addEventListener('keyup', inputEVal);
function inputEVal() {
   spanElementH1.innerHTML = inputElement.value;
   if (!spanElementH1.innerHTML) {
      spanElementH1.innerHTML = 'Anonymous';
   }
}
