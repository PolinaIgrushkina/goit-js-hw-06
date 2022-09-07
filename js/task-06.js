const input = document.querySelector('#validation-input');

input.addEventListener('blur', validation);

const valueLength = Number(input.getAttribute('data-length'));

function validation(event) {

  if (event.currentTarget.value.length === valueLength) {
    updateClassEl('valid', 'invalid')
  } else {
    updateClassEl('invalid', 'valid')
  }
};

  function updateClassEl(addClass, removeClass) {
    input.classList.remove(removeClass);
    input.classList.add(addClass);
  };



