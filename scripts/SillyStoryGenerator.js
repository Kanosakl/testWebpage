var customName = document.getElementById('customname');
var randomize = document.querySelector('.randomize');
var story = document.querySelector('.story');
randomize.addEventListener('click', result);

var mainStory = "It was :temperature: :CorF: outside, so :npc: went for a walk. When they got to :location:, they stared in horror for a few moments, then :event:. :name: saw the whole thing, but was not surprised - :name: weighs :weight: pounds, and it was a hot day.";
var npcArray = ["Willy the Goblin", "Big Daddy", "Father Christmas"]
var locationArray = ["the soup kitchen","Disneyland","the White House"]
var eventArray = ["spontaneously combusted","melted into a puddle on the sidewalk","turned into a slug and crawled away"]


function randomValueFromArray(array){
  return array[Math.floor(Math.random()*array.length)];
}


function result() {
    var name = "bob";
  if(customName.value != '') {
    var name = customName.value;
  }

  var randWeight = Math.round(Math.random() * 300);
  var randTemperature =  Math.round(Math.random() * 40);
  var CorF = "Celsius"
  if(document.getElementById("us").checked) {
      CorF = "Fahrenheit";
      randTemperature = Math.round((randTemperature * 1.8) + 32);
  }

  var randStory = mainStory;
  randStory = randStory.replace(/:name:/g,name).replace(":CorF:",CorF).replace(":weight:",randWeight).replace(":temperature:",randTemperature)
  .replace(":npc:",randomValueFromArray(npcArray)).replace(":event:",randomValueFromArray(eventArray)).replace(":location:",randomValueFromArray(locationArray));

  story.textContent = randStory;
  story.style.visibility = 'visible';
}
