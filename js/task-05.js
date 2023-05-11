const textInputEl = document.getElementById('name-input');
const textSpanEl = document.getElementById('name-output');
const  textReplacement  = () => textSpanEl.textContent = textInputEl.value;
textInputEl.addEventListener('input', textReplacement)



