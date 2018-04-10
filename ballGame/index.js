var mouseX;
var mouseY;
var balls = [];
var score = 0;
var velocity = 10;
var play = false;

var velocitySlider = document.getElementById("velocitySlider");
velocitySlider.oninput = function () {
    velocity = velocitySlider.value;
    balls.forEach(function (ball) {
        ball.velY = velocity / 10;
    });
}

var scoreParagraph = document.getElementById("score");
scoreParagraph.innerHTML = score;

function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
        x: (evt.clientX - rect.left) / (rect.right - rect.left) * canvas.width,
        y: (evt.clientY - rect.top) / (rect.bottom - rect.top) * canvas.height
    };
}

document.getElementById("gameState").addEventListener("click", function () {
    if (this.innerHTML === "Play!") {
        play = true;
        this.innerHTML = "Pause Game";
    } else {
        play = false;
        this.innerHTML = "Play!";
    }
});

var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');
var canvasLeft = canvas.offsetLeft;
var canvasTop = canvas.offsetTop;
canvas.addEventListener('click', function (event) {
    var mouse = getMousePos(canvas, event);
    mouseX = mouse.x;
    mouseY = mouse.y;

    balls.forEach(function (ball) {

        var dx = ball.x - mouseX;
        var dy = ball.y - mouseY;
        var distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < ball.size) {
            if (play) {
                scoreParagraph.style.color = ball.color;
                ball.destroy();
                score += getPoints(ball);
                scoreParagraph.innerHTML = score;
            }
        }
    })
});
var width = canvas.width = window.innerWidth;
var height = canvas.height = window.innerHeight;

function getPoints(ball) {
    return 10 - Math.floor(ball.size / 10) + 1;
}
// function to generate random number

function random(min, max) {
    var num = Math.floor(Math.random() * (max - min)) + min;
    return num;
}

function Ball(x, y, velX, velY, color, size) {
    this.x = x;
    this.y = y;
    this.velX = velX;
    this.velY = velY;
    this.color = color;
    this.size = size;
    this.points = false;
}

Ball.prototype.draw = function () {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    ctx.fill();
}

Ball.prototype.update = function () {
    if (play) {

        if ((this.y + this.size) >= height) {
            this.destroy();
        }

        this.x += this.velX;
        this.y += this.velY;
    }
}

Ball.prototype.destroy = function () {
    var ball = this;
    var points = getPoints(this);
    var x = ball.x;
    var y = ball.y;
    var size = ball.size;
    var float = 0;
    var index = balls.indexOf(this);

    var intervalID = setInterval(function () {
        ctx.font = "25px Arial";
        ctx.fillStyle = ball.color;
        ctx.fillText("+" + points, x, y - float / 2);
        float++;
    }, 10);
    setTimeout(function () {
        clearInterval(intervalID);
    }, 1000);

    balls.splice(index, 1);
}

function loop() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.25)';
    ctx.fillRect(0, 0, width, height);



    for (var i = 0; i < balls.length; i++) {
        balls[i].draw();
        balls[i].update();
    }
    requestAnimationFrame(loop);
}

loop();

window.setInterval(function () {
    if (play) {
        var size = random(10, 101);
        var ball = new Ball(
            random(size, width - size),
            random(0, 20),
            0,
            velocity / 10,
            'rgb(' + random(0, 255) + ',' + random(0, 255) + ',' + random(0, 255) + ')',
            size
        );
        balls.push(ball);
    }

}, 1000);




















// var canvas = document.getElementById("myCanvas");
// var ctx = canvas.getContext("2d");
// var x = canvas.width/2;
// var y = 0;
// var dx = 0;
// var dy = 2;
// var ballRadius = 10;


// function drawBall() {
//     ctx.beginPath();
// ctx.arc(x, y, ballRadius, 0, Math.PI*2);
//     ctx.fillStyle = "#0095DD";
//     ctx.fill();
//     ctx.closePath();
// }

// function draw() {
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     drawBall();
//     if (y == canvas.height) {
//       // destroy ball
//       x = canvas.width/2; 
//       y = 0;
//       drawBall();
//     }
//     x += dx;
//     y += dy;
// }

// setInterval(draw, 10);
