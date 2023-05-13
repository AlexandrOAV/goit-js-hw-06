function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const btnCreatEl = document.querySelector('[data-create]');
const btndestroyEl = document.querySelector('[data-destroy]');
const boxesEl = document.getElementById('boxes');
const inputEl = document.querySelector('#control, input');

btnCreatEl.addEventListener('click', createBoxes)
function createBoxes() {
  const amount = (Number(inputEl.value));
  destroyBoxes();
  console.log(amount);
  let boxesArray = [];
  let width = '30px'
  let heigth = '30px'

  for (let i = 1; i <= amount; i++){
    let divEl = document.createElement('div');
     divEl.style.backgroundColor = getRandomHexColor();
     divEl.style.margin = '5px';
     divEl.style.width = width;
    divEl.style.height = heigth;
    width = Number.parseInt(width)+10 +'px';
    heigth = Number.parseInt(heigth)+10 +'px';
    boxesArray.push(divEl);
  }
  console.log(boxesArray);
  boxesEl.append(...boxesArray);
}
btndestroyEl.addEventListener('click', destroyBoxes);
function destroyBoxes() {
  boxesEl.innerHTML = '';
}

