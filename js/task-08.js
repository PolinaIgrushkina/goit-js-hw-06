const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', formSubmission);

const obj = {};

function formSubmission(event) {
  event.preventDefault();
  const { email, password } = event.currentTarget.elements;

  if (email.value === "" || password.value === "") {
    return alert('Все поля формы должны быть заполнены!');
  } else {
    obj[email.name] = email.value;
    obj[password.name] = password.value;
    console.log(obj);
    //console.log(`${email.name}: ${email.value}, ${password.name}: ${password.value}`);
    event.currentTarget.reset();
  }
};



