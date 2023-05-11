const btnDecrementEl= document.querySelector('button[data-action="decrement"]');
const btnIncrementEl= document.querySelector('button[data-action="increment"]');
const spanEl = document.getElementById('value');
let counterValue = 0;

const decrement =  ()=> {
counterValue -=1;
return spanEl.textContent = counterValue;
};
const increment = () => {
counterValue +=1;
return spanEl.textContent = counterValue;
}

btnDecrementEl.addEventListener('click', decrement);
btnIncrementEl.addEventListener('click', increment);

