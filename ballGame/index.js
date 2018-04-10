var balls = []; // Array of all balls currently on screen
var score = 0;
var velocity = 10; 
var play = false; // false = paused game. true = game is playing
var createBallSpeed = 1000; // milliseconds between the creation of each ball

// ========== CANVAS AND MENU SETUP ==========

// Velocity slider is the slider starting at 10, that goes between 10 - 100
// The higher the velocity the faster the balls will go.
var velocitySlider = document.getElementById("velocitySlider");
velocitySlider.oninput = function () {
    velocity = velocitySlider.value;
    balls.forEach(function (ball) {
        ball.velY = velocity / 10;
    });
}

// The players score, displayed on the menu
var scoreParagraph = document.getElementById("score");
scoreParagraph.innerHTML = "Score";

//Play - Pause the game
document.getElementById("gameState").addEventListener("click", function () {
    if (this.innerHTML === "Play!") {
        play = true;
        this.innerHTML = "Pause Game";
    } else {
        play = false;
        this.innerHTML = "Play!";
    }
});

//Create and setup the canvas
var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');
var canvasLeft = canvas.offsetLeft;
var canvasTop = canvas.offsetTop;

//Listen for mouseclicks on the canvas
//Update game status when a ball is clicked
canvas.addEventListener('click', function (event) {
    event.preventDefault();
    var mouse = getMousePos(canvas, event);

    balls.forEach(function (ball) {
        var dx = ball.x - mouse.x;
        var dy = ball.y - mouse.y;
        var distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < ball.size) {
            if (play) {
                //Style and Animate the increase in score
                scoreParagraph.style.color = ball.color;
                scoreParagraph.style.textShadow = "0px 0px 5px " + ball.color;
                var target = score + getPoints(ball);
                var interval = setInterval(function() {
                score += 1;
                scoreParagraph.innerHTML = score;
                  if (score >= target) {
                    clearInterval(interval);
                  }
              }, 30);
              ball.destroy(true);
            }
        }
    })
});
var width = canvas.width = window.innerWidth;
var height = canvas.height = window.innerHeight;

// ========== GAME LOOP ==========

loop();
//loop through, update, and redraw each circle in its new position
function loop() {
    //Redraw black canvas to cover old circles
    ctx.fillStyle = 'rgba(0, 0, 0, 0.25)';
    ctx.fillRect(0, 0, width, height);
    
    //update each ball
    for (var i = 0; i < balls.length; i++) {
        balls[i].draw();
        balls[i].update();
    }
    requestAnimationFrame(loop);
}

//Ball Generation. Create a new ball every 'createBallSpeed' default = 1000ms
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
}, createBallSpeed);

// ========== BALL OBJECT ==========

// Ball Object x and y are the center of the circle
function Ball(x, y, velX, velY, color, size) {
    this.x = x;
    this.y = y;
    this.velX = velX;
    this.velY = velY;
    this.color = color;
    this.size = size;
}

// Draw the ball on the canvas
Ball.prototype.draw = function () {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    ctx.fill();
}

// Update the position of the ball
// Destroy it if it has reached the bottom
Ball.prototype.update = function () {
    if (play) {
        if ((this.y + this.size) >= height) {
            this.destroy(false);
        }
        this.x += this.velX;
        this.y += this.velY;
    }
}

// Destroy a ball and leave a floating +points number
Ball.prototype.destroy = function (showPoints) {
    var ball = this;
    var points = getPoints(this);
    var x = ball.x;
    var y = ball.y;
    var float = 0;
    var index = balls.indexOf(this);
    if (showPoints) {
      //Create a floating +points number where the ball was destroyed
      var intervalID = setInterval(function () {
          ctx.font = "25px Arial";
          ctx.fillStyle = ball.color;
          ctx.fillText("+" + points, x, y - float / 2);
          float++;
      }, 10);
      setTimeout(function () {
          clearInterval(intervalID);
      }, 1000);
    }

    balls.splice(index, 1);
}

// ========= HELPER FUNCTIONS ==========

// Generate random number from min (inclusive) to max (not inclusive)
function random(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

//Returns an object containing the mouse coordinates relative to the canvas
//Returns {x: value, y: value}
function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
        x: (evt.clientX - rect.left) / (rect.right - rect.left) * canvas.width,
        y: (evt.clientY - rect.top) / (rect.bottom - rect.top) * canvas.height
    };
}

//Returns the points awarded by clicking on a ball
//The smaller the ball the more points (size 10 = 10 points size 100 = 1 point)
function getPoints(ball) {
    return 10 - Math.floor(ball.size / 10) + 1;
}
