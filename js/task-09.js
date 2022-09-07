function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};

console.log(getRandomHexColor());

const span = document.querySelector('.color');

const button = document.querySelector('.change-color');

button.addEventListener('click', changeColor);

function changeColor(event) {
  document.body.style.backgroundColor = getRandomHexColor();
  span.textContent = getRandomHexColor();
};