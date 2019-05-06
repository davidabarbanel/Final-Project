var canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
var player1 = document.getElementById("player1")
var player1 = new Player(100,250);
var player2 = new Player(600,250);
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

out.innerHTML = "Player Score: " + player1.score;

//*this function was copied*
function Player(x,y){
	this.x = x;
	this.y = y;
	this.size = 20;
	this.xVel = 0;
	this.yVel = 0;
	this.score = 0;
	this.accel = 0.55;
	this.decel = 0.55;
	this.maxSpeed = 3;
}
