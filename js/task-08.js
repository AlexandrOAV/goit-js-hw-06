const formEl = document.querySelector('.login-form');
function validationForm (event) {
event.preventDefault();
let inputObj = {};
const EnteredEmail = formEl.elements.email.value;
const EnteredPassword = formEl.elements.password.value;
if (EnteredEmail === '' || EnteredPassword === ''){
    alert("Please enter your email and password")
} else {
    inputObj.email = EnteredEmail;
    inputObj.password = EnteredPassword;
    console.log('entered next data user', inputObj);
    event.currentTarget.reset();
    }
};
formEl.addEventListener('submit', validationForm)
