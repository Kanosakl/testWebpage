var danBearLaugh = new Audio('sounds/kirito_villain_laugh.wav');
danBearLaugh.autoplay = false;

var h1Element = document.querySelector('h1');
var danbearImg = document.querySelector('.cibai');
var buttonAddPara = document.querySelector('button[name="buttonAddPara"]');

buttonAddPara.addEventListener('click', function() {createParagraph();});
danbearImg.onclick = function() {danBearLaugh.play(); };

function DanBearSFX()
{
	danBearLaugh.play();
}

function ChangeHeader1Content(text)
{
	if('string' === typeof(text))
	{
		console.log('text is string');
		if(!IsNullOrEmpty(text)) 
		{
			h1Element.textContent = text;
		}
	}
}

IsNullOrEmpty = function (text)
{
	var trimmedText = text.trim();
	console.log("text after trimming: " + trimmedText);
	var result = (!trimmedText && 0 === trimmedText.length);	
	console.log("text is " + (result ? "":"not ") + "null or empty");
	return result;
}

function createParagraph() {
  var para = document.createElement('p');
  para.textContent = 'You clicked the button!';
  document.body.appendChild(para);
}

