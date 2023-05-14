function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const spanEl = document.querySelector('.color');
const bodyEl = document.querySelector('body');
const btnEl = document.querySelector('.change-color');
const replaceColor = () =>{
  bodyEl.style.backgroundColor = getRandomHexColor();
  spanEl.textContent = bodyEl.style.backgroundColor;  
}
btnEl.addEventListener('click', replaceColor);


