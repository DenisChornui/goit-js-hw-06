// Обробка відправлення форми form.login-form повинна відбуватися відповідно до події submit.
// Під час відправлення форми сторінка не повинна перезавантажуватися.
// Якщо у формі є незаповнені поля, виводь alert з попередженням про те, що всі поля повинні бути заповнені.
// Якщо користувач заповнив усі поля і відправив форму, збери значення полів в об'єкт, де ім'я поля буде ім'ям властивості, а значення поля - значенням властивості. Для доступу до елементів форми використовуй властивість elements.
// Виведи об'єкт із введеними даними в консоль і очисти значення полів форми методом reset.

const form = document.querySelector(".login-form");

form.addEventListener("submit", handlerSubmit);

function handlerSubmit(evt) {
  evt.preventDefault();
//   console.dir(evt.currentTarget);

  const formElements = evt.currentTarget.elements;

  const inform = {
    email: formElements.email.value,
    password: formElements.password.value,
  };

  const alertMessage = "Всі поля повинні бути заповнені.";
  if (inform.email.length === 0 || inform.password.length === 0) {
    console.log(alert(alertMessage));
  } else {
    console.log(inform);
    form.reset();
  }
}
