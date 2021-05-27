'use strict';
// --------------------------------------------- Global Variables -------------------------------------------------------//
let pathElem = document.getElementsByTagName('path');
let currentCountry;
const questionBox = document.getElementById('questionBox');
const leaderboardDiv = document.getElementById('scorebox');
let score = 0;
let music = new Audio('./sound/music.mp3');
let currentUser;

// --------------------------------------------- Constructor Functions -------------------------------------------------------//
function Country(name, id, image) {
  this.name = name;
  this.id = id;
  this.image = image;
  this.guesses = 3;
}

function User(name, score) {
  this.name = name;
  this.score = score;
}

// --------------------------------------------- Prototype Methods -------------------------------------------------------//
Country.allCountries = [];
Country.pickedCountries = [];
User.leaderboard = [];

// --------------------------------------------- Regular Functions -------------------------------------------------------//
function newCountry(name, id, image) {
  let country = new Country(name, id, image);
  Country.allCountries.push(country);
}

function pickCountry() {

  questionBox.innerHTML = '';

  let countryH2Elem = document.createElement('h2');
  questionBox.appendChild(countryH2Elem);
  if (Country.allCountries.length !== Country.pickedCountries.length){
    let k = Math.floor(Math.random()*Country.allCountries.length);
    currentCountry = Country.allCountries[k];

    while (Country.pickedCountries.includes(currentCountry.name)) {
      k = Math.floor(Math.random()*Country.allCountries.length);
      currentCountry = Country.allCountries[k];
    }
    console.log(currentCountry.image);
    countryH2Elem.textContent = currentCountry.name;

    let flagImgElem = document.createElement('img');
    flagImgElem.setAttribute('class', 'flagImg');
    questionBox.appendChild(flagImgElem);
    flagImgElem.setAttribute('src', `${currentCountry.image}`);

    Country.pickedCountries.push(currentCountry.name);
  } else {
    countryH2Elem.textContent = `No more countries left to guess! You guessed ${currentUser.score} countries out of ${Country.allCountries.length}`;
    saveUser();
    music.pause();
  }
}

function handleEvent(event){
  let target = event.target;
  if (target.id === currentCountry.id){
    target.setAttribute('class', 'countryGreen');
    target.removeEventListener('click', handleEvent);
    currentUser.score++;
    console.log(currentUser.score);
    let audioCorrect = new Audio('./sound/correct.wav');
    audioCorrect.play();
    renderLeaderboard()
  } else if (target.id !== currentCountry.id){
    for (let k = 0; k < pathElem.length; k++){
      if (currentCountry.id === pathElem[k].id){
        pathElem[k].setAttribute('class', 'countryRed');
        pathElem[k].removeEventListener('click', handleEvent);
        console.log(currentUser.score);
        let audioWrong = new Audio('./sound/wrong.mp3');
        audioWrong.play();
      }
    }
  }
  pickCountry();
}

function renderLeaderboard() {
  leaderboardDiv.innerHTML = ''
  const scoreHeader = document.createElement('h3')
  scoreHeader.textContent = `Your Score ${currentUser.score}`
  leaderboardDiv.appendChild(scoreHeader)

  // const userScore = document.createElement('p');
  // userScore.textContent = currentUser.score;
  // leaderboardDiv.appendChild(userScore);

  const leaderboardOl = document.createElement('ol');
  leaderboardDiv.appendChild(leaderboardOl);

  for (let i=0; i<User.leaderboard.length-1; i++) {
    const scoreLi = document.createElement('li');
    scoreLi.textContent = `${User.leaderboard[i].name}: ${User.leaderboard[i].score}`;
    leaderboardOl.appendChild(scoreLi);
  }
}


// load current user, show current score, 
function loadUser() {
  let newUser = localStorage.getItem('user');
  let parsedUser = JSON.parse(newUser);
  currentUser = new User(parsedUser.name, 0);
  console.log(currentUser);
  User.leaderboard.push(currentUser);
}

function saveUser() {
  const stringifiedUsers = JSON.stringify(User.leaderboard);
  localStorage.setItem('leaderboard', stringifiedUsers);
}

