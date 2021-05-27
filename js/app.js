'use strict';
// --------------------------------------------- Global Variables -------------------------------------------------------//
let pathElem = document.getElementsByTagName('path');
let currentCountry;
const questionBox = document.getElementById('questionBox');
const leaderboardDiv = document.getElementById('scorebox');
const musicDiv = document.getElementById('music');
let score = 0;
let music = new Audio('./sound/music.mp3');
let currentUser;

// --------------------------------------------- Constructor Functions -------------------------------------------------------//
function Country(name, id, image, capital, blurb) {
  this.name = name;
  this.id = id;
  this.image = image;
  this.guesses = 3;
  this.capital = capital;
  this.blurb = blurb;
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
function newCountry(name, id, image, capital, blurb) {
  let country = new Country(name, id, image, capital, blurb);
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
    let currentCapital = document.createElement('h4');
    currentCapital.textContent = `Capital: ${currentCountry.capital}`;
    currentCapital.setAttribute('id', 'currentCapital')
    questionBox.appendChild(currentCapital);
    let currentBlurb = document.createElement(`p`);
    currentBlurb.textContent = `${currentCountry.blurb}`;
    currentBlurb.setAttribute('id', 'blurb')
    questionBox.appendChild(currentBlurb);

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
    for (let user of parsedLeaderboard) {
      const newUser = new User(user.name, user.score);
        User.leaderboard.push(newUser);
        console.log(newUser);
    }
  }
}

function mute() {
  musicDiv.innerHTML = '';
  if (music.volume === 0.5) {
    music.volume = 0;
    const musicMuted = document.createElement('img');
    musicMuted.setAttribute('src', './images/mute.png');
    musicDiv.appendChild(musicMuted);
  } else {
    music.volume = 0.5;
    const musicUnmuted = document.createElement('img');
    musicUnmuted.setAttribute('src', './images/unmute.png');
    musicDiv.appendChild(musicUnmuted);
  }
}

// --------------------------------------------- Event Listeners -------------------------------------------------------//
for (let i = 0; i < pathElem.length; i++){
  pathElem[i].addEventListener('click', handleEvent);
}

musicDiv.addEventListener('click', mute)

// --------------------------------------------- Functions Calls -------------------------------------------------------//
music.play();
music.volume = 0.5;
music.loop = true;
music.muted = false;

