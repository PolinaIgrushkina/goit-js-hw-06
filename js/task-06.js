const input = document.querySelector('#validation-input');

input.addEventListener('blur', validation);

const valueLength = Number(input.getAttribute('data-length'));

function validation(event) {

  if (event.currentTarget.value.length === valueLength) {
    input.classList.remove('invalid');
    input.classList.add('valid');
    
  } else {
    input.classList.remove('valid');
    input.classList.add('invalid');
    
  }

};


