const inputElement = document.querySelector('#validation-input');
inputElement.addEventListener('blur', () => {
	if (inputElement.value.length === 6) {
	inputElement.classList.add('valid');
   inputElement.classList.remove('invalid');
} else {
	inputElement.classList.add('invalid');
	inputElement.classList.remove('valid');
	}
} )
