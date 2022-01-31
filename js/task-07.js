const inputElement = document.querySelector('#font-size-control');
const spanElement = document.querySelector('#text');

inputElement.addEventListener('input', () => {
   spanElement.style.fontSize = inputElement.value+"px";
});
