'use strict';

let pathElem = document.getElementsByTagName('path');

for (let i = 0; i < pathElem.length; i++){

  pathElem[i].addEventListener('click', handleEvent);

  function handleEvent(event){

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

let score = 0;

function newCountry(name, image) {
  Country(name,image);

  Country.allCountries.push(this);
}

Country.allCountries = [];



newCountry('Albania', './images/Flags/albania.png');
newCountry('Armenia', './images/Flags/armenia.png');
newCountry('Austria', './images/Flags/austria.png');
newCountry('Belgium', './images/Flags/belgium.png');
newCountry('Bulgaria', './images/Flags/bulgaria.png');
newCountry('Bosnia and Herzegovina', './images/Flags/bosnia.png');
newCountry('Belarus', './images/Flags/belarus.png');
newCountry('Switzerland', './images/Flags/switzerland.png');
newCountry('Czech Republic', './images/Flags/czechRepublic.png');
newCountry('Germany', './images/Flags/germany.png');
newCountry('Denmark', './images/Flags/denmark.svg');
newCountry('Estonia', './images/Flags/estonia.png');
newCountry('Finland', './images/Flags/finland.png');
newCountry('United Kingdom', './images/Flags/unitedKingdom.png');
newCountry('Georgia', './images/Flags/georgia.png');
newCountry('Greece', './images/Flags/greece.svg');
newCountry('Croatia', './images/Flags/croatia.png');
newCountry('Hungary', './images/Flags/hungary.png');
newCountry('Ireland', './images/Flags/ireland.png');
newCountry('Iceland', './images/Flags/iceland.png');
newCountry('Lithuania', './images/Flags/lithuania.png');
newCountry('Luxembourg', './images/Flags/luxembourg.png');
newCountry('Latvia', './images/Flags/latvia.png');
newCountry('Moldova', './images/Flags/moldova.png');
newCountry('Macedonia', './images/Flags/macedonia.png');
newCountry('Montenegro', './images/Flags/montenegro.svg');
newCountry('Norway', './images/Flags/norway.svg');
newCountry('Poland', './images/Flags/poland.png');
newCountry('Portugal', './images/Flags/portugal.svg');
newCountry('Romania', './images/Flags/romania.svg');
newCountry('Serbia', './images/Flags/serbia.png');
newCountry('Slovakia', './images/Flags/slovakia.svg');
newCountry('Slovenia', './images/Flags/slovenia.png');
newCountry('Sweden', './images/Flags/sweden.png');
newCountry('Turkey', './images/Flags/turkey.png');
newCountry('Italy', './images/Flags/italy.png');
newCountry('Ukraine', './images/Flags/ukraine.png');
newCountry('Kosovo', './images/Flags/kosovo.png');
newCountry('Netherlands', './images/Flags/netherlands.png');
newCountry('Spain', './images/Flags/spain.png');
newCountry('France', './images/Flags/france.png');
newCountry('Portugal', './images/Flags/portugal.png');
newCountry('Cyprus', './images/Flags/cyprus.png');




