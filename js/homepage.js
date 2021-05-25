'use strict'
// --------------------------------------------- Global Variables -------------------------------------------------------//
const userForm = document.getElementById('userForm');
const pElem = document.getElementById('introduction');
const buttonElem = document.getElementById('clickHere');
let submitButton;

// --------------------------------------------- Constructor Functions -------------------------------------------------------//

// --------------------------------------------- Prototype Methods -------------------------------------------------------//

// --------------------------------------------- Regular Functions -------------------------------------------------------//

function handleClick(event) {
  pElem.style.display = 'none';
  buttonElem.style.display = 'none';
  const formElem = document.createElement('form');
  userForm.appendChild(formElem);
  const labelElem = document.createElement('label');
  labelElem.setAttribute('for', 'username');
  labelElem.innerText = "Name";
  formElem.appendChild(labelElem);
  const inputElem = document.createElement('input');
  inputElem.setAttribute('id', 'username');
  inputElem.setAttribute('type', 'text');
  formElem.appendChild(inputElem);
  const submit = document.createElement('input');
  submit.setAttribute('type', 'submit');
  submit.setAttribute('value', 'Start Game');
  formElem.appendChild(submit);
  submitButton = submit;
}

function handleSubmit(event) {
  event.preventDefault();
  console.log(submitButton.value);
}
// --------------------------------------------- Event Listeners -------------------------------------------------------//

buttonElem.addEventListener('click', handleClick);
submitButton.addEventListener('click', handleSubmit);
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

//[TODO] if user inputs nothing and clicks submit, they are reprompted.
  // [TODO] create event listeners for submit button.
    // [TODO] if user name = null, nothing happens

//if user inputs a name and clicks submit, create object(user), which will later receive the properties of .score/.pass/etc. 


//Store object in local storage.

// navigate user to game page.

