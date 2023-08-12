
const form = document.querySelector(".login-form");

form.addEventListener("submit", handlerSubmit);

function handlerSubmit(evt) {
  evt.preventDefault();

  const formElements = evt.currentTarget.elements;

  const inform = {
    email: formElements.email.value,
    password: formElements.password.value,
  };

  const alertMessage = "Всі поля повинні бути заповнені.";
  if (inform.email === '' || inform.password === '') {
    alert(alertMessage);
  } else {
    console.log(inform);
    form.reset();
  }
}
