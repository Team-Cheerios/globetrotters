'use strict'
// --------------------------------------------- Global Variables -------------------------------------------------------//
const userForm = document.getElementById('userForm');
const pElem = document.getElementById('introduction');
const buttonElem = document.getElementById('clickHere');
const formElem = document.createElement('form');
const labelElem = document.createElement('label');
const inputElem = document.createElement('input');
const submit = document.createElement('button');


// --------------------------------------------- Constructor Functions -------------------------------------------------------//

const User = function(name) {
  this.name = name;
}

// --------------------------------------------- Prototype Methods -------------------------------------------------------//


// --------------------------------------------- Regular Functions -------------------------------------------------------//

function renderForm() {
  userForm.appendChild(formElem);

  labelElem.setAttribute('for', 'username');
  labelElem.innerText = "Name";
  formElem.appendChild(labelElem);

  inputElem.setAttribute('id', 'username');
  inputElem.setAttribute('type', 'text');
  formElem.appendChild(inputElem);

  submit.textContent = "Start Game";
  submit.setAttribute('value', 'Start Game');
  formElem.appendChild(submit);
}

function handleClick(event) {
  pElem.style.display = 'none';
  buttonElem.style.display = 'none';
  renderForm();
}

function handleSubmit(event) {
  event.preventDefault();
  if(inputElem.value) {
    const newUser = new User(inputElem.value);
    console.log(newUser);
    updateStorageData(newUser);
    window.location.href = "./game.html";
  }
}

function updateStorageData(user) {
  const stringifiedUser = JSON.stringify(user);
  localStorage.setItem('user', stringifiedUser);
}
// --------------------------------------------- Event Listeners -------------------------------------------------------//

buttonElem.addEventListener('click', handleClick);
submit.addEventListener('click', handleSubmit);
// --------------------------------------------- Functions Calls -------------------------------------------------------//


