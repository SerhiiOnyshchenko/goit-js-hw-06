const forma = document.querySelector('.login-form');
const buttonSubmit = document.querySelector('button[type=submit]');

buttonSubmit.addEventListener('click', event => {
   if (forma.elements.email.value === '' || forma.elements.password.value === '') {
      alert('Всі поля повинні бути заповнені!');
   } else {
      const form = {
         email: forma.elements.email.value,
         password: forma.elements.password.value,
      };
      console.log(form);
      forma.reset();
   }
   event.preventDefault();
});
