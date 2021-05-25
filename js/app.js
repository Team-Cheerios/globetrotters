'use strict';

let pathElem = document.getElementsByTagName('path');

for (let i = 0; i < pathElem.length; i++){

  pathElem[i].addEventListener('click', handleEvent);

  function handleEvent(event){
    if pathElem[i].name == currentCountry

    if (pathElem[i].hasAttribute('class')){
      pathElem[i].removeAttribute('class');
    } else {
      pathElem[i].setAttribute('class', 'countryRed');
    }
  }
}

function Country(name,image) {
  this.name = name;
  this.image = image;
  this.guesses = 3;
}

let currentCountry;
let score = 0;

function newCountry(name, image) {
  let country = new Country(name, image);

  Country.allCountries.push(country);
}

Country.allCountries = [];

function pickCountry() {
  let i = Math.floor(Math.random()*Country.allCountries.length)-1;
  currentCountry = Country.allCountries[i];
}

// function correctCountry() {
//  if (currentCountry.name.toLowercase()) == pathElem.
// }

new newCountry('Albania', 'images/Flags/albania.png');
new newCountry('Armenia', 'images/Flags/armenia.png');
new newCountry('Austria', 'images/Flags/austria.png');
new newCountry('Belarus', 'images/Flags/belarus.png');
new newCountry('Belgium', 'images/Flags/belgium.png');
new newCountry('Bosnia', 'images/Flags/bosnia.png');
new newCountry('Croatia', 'images/Flags/croatia.png');
new newCountry('Cyprus', 'images/Flags/cyprus.png');
new newCountry('Czech Republic', 'images/Flags/czechRepublic.png');
new newCountry('Denmark', 'images/Flags/denmark.png');
new newCountry('Estonia', 'images/Flags/estonia.png');
new newCountry('Finland', 'images/Flags/finland.png');
new newCountry('France', 'images/Flags/france.png');
new newCountry('Georgia', 'images/Flags/georgia.png');
new newCountry('Germany', 'images/Flags/germany.png');