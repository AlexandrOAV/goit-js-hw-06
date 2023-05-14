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
  let boxesArray = [];
  let width = 30;
  let heigth = 30;

  for (let i = 1; i <= amount; i++){
    let divEl = document.createElement('div');
     divEl.style.backgroundColor = getRandomHexColor();
     divEl.style.margin = '5px';
     divEl.style.width = width +'px';
    divEl.style.height = heigth + 'px';
    width += 10;
    heigth += 10;
    boxesArray.push(divEl);
  }
  boxesEl.append(...boxesArray);
}
btndestroyEl.addEventListener('click', destroyBoxes);
function destroyBoxes() {
  boxesEl.innerHTML = '';
}

