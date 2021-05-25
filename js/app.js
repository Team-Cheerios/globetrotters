'use strict';

let pathElem = document.getElementsByTagName('path');
console.log(pathElem);
let currentCountry;
let score = 0;

function handleEvent(event){

   let target = event.target;

// get user's guess via event, that's our target
// if the user's guess a.k.a. the target is equal to the correct answer, then we will loop through all of the paths looking for the one that matches currentCountry, and then turn that listener off.

  /* for (let i = 0; i < pathElem.length; i++) {

    if (pathElem[i].id == currentCountry.id) {
      score += currentCountry.guesses;
      pathElem[i].removeEventListener('click', handleEvent);
      // pickCountry();
    } else if (currentCountry.guesses ===0) {
      let j = getCountryId(currentCountry.id);          
      pathElem[j].removeEventListener('click', handleEvent);
      pathElem[j].setAttribute('class', 'countryRed');
    } else {
      currentCountry.guesses--;
    }

    if (pathElem[i].hasAttribute('class')){
      pathElem[i].removeAttribute('class');
    } else {
      pathElem[i].setAttribute('class', 'countryRed');
    }
  } */
  for (let i = 0; i < pathElem.length; i++){
    if (pathElem[i].id === currentCountry.id ){
      pathElem[i].setAttribute('class', 'countryRed');
      pathElem[i].removeEventListener('click', handleEvent);
      score += currentCountry.guesses;
      currentCountry.guesses = 0;
      
    } 
  }
  if (currentCountry.guesses === 0){
    pickCountry();
  }
}

for (let i = 0; i < pathElem.length; i++){

  pathElem[i].addEventListener('click', handleEvent);
}

function getCountryId(value) {
  for (let i=0; i<pathElem.length; i++) {
    if (pathElem[i].id == value) {
      return i;
    }
  }
}

function Country(name, id, image) {
  this.name = name;
  this.id = id;
  this.image = image;
  this.guesses = 3;
}

function newCountry(name, id, image) {
  let country = new Country(name, id, image);

  Country.allCountries.push(country);
}

Country.allCountries = [];
Country.pickedCountries = [];

function pickCountry() {
  let k = Math.floor(Math.random()*Country.allCountries.length);
  currentCountry = Country.allCountries[k];
  console.log(k);
  while (Country.pickedCountries.includes(currentCountry.name)) {
    k = Math.floor(Math.random()*Country.allCountries.length);
    currentCountry = Country.allCountries[k];
    console.log(k);
  }
  console.log(currentCountry.name);
  Country.pickedCountries.push(currentCountry.name);
}

newCountry('Albania', 'AL', './images/Flags/albania.png');
newCountry('Armenia', 'AM', './images/Flags/armenia.png');
newCountry('Austria', 'AT', './images/Flags/austria.png');
newCountry('Belgium', 'BE', './images/Flags/belgium.png');
newCountry('Bulgaria', 'BG', './images/Flags/bulgaria.png');
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

pickCountry();