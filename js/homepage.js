'use strict'
// --------------------------------------------- Global Variables -------------------------------------------------------//
const userForm = document.getElementById('userForm');
const pElem = document.getElementById('introduction');
const buttonElem = document.getElementById('clickHere');
const formElem = document.createElement('form');
const labelElem = document.createElement('label');
const inputElem = document.createElement('input');
const submit = document.createElement('input');


// --------------------------------------------- Constructor Functions -------------------------------------------------------//

const User = function(name) {
  this.name = name;
  this.score = 0;
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

  submit.setAttribute('type', 'submit');
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
  }
}

function updateStorageData(user) {
  const stringifiedUser = JSON.stringify(user);
  localStorage.setItem('user', stringifiedUser)
}
// --------------------------------------------- Event Listeners -------------------------------------------------------//

buttonElem.addEventListener('click', handleClick);
submit.addEventListener('click', handleSubmit);
// --------------------------------------------- Functions Calls -------------------------------------------------------//


// [DONE]User clicks button and <p "introduction"> disappears.
// [DONE] create button and p elems in DOM.
// [DONE] create event listener on button, for "click"
// [DONE] write a "handleEvent" function to make innerHTML " "



// [DONE] The "click here" button also disappears.
//    // [DONE] make inner HTML for button " " 

// a form appears in the same space where <p "introduction"> formerly was.
  //[DONE] create div elem "userForm"
  //[DONE] create form elem inside handleClick function
    //[DONE] create label elem
    //[DONE] create input form/bar thing
    //[DONE] create submit button
  //[DONE] append form elem to "userForm"

//[DONE] user is asked to input their username into the form.

//[DONE] if user inputs nothing and clicks submit, they are reprompted.
  // [DONE] create event listeners for submit button.
    // [DONE] if user name = null, nothing happens

//[DONE] if user inputs a name and clicks submit, create object(user), which will later receive the properties of .score/.pass/etc.


//Store object in local storage.

// navigate user to game page.

