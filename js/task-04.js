const counterBtn = document.querySelector('#counter');
const counterValue = document.querySelector('#value');

counterBtn.addEventListener('click', function (event) {
   if (event.target.closest('button')) {
      if (event.target.closest('button').dataset.action === 'decrement') {
         counterValue.innerHTML -= 1;
      }
      if (event.target.closest('button').dataset.action === 'increment') {
         counterValue.innerHTML = Number(counterValue.innerHTML) + 1;
      }
   }
});
