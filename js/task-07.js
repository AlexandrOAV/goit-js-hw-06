const inputEl = document.getElementById('font-size-control');
const textSpanEl = document.getElementById('text');
function inputValue () {
   const textFontSize = inputEl.value + 'px'
   return textSpanEl.style.fontSize = textFontSize;
   }
inputEl.addEventListener('input', inputValue)





