// Напиши скрипт управления формой логина.

// <form class="login-form">
//   <label>
//     Email
//     <input type="email" name="email" />
//   </label>
//   <label>
//     Password
//     <input type="password" name="password" />
//   </label>
//   <button type="submit">Login</button>
// </form>


// Если пользователь заполнил все поля и отправил форму, собери значения полей в обьект, 
//где имя поля будет именем свойства, а значение поля - значением свойства.
//Для доступа к элементам формы используй свойство elements.
// Выведи обьект с введенными данными в консоль и очисти значения полей формы методом reset.

const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', formSubmission);

const obj = {};

function formSubmission(event) {
  event.preventDefault();
  const { email, password } = event.currentTarget.elements;

  if (email.value === "" || password.value === "") {
    return alert('Все поля формы должны быть заполнены!');
  } else {
    obj[event.target.email.name] = event.target.email.value;
    obj[event.target.password.name] = event.target.password.value;
    console.log(obj);
    //console.log(`${email.name}: ${email.value}, ${password.name}: ${password.value}`);
    event.currentTarget.reset();
  }
};



