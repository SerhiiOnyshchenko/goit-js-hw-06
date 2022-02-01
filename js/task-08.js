const forma = document.querySelector('.login-form');

forma.addEventListener('submit', event => {
   event.preventDefault();
   const {
      elements: { email, password },
   } = event.currentTarget;
   if (forma.elements.email.value === '' || forma.elements.password.value === '') {
      alert('Всі поля повинні бути заповнені!');
   } else {
      console.log(`${email.name}: ${email.value}, ${password.name}: ${password.value}`);
      event.currentTarget.reset();
   }
});
