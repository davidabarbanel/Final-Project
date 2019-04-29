var canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
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
