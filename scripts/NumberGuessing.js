var chancesLeft;
var answer;
var HasWon=false;

var inputBox = document.querySelector("input[name='inputGuess']");
var hintText = document.querySelector("h3[id='0']");
var previousGuess = document.querySelector("h4[id='1']");
var buttonGuess = document.querySelector("button[name='buttonGuess']");

inputBox.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        buttonGuess.click();
    }
});
initialize();

function initialize()
{
    chancesLeft = 10;
    HasWon = false;
    answer = Math.round(Math.random()* 100);
    console.log("answer = " + answer);
    inputBox.disabled = false;

    hintText.textContent = "";
    previousGuess.textContent = "";

    buttonGuess.textContent = "Guess";
    buttonGuess.onclick = function() {UICheckAnswer()};
}

function setInterfaceGameOver()
{    
    hintText.textContent = (HasWon)? "Congratulation!" : "Game Over,";
    hintText.textContent += " Answer is " + answer;
    buttonGuess.onclick = function() {initialize();};
    buttonGuess.textContent = "Restart Game";

    inputBox.disabled = true;
}

function UICheckAnswer()
{    
    var guess = inputBox.value;    
    inputBox.value = "";
    var validateGuess = CompareAnswer(guess);

    switch(validateGuess)
    {
        case "lower":            
        case "higher":
            hintText.textContent = validateGuess.toUpperCase();
            previousGuess.innerText += " " + guess;
            break;

        case "NaN":
            previousGuess.textContent += " " + "NaN";
            break;

        case "game over":
            alert("game over!");            
            setInterfaceGameOver();
            break;

        case "equal":
            HasWon = true;
            alert("The mystery number is "+ answer +"!\r\nYOU WIN!!");
            setInterfaceGameOver();
            break;
    }    
}

function CompareAnswer(value)
{
    var result;
    
    if(!isNaN(value) && !IsNullOrEmpty(value))
    {
        var difference = value - answer;
        if(difference === 0)
            result = "equal";
        else
        {
            if(chancesLeft > 0)
            {
                if(difference > 0)
                {
                    result = "lower";
                }
                else
                {
                    result = "higher";
                }
                
                chancesLeft--;
            }
            else
                result = "game over";
        }
    }
    else
    {
        if(chancesLeft)
            {
                result = "NaN";
                chancesLeft--;
            }
        else
            result = "game over";
    }

    return result;
}