var numOfSquares = 6;
var colors = [];
var pickedColor;

var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easybtn = document.querySelector("#easybtn");
var hardbtn = document.querySelector("#hardbtn");
var modeButtons = document.querySelectorAll(".mode");


init();

function init(){
    setUpModeButtons();
    setUpSquares();
    reset();
}

function setUpModeButtons(){
    for (var i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener("click", function(){
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            //                 IF         ?THEN            :ELSE
            //this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
            if(this.textContent === "Easy"){
                numOfSquares = 3;
            } else {
                numOfSquares = 6;
            }
            reset();
        });
    }
}

function setUpSquares(){
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
        squares[i].addEventListener("click", function(){
        var clickedColor = this.style.backgroundColor;
        if (clickedColor === pickedColor) {
            h1.style.backgroundColor = clickedColor;
            resetButton.textContent= "Play Again?";

            messageDisplay.textContent = "Correct!";
            changeColors(clickedColor);
        } else {
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try Again!";
        }
    });    
    }
}

function reset() {
    colors = generateRandomColors(numOfSquares);
    pickedColor = pickColor();
    messageDisplay.textContent= "";
    resetButton.textContent = "New Colors";
    colorDisplay.textContent = pickedColor;
    for (var i = 0; i < squares.length; i++) {
        if(colors[i]){
            squares[i].style.display = "block";
            squares[i].style.background = colors[i];
        } else {
            squares[i].style.display = "none";
        }
        squares[i].style.background = colors[i];
    }
    h1.style.backgroundColor = "steelblue";

}

resetButton.addEventListener("click", function(){
    reset();
})

function changeColors(color) {
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
}

function pickColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num){
    var arr = [];
    for (var i = 0; i < num; i++){
        arr.push(randomColor());
    }
    return arr;
}

function randomColor(){
    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);
    return "rgb(" + red + ", " + green + ", " + blue + ")";
}