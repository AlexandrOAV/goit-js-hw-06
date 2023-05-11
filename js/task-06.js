const textInputEl = document.getElementById('validation-input');

function selectBorder() {
    if (Number(textInputEl.dataset.length) === textInputEl.value.length) {
        textInputEl.classList.add('valid')
        textInputEl.classList.remove('invalid')
        
    } else {
        textInputEl.classList.add('invalid')
            textInputEl.classList.remove('valid')
}
}

textInputEl.addEventListener('blur', selectBorder)


