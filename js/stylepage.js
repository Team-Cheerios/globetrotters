'use strict'

const header = document.getElementsByTagName('header')[0];

const globeImgElem = document.createElement('img');
header.appendChild(globeImgElem);
globeImgElem.setAttribute('src', './images/globe.gif');
globeImgElem.setAttribute('id', 'globeImg');

const headerDivElem = document.createElement('div');
header.appendChild(headerDivElem);
headerDivElem.setAttribute('id', 'headerDiv');



const h1Elem = document.createElement('h1');
h1Elem.textContent = 'GlobeTrotters';
headerDivElem.appendChild(h1Elem);

const h2Elem = document.createElement('h2');
h2Elem.textContent = 'A Guessing Game';
headerDivElem.appendChild(h2Elem);

const ul = document.createElement('ul');
header.appendChild(ul);

const liHome = document.createElement('li');
ul.appendChild(liHome);

const homeLink = document.createElement('a');
homeLink.setAttribute('href', 'index.html');
homeLink.textContent = 'Home';
liHome.appendChild(homeLink);

const liGame = document.createElement('li');
ul.appendChild(liGame);

const gameLink = document.createElement('a');
gameLink.setAttribute('href', 'game.html');
gameLink.textContent = 'Game';
liGame.appendChild(gameLink);

const liAbout = document.createElement('li');
ul.appendChild(liAbout);

const aboutLink = document.createElement('a');
aboutLink.setAttribute('href', 'about.html');
aboutLink.textContent = 'About';
liAbout.appendChild(aboutLink);

// const scorebox = document.getElementById('scorebox');
