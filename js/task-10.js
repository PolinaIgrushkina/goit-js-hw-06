// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }

// // Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит количество элементов в input 
// //и нажимает кнопку Создать, после чего рендерится коллекция.
// //При нажатии на кнопку Очистить, коллекция элементов очищается.

// // <div id="controls">
// //   <input type="number" min="1" max="100" step="1" />
// //   <button type="button" data-create>Create</button>
// //   <button type="button" data-destroy>Destroy</button>
// // </div>

// // <div id="boxes"></div>

// // Создай функцию createBoxes(amount), которая принимает один параметр - число. 
// //Функция создает столько < div >, сколько указано в amount и добавляет их в div#boxes.

// // Размеры самого первого <div> - 30px на 30px.
// // Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
// // Все элементы должены иметь случайный цвет фона в формате HEX. Используй готовую функцию getRandomHexColor 
// //для получения цвета.

// // Создай функцию destroyBoxes(), которая очищает содержимое div#boxes, тем самым удаляя все созданные элементы.


// // //Создание инпута
// const ipunt = document.querySelector('input');

// // //Создание div#boxes - хранилище всех созданных div
// const divBoxesEl = document.querySelector('#boxes');

// // //Кнопка Создать
// const buttonCreate = document.querySelector('[data-create]');

// // //Кнопка Очистить
// const buttonDestroy = document.querySelector('[data-destroy]');


// const InputNumberChoice = () => { console.log(input.value); };

// ipunt.addEventListener("input", InputNumberChoice);


// const numberEntry = () => {
    
//   let boxSize = 30;
  
//   const box = [];
  
//   for (let i = 0; i < input.value; i += 1) {
      
//     const div = document.createElement("div");
    
//     div.classList.add("newBox");
    
//     div.style.width = boxSize + "px";
    
//     div.style.height = boxSize + "px";
    
//     div.style.backgroundColor = getRandomHexColor();
    
//     box.push(div);
    
//     if (divBoxesEl.childElementCount >= 0) { 
//     boxSize += 10;
//     }
   
//     const divBoxesElToString = divBoxesEl.currentTarget.value.length.toString();
//   }
  
//   divBoxesEl.append(...box);
// };

// const onTargetCreateButtonClick = () => { };


// buttonCreate.addEventListener("click", onTargetCreateButtonClick);

// divBoxesEl.style.display = "flex";

// divBoxesEl.style.gap = "5px";

// divBoxesEl.style.alignItems = "center";

// const onTargetDestroyButtonClick = () => { divBoxesEl.innerHTML = ""; };
    
// buttonDestroy.addEventListener("click", onTargetDestroyButtonClick);

