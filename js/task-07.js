const inputEl = document.querySelector('#font-size-control');

const textEl = document.querySelector('#text');

inputEl.addEventListener('input', textChanging);

function textChanging(event) {
  textEl.style.fontSize = event.currentTarget.value + "px";
};

