var customName = document.getElementById('customname');
var randomize = document.querySelector('.randomize');
var story = document.querySelector('.story');

function randomValueFromArray(array){
    return array[Math.floor(Math.random()*array.length)];
}

var storyText = 'Bob always loves watching their favorite sport: :insertx:. Their favorite part is :inserty:. Although they always wished they could play, they :insertz:. Maybe one day they will be able to play :insertx:, but for now, they’ll always be its biggest fan.';
var insertX = ['hockey', 'football', 'basketball'];
var insertY = ['seeing their favorite player score', 'cheering in a crazy fan atmosphere', 'watching their least favorite time lose'];
var insertZ = ['have been concussed 27 times from being so bad at the game','blew off three of their fingers in a 4th of July celebration gone wrong','lost their leg after attempting to jump too high on a trampoline, resulting in amputation'];

randomize.addEventListener('click', result);

function result() {
    var newStory = storyText;
    let xItem = randomValueFromArray(insertX);
    let yItem = randomValueFromArray(insertY);
    let zItem = randomValueFromArray(insertZ);

    newStory = newStory.replace(':insertx:',xItem);
    newStory = newStory.replace(':inserty:',yItem);
    newStory = newStory.replace(':insertz:',zItem);
    newStory = newStory.replace(':insertx:',xItem);

  if(customName.value !== '') {
    var name = customName.value;
    newStory = newStory.replace('Bob', name);
    }

  if(document.getElementById("uk").checked) {
    var stonesPerPound = 0.0714286;
    var weight = Math.round(300*stonesPerPound)+' stone';
    var temperature =  Math.round((94-32)*5/9)+' centigrade';
    newStory = newStory.replace("94 farenheit", temperature);  
    newStory = newStory.replace("300 pounds", weight);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}