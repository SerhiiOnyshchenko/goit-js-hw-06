const counterBtn = document.querySelector('#counter');
const counterValue = document.querySelector('#value');
let count = 0

counterBtn.addEventListener('click', function (event) {
   if (event.target.closest('button')) {
		if (event.target.closest('button').dataset.action === 'decrement') {
			count -=1
         counterValue.innerHTML = count;
      }
		if (event.target.closest('button').dataset.action === 'increment') {
			count += 1;
         counterValue.innerHTML = count;
      }
   }
});
