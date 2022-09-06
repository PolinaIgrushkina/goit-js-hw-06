const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const ulEl = document.querySelector('.gallery');
ulEl.style.display = "flex";
ulEl.style.gap = "20px";
ulEl.style.listStyle = "none";
ulEl.style.paddingLeft = "0px";


const list = images
  .map(({ url, alt }) => `<li><img src = "${url}" alt = "${alt}" width = "200" height = "150"></li>`)
  .join("");

ulEl.insertAdjacentHTML("beforeend", list);

console.log(ulEl);


