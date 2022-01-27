const forma = document.querySelector('.login-form');
const inputEmail = document.querySelector('input[name=email]');
const inputPassword = document.querySelector('input[name=password]');
const buttonSubmit = document.querySelector('button[type=submit]');

buttonSubmit.addEventListener('click', event => {
   if (inputEmail.value === '' || inputPassword.value === '') {
      alert('Всі поля повинні бути заповнені!');
   } else {
      const form = {
         email: inputEmail.value,
         password: inputPassword.value,
      };
      console.log(form);
      forma.reset();
   }
   event.preventDefault();
});
