var canvas;
var canvasContext;
var ballX = 400;
var ballSpeedX = 15;
var ballY = 300;
var ballSpeedY = 3;

var paddle1Y = 250;
var paddle2Y = 250;
const PADDLE_HEIGHT = 100;
const PADDLE_WIDTH = 10;
const WINNING_SCORE = 3; 

var showingWinScreen = false;

var p1Score = 0;
var p2Score = 0;

function calculateMousePos(evt) {
    var rect = canvas.getBoundingClientRect();
    var root = document.documentElement;
    var mouseX = evt.clientX - rect.left - root.scrollLeft;
    var mouseY = evt.clientY - rect.top - root.scrollTop;
    return {
        x:mouseX,
        y:mouseY
    };
}
window.onload = function() {
    canvas = document.getElementById("gameCanvas");
    canvasContext = canvas.getContext("2d");
    var framesPerSecond = 30;
    setInterval(function() {
        moveEverything();
        drawEverything();
    }, 1000/framesPerSecond);
    canvas.addEventListener("mousemove", function(evt) {
        var mousePos = calculateMousePos(evt);
        paddle1Y = mousePos.y-(PADDLE_HEIGHT / 2);
    });
    canvas.addEventListener("mousedown", handleMouseClick);
}

function handleMouseClick(evt) {
    if (showingWinScreen) {
        p1Score = 0;
        p2Score = 0;
        showingWinScreen = false;
    }
}

function computerMovement() {
    var paddle2YCenter = paddle2Y + (PADDLE_HEIGHT/2);
    if (paddle2YCenter < ballY -35) {
        paddle2Y += 8;
    } else if(paddle2YCenter > ballY + 35) {
        paddle2Y -= 8;
    }
}

function moveEverything() {
    if (showingWinScreen) {
        return;
    }
    computerMovement();
    ballX += ballSpeedX;
    ballY += ballSpeedY;
    if(ballX < 0) {
        if (ballY > paddle1Y && ballY < paddle1Y + PADDLE_HEIGHT) {
            ballSpeedX = -ballSpeedX;
            var deltaY = ballY -(paddle1Y+PADDLE_HEIGHT/2);
            ballSpeedY = deltaY * .35;
        } else {
            p2Score += 1;
            ballReset();
        }
    }
    if(ballX > canvas.width) {
        if (ballY > paddle2Y && ballY < paddle2Y + PADDLE_HEIGHT) {
            ballSpeedX = -ballSpeedX;
            var deltaY = ballY -(paddle2Y+PADDLE_HEIGHT/2);
            ballSpeedY = deltaY * .35;
        } else {
            p1Score += 1;
            ballReset();
        }
    }

    if(ballY < 0) {
        ballSpeedY = -ballSpeedY;
    }
    if(ballY > canvas.height) {
        ballSpeedY = -ballSpeedY;
    }
}

function drawNet () {
    for(var i = 0; i < canvas.height; i += 40) {
        colorRect(canvas.width/2 -1, i + 10, 2, 20, "white");
    }
}

function drawEverything() {
    colorRect(0,0,canvas.width, canvas.height, 'black');
     if (showingWinScreen) {
         canvasContext.fillStyle = "white";
         if (p1Score >= WINNING_SCORE) {
            canvasContext.fillText("Left Player Won!", 100, 300);
        } else if (p2Score >= WINNING_SCORE) {
            canvasContext.fillText("Right Player Won!", 500, 300);
        }
        canvasContext.fillText("Click to play again!", 350, 500);
        return;
    }
    drawNet();
    colorRect(15,paddle1Y,PADDLE_WIDTH, PADDLE_HEIGHT, 'white');
    colorRect(canvas.width - PADDLE_WIDTH - 15,paddle2Y,PADDLE_WIDTH, PADDLE_HEIGHT, 'white');
    colorCircle(ballX, ballY, 10, "white");

    canvasContext.fillText(p1Score, 100, 100);
    canvasContext.fillText(p2Score, canvas.width - 100, 100);
}

function colorRect(leftX, topY, width, height, drawColor) {
    canvasContext.fillStyle = drawColor;
    canvasContext.fillRect(leftX,topY,width, height);
}

function colorCircle(centerX, centerY, radius, drawColor) {
    canvasContext.fillStyle = drawColor;
    canvasContext.beginPath();
    canvasContext.arc(centerX, centerY, radius, 0, Math.PI*2, true);
    canvasContext.fill();
}

function ballReset() {
    if (p1Score >= WINNING_SCORE || p2Score >= WINNING_SCORE) {
        showingWinScreen = true;
    }
    if (ballSpeedX < 0) {
        ballSpeedX = 10;
    } else {
        ballSpeedX = -10;
    }
    ballSpeedY = 5;
    ballX = canvas.width/2;
    ballY = canvas.height/2;
}