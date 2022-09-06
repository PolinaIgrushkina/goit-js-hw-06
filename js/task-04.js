const btnDecrement = document.querySelector('[data-action="decrement"]');
const btnIncrement = document.querySelector('[data-action="increment"]');
const span = document.querySelector(`#value`);

let counterValue = 0;


btnDecrement.addEventListener('click', decreaseCounter);

btnIncrement.addEventListener('click', increaseCounter);

function decreaseCounter() {
  counterValue -= 1;
  span.textContent = counterValue;
};

function increaseCounter() {
  counterValue += 1;
  span.textContent = counterValue;
};

