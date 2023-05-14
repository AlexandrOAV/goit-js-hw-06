const textInputEl = document.getElementById('name-input');
const textSpanEl = document.getElementById('name-output');
const  textReplacement  = () => {
    if (textInputEl.value === ''){
        textSpanEl.textContent = 'Anonymous'
    } else {
    textSpanEl.textContent = textInputEl.value;}}
textInputEl.addEventListener('input', textReplacement)



