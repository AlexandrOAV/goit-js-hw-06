function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const spanEl = document.querySelector('.color');
const btnEl = document.querySelector('.change-color');
const replaceColor = () =>{
  spanEl.textContent = getRandomHexColor();
   btnEl.style.backgroundColor = getRandomHexColor();
}
btnEl.addEventListener('click', replaceColor);

