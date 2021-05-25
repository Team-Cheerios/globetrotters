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

new Country('Albania', 'images/Flags/albania.png');
new Country('Armenia', 'images/Flags/armenia.png');
new Country('Austria', 'images/Flags/austria.png');
new Country('Belarus', 'images/Flags/belarus.png');
new Country('Belgium', 'images/Flags/belgium.png');
new Country('Bosnia', 'images/Flags/bosnia.png');
new Country('Croatia', 'images/Flags/croatia.png');
new Country('Cyprus', 'images/Flags/cyprus.png');
new Country('Czech Republic', 'images/Flags/czechRepublic.png');
new Country('Denmark', 'images/Flags/denmark.png');
new Country('Estonia', 'images/Flags/estonia.png');
new Country('Finland', 'images/Flags/finland.png');
new Country('France', 'images/Flags/france.png');
new Country('Georgia', 'images/Flags/georgia.png');
new Country('Germany', 'images/Flags/germany.png');