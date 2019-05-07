var canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
var player1 = document.getElementById("player1")
var player2 = document.getElementById("player2")
var wDown = false;
var sDown = false;
var aDown = false;
var dDown = false;


function start() {
	clear();
	renderBackground();
	checkKeyboardStatus();
	checkPlayersBounds();
	checkPlayer1_player2Collision();
	movePlayers();
	renderPlayers();
}
//copied//

var myGamePiece;

function startGame() {
		myGamePiece = new component(30, 30, "red", 10, 120);
		myGameArea.start();
}

var myGameArea = {
		canvas : document.createElement("canvas"),
		start : function() {
				this.canvas.width = 1000;
				this.canvas.height = 1000;
				this.context = this.canvas.getContext("2d");
				document.body.insertBefore(this.canvas, document.body.childNodes[0]);
				this.interval = setInterval(updateGameArea, 20);
		},
		clear : function() {
				this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
		}
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
