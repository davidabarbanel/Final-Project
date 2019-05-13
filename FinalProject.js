var canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
var player1 = document.getElementById("player1")
var player2 = document.getElementById("player2")


var myGamePiece;

function startGame() {
    myGamePiece = new component(60, 60, "yellow", 5, 100);
		myGameArea.start();
}

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
		this.newPos = function() {
				this.x += this.speedX;
				this.y += this.speedY;
		}
}

function updateGameArea() {
		myGameArea.clear();
		myGamePiece.newPos();
		myGamePiece.update();
}

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
