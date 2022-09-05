const ulEl = document.querySelector('#categories');

const arrayOfMainLi = ulEl.querySelectorAll('.item');

console.log(`Number of categories: ${arrayOfMainLi.length}`);

for (const mainLi of arrayOfMainLi) {

  const h2El = mainLi.querySelector('h2');;
  const ulSecondaryEl = mainLi.querySelector('ul')
  const arrayOfSecondaryLi = ulSecondaryEl.children;

  console.log(`Category: ${h2El.textContent}`);
  console.log(`Elements: ${arrayOfSecondaryLi.length}`);

}










