var myGamePiece1 = document.getElementById("player1")
var myGamePiece2 = document.getElementById("player2")

//this part is creating the blocks when the game starts
function startGame() {
    myGamePiece1 = new yellowBlock(50, 50, "yellow", 5, 200);
//myGamePiece2 = new redBlock(10, 10, "red", 200, 200);
    myGameArea.start();
}



//creating canvas
var myGameArea = {
		canvas : document.createElement("canvas"),
		start : function() {
				this.canvas.width = 800;
				this.canvas.height = 500;
				this.context = this.canvas.getContext("2d");
				document.body.insertBefore(this.canvas, document.body.childNodes[0]);
				this.interval = setInterval(updateGameArea, 20);
		},
		clear : function() {
				this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
		}
}

// Draws a circle of radius 20 at the coordinates 100,100 on the canvas
// context.arc(100,100,20,0,Math.PI*2,true); context.closePath();
// context.fill();


//characteristics of Yellow block
function yellowBlock(width, height, color, x, y) {
		this.width = width;
		this.height = height;
		this.speedX = 0;
		this.speedY = 0;
		this.x = x;
		this.y = y;
		this.update = function() {
				ctx = myGameArea.context;
				ctx.fillStyle = color;
				ctx.fillRect(this.x, this.y, this.width, this.height);
		}

//characteristics of Red block
function redBlock(width, height, color, x, y) {
  this.width = width;
  this.height = height;
  this.x = x;
  this.y = y;
}


//updating speed
		this.newPos = function() {
				this.x += this.speedX;
				this.y += this.speedY;
		}
}

//updating game area
function updateGameArea() {
		myGameArea.clear();
		myGamePiece1.newPos();
		myGamePiece1.update();
}

//movement of yellow block
function moveup() {
		myGamePiece1.speedY -= 1;
}

function movedown() {
		myGamePiece1.speedY += 1;
}

function moveleft() {
		myGamePiece1.speedX -= 1;
}

function moveright() {
		myGamePiece1.speedX += 1;
}
