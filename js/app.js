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