newCountry('Albania', 'AL', './images/Flags/albania.png', 'Tirana', `Located in Southeastern Europe's Balkan Peninsula. The interior is crossed by the Albanian Alps, and has many archaeologicals sites and castles.`);
newCountry('Armenia', 'AM', './images/Flags/armenia.png', 'Yerevan', `Located in the mountainous Caucasus region between Europe and Asia. Armenia is a former member of the Soviet republic and contains many historical religious sites.`);
newCountry('Austria', 'AT', './images/Flags/austria.png', 'Vienna', `Lanklocked in East Alpine country, it is composed of nine states, one of which is Vienna, Austria capital and it's largetst city.`);
newCountry('Belgium', 'BE', './images/Flags/belgium.png', 'Brussels', `Known for it's medieval towns and Renaissance architecture, it is also the home of the UN and Nato.`);
newCountry('Bulgaria', 'BG', './images/Flags/bulgaria.svg', 'Sofia', `A cultural melting pot with Greek, Slavic, Ottoman, and Persian influences, it has a rich heritage of traditional dance, music, costumes, and crafts.`);
newCountry('Bosnia and Herzegovina', 'BA', './images/Flags/bosnia.png', 'Sarajevo', `Located on Balkan peninsula, it's countryside is home to many medieval villagses, rivers, lakes, and the Dinaric Alps.`);
newCountry('Belarus', 'BY', './images/Flags/belarus.png', 'Minsk', `Lanklocked and bordered by Russia. Officially the Republic of Belarus.`);
newCountry('Switzerland', 'CH', './images/Flags/switzerland.png', 'Bern', `Known for ski resorts and hiking trails. Banking and finance are it's key industries, along with exports of watches and chocolates.`);
newCountry('Czech Republic', 'CZ', './images/Flags/czechRepublic.png', 'Prague', `Landlocked country of central Europe. Known for it's hilly landscapes and temperate climate.`);
newCountry('Germany', 'DE', './images/Flags/germany.png', 'Berlin', `Known for it's vast landscapes of forests, rivers, mountains, and northern beaches. Munich is known for it's legendary beer and Berlin is home to internationally renowned art and nightlife scenes.`);
newCountry('Denmark', 'DK', './images/Flags/denmark.svg', 'Copenhagen', `A Scandinavian country made up of the Jutland Peninsula and many islands. It's capital, Copenhagen, is home to many palaces and Nyhavn harbor.`);
newCountry('Estonia', 'EE', './images/Flags/estonia.png', 'Tallinn', `Northern European coutry on the Baltic Sea. Home to a diverse terrain of rocky beaches, old forrests, and lakes. It's dotted with castles, churches, and hilltop fortresses.`);
newCountry('Finland', 'FI', './images/Flags/finland.png', 'Helsinki', `Finland is a Northern European country bordering Sweden, Norway, and Russia. The Northern Lights can be seen from the country's Arctic Lapland province, which is a massive wilderness with national parks and ski resorts.`);
newCountry('United Kingdom', 'GB', './images/Flags/unitedKingdom.png', 'London', `Made up of several small states bound together by a parliamentarian government. Known for it's medieval achitecture and as well it's cultural exports like Shakespeare and the Beatles.`);
newCountry('Georgia', 'GE', './images/Flags/georgia.png', 'Tbilisi', `A crossroads between Europ and Asia, it's home to Caucasus mountain villages, and plenty of beaches along the Black Sea. It's famous for the Vardzia, a sprawling cave monastery dating back to the 12th century.`);
newCountry('Greece', 'GR', './images/Flags/greece.svg', 'Athens', `South Eastern country partially comprised of many islands in the Aegean and Ionian seas. Known for it's beaches, historical architecture, and rich archealogical history.`);
newCountry('Croatia', 'HR', './images/Flags/croatia.png', 'Zagreb', `Often at the crossroads of Central and Southeast Europe on the Adriatic Sea.`);
newCountry('Hungary', 'HU', './images/Flags/hungary.png', 'Budapest', `Bisected by the Danube river, this landlocked country is known for it's architectural landmarks and a culture heavily influenced by both Rome and Turkey.`);
newCountry('Ireland', 'IE', './images/Flags/ireland.png', 'Dublin', `Dubbed the "Emerald Isle" for it's lush landscape, the country is dotted with castles like the medieval Cahir Castle.`);
newCountry('Iceland', 'IS', './images/Flags/iceland.png', 'Reykjavík', `Defined by it's dramatic landscape, Iceland is home to volcanoes, hot springs, geysers, and lava fields.`);
newCountry('Italy', 'IT', './images/Flags/italy.png', 'Rome', `A long Mediterranean coastline. It's capital, Rome, is home to the Vatican and many ancient landmarks and ruins.`);
newCountry('Lithuania', 'LT', './images/Flags/lithuania.png', 'Vilnius', `One of the Baltic States, Lithuanians belong to the ethno-linguistic group of the Balts and speak Lithuanian; one of only two living Baltic languages.`);
newCountry('Luxembourg', 'LU', './images/Flags/luxembourg.png', 'Luxembourg', `A small country only 900sq miles and home to 600,000 people, which is smaller than the population of Boston.`);
newCountry('Latvia', 'LV', './images/Flags/latvia.png', 'Riga', `Known for it's art nouveau architecture in it's capital city, Riga. It's landscape is marked by wide beaches and dense forests.`);
newCountry('Moldova', 'MD', './images/Flags/moldova.png', 'Chișinău', `Eastern European country formerly of the Soviet Union, it is surpsisingly known for it's vineyards and large cellars. It's wine region of Nistreana is known for it's reds and can grow everything from Cabernet Sauvignon to Pinot Noir.`);
newCountry('Macedonia', 'MK', './images/Flags/macedonia.png', 'Skopje', `One of the successor states of Yugoslavia, it gained independence in 1991.`);
newCountry('Montenegro', 'ME', './images/Flags/montenegro.svg', 'Podgorica', ` Known for its rugged mountains, medieval villages, and it's narrows strip of beaches. The Bay of Kotor, which resembles a fjord, is dotted with churches and fortified towns.`);
newCountry('Norway', 'NO', './images/Flags/norway.svg', 'Oslo', `A country encompassing mountains, glaciers, and deep coastal fjords. Oslo, the capital, is a city of green spaces and museums.`);
newCountry('Poland', 'PL', './images/Flags/poland.png', 'Warsaw', `One of the more populous states in the European Union, it has a temperate climate and mild geography.`);
newCountry('Portugal', 'PT', './images/Flags/portugal.svg', 'Lisbon', `Located on the Iberian Peninsula bordering Spain. It's geographical relationship to the Atlantic ocean has shaped many aspects of it's cultue from cuisine to architecture.`);
newCountry('Romania', 'RO', './images/Flags/romania.svg', 'Bucharest', `Ringed by the Carpathian Mountains and know for it's forested region of Transylvania. It holds many preserved medieval towns with fortified churches and castles.`);
newCountry('Serbia', 'RS', './images/Flags/serbia.png', 'Belgrade', `Landlocked and placed at the crossroads of Central and Southeast Europe, it is situated in the Pannonian Plain and central Balkans.`);
newCountry('Slovakia', 'SK', './images/Flags/slovakia.svg', 'Bratislava', `An advanced high income country ranking very high in the Human Development Index. Known for mostly mountainous territoy that spans for 19,000 square miles.`);
newCountry('Slovenia', 'SI', './images/Flags/slovenia.png', 'Ljubljana', `Known for mountainous ski resorts and lakes. The town of Bled is famous for it's church topped islet and a cliffside medieval castle.`);
newCountry('Sweden', 'SE', './images/Flags/sweden.png', 'Stockholm', `Home to thousands of coastal islands and inland lakes, enormous boreal forests, and glaciated mountains. It's capital of Stockholm is built on top of 14 small islands and contains more than 50 bridges.`);
newCountry('Turkey', 'TR', './images/Flags/turkey.png', 'Ankara', `A country straddling Western Asia and Southeast Europe. It's known, in part, for it's breathtaking Byzantine architecture, typified by the Hagia Sophia.`);
newCountry('Ukraine', 'UA', './images/Flags/ukraine.png', 'Kyiv', `The second largest country in Europe, after Russia.`);
newCountry('Kosovo', 'XK', './images/Flags/kosovo.png', 'Pristina', `Lies at the centre of the Balkans and is currently a disputed state.`);
newCountry('Netherlands', 'NL', './images/Flags/netherlands.png', 'Amsterdam', `Known for it's windmills, tulip fields, and cycling routes. It's capital, Amsterdam, is known for its art, nightlife, and infamous red light district.`);
newCountry('Spain', 'ES', './images/Flags/spain.png', 'Madrid', `Contains a diverse geography and many cultures. The semi autonomous region of Catalonia is home to Barcelona, a beautiful beachside city influenced by the whimsical arhcitecture of Antoni Gaudi.`);
newCountry('France', 'FR', './images/Flags/france.png', 'Paris', `Encompasses many medieval cities, alpine villages, and Mediterranean beaches. It's capital, Paris, is famous for it's fashion, food, and art.`);
newCountry('Cyprus', 'CY', './images/Flags/cyprus.png', 'Nicosia', `An island nation in the eastern Mediterranean Sea.`);


loadLeaderboard();
loadUser();
pickCountry();
renderLeaderboard();

// DONE: make user array, new user finishes round goes into another string
//save to a new key after users complete the game
  //DONE:create empty array
  //DONE:when user object is created it is pushed into the array
  // when game is finished, array of user objects is stringified and saved to local storage
  //update leaderboard with array objects
//load user object array key before starting the game