function loadLeaderboard() {
  let newLeaderboard = localStorage.getItem('leaderboard');
  if (newLeaderboard) {
    let parsedLeaderboard = JSON.parse(newLeaderboard);
    // for (let user of parsedLeaderboard) {
    //   new User(user.name, user.score);
    //   User.leaderboard.push(user)
    //   console.log(user);
    // } 
    for (let user of parsedLeaderboard) {
      const newUser = new User(user.name, user.score);
        User.leaderboard.push(newUser);
        console.log(newUser);
    }
  }
}

// --------------------------------------------- Event Listeners -------------------------------------------------------//
for (let i = 0; i < pathElem.length; i++){
  pathElem[i].addEventListener('click', handleEvent);
}

// --------------------------------------------- Functions Calls -------------------------------------------------------//
music.play();
music.volume = 0.5;
music.loop = true
music.muted = false

newCountry('Albania', 'AL', './images/Flags/albania.png');
newCountry('Armenia', 'AM', './images/Flags/armenia.png');
newCountry('Austria', 'AT', './images/Flags/austria.png');
newCountry('Belgium', 'BE', './images/Flags/belgium.png');
newCountry('Bulgaria', 'BG', './images/Flags/bulgaria.svg');
newCountry('Bosnia and Herzegovina', 'BA', './images/Flags/bosnia.png');
newCountry('Belarus', 'BY', './images/Flags/belarus.png');
newCountry('Switzerland', 'CH', './images/Flags/switzerland.png');
newCountry('Czech Republic', 'CZ', './images/Flags/czechRepublic.png');
newCountry('Germany', 'DE', './images/Flags/germany.png');
newCountry('Denmark', 'DK', './images/Flags/denmark.svg');
newCountry('Estonia', 'EE', './images/Flags/estonia.png');
newCountry('Finland', 'FI', './images/Flags/finland.png');
newCountry('United Kingdom', 'GB', './images/Flags/unitedKingdom.png');
newCountry('Georgia', 'GE', './images/Flags/georgia.png');
newCountry('Greece', 'GR', './images/Flags/greece.svg');
newCountry('Croatia', 'HR', './images/Flags/croatia.png');
newCountry('Hungary', 'HU', './images/Flags/hungary.png');
newCountry('Ireland', 'IE', './images/Flags/ireland.png');
newCountry('Iceland', 'IS', './images/Flags/iceland.png');
newCountry('Italy', 'IT', './images/Flags/italy.png');
newCountry('Lithuania', 'LT', './images/Flags/lithuania.png');
newCountry('Luxembourg', 'LU', './images/Flags/luxembourg.png');
newCountry('Latvia', 'LV', './images/Flags/latvia.png');
newCountry('Moldova', 'MD', './images/Flags/moldova.png');
newCountry('Macedonia', 'MK', './images/Flags/macedonia.png');
newCountry('Montenegro', 'ME', './images/Flags/montenegro.svg');
newCountry('Norway', 'NO', './images/Flags/norway.svg');
newCountry('Poland', 'PL', './images/Flags/poland.png');
newCountry('Portugal', 'PT', './images/Flags/portugal.svg');
newCountry('Romania', 'RO', './images/Flags/romania.svg');
newCountry('Serbia', 'RS', './images/Flags/serbia.png');
newCountry('Slovakia', 'SK', './images/Flags/slovakia.svg');
newCountry('Slovenia', 'SI', './images/Flags/slovenia.png');
newCountry('Sweden', 'SE', './images/Flags/sweden.png');
newCountry('Turkey', 'TR', './images/Flags/turkey.png');
newCountry('Ukraine', 'UA', './images/Flags/ukraine.png');
newCountry('Kosovo', 'XK', './images/Flags/kosovo.png');
newCountry('Netherlands', 'NL', './images/Flags/netherlands.png');
newCountry('Spain', 'ES', './images/Flags/spain.png');
newCountry('France', 'FR', './images/Flags/france.png');
newCountry('Cyprus', 'CY', './images/Flags/cyprus.png');

loadLeaderboard();
loadUser();
pickCountry();
/* function getCountryId(value) {
  for (let i=0; i<pathElem.length; i++) {
    if (pathElem[i].id == value) {
      return i;
    }
  }
} */

// DONE: make user array, new user finishes round goes into another string
//save to a new key after users complete the game
  //DONE:create empty array
  //DONE:when user object is created it is pushed into the array
  // when game is finished, array of user objects is stringified and saved to local storage
  //update leaderboard with array objects
//load user object array key before starting the game
