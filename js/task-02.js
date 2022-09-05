const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ArrayOFLI = ingredients.map(ingridient => {
  const liEl = document.createElement("li");
  liEl.textContent = ingridient;
  liEl.classList.add('item');
  return liEl;
});

const ingredientsEl = document.querySelector('#ingredients');

ingredientsEl.append(...ArrayOFLI);

console.log(ingredientsEl);


