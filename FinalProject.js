var player1 = document.getElementById("player1")
var player2 = document.getElementById("player2")


var myGamePiece;

//this part is creating the yellow block
function startGame() {
    myGamePiece = new component(60, 60, "yellow", 5, 100);
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

//velocity
function component(width, height, color, x, y) {
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
//updating speed
		this.newPos = function() {
				this.x += this.speedX;
				this.y += this.speedY;
		}
}

//updating game area
function updateGameArea() {
		myGameArea.clear();
		myGamePiece.newPos();
		myGamePiece.update();
}

//movement of yellow block
function moveup() {
		myGamePiece.speedY -= 1;
}

function movedown() {
		myGamePiece.speedY += 1;
}

function moveleft() {
		myGamePiece.speedX -= 1;
}

function moveright() {
		myGamePiece.speedX += 1;
}
