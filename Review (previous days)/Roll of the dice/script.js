// var player1 = "Player 1";
// var player2 = "Player 2";
var player1 = prompt("Enter Player 1");
var player2 = prompt("Enter Player 2");
document.getElementById("player1").innerHTML = player1;
document.getElementById("player2").innerHTML = player2;
player1 = document.getElementById("player1");
player2 = document.getElementById("player2")

var msg = document.getElementById("msg");
var res = document.getElementById("reset");
var dice1 = document.getElementById("dice1");
var dice2 = document.getElementById("dice2");
var roll1 = document.getElementById("roll1");
var roll2 = document.getElementById("roll2");
roll1.style.display = "inline-block";

function roll(player) {
    var dice = Math.floor(Math.random() * 6) + 1;
    var path = `pics/dice${dice}.png`;

    if (player == "dice1") {
        dice1.title = dice;
        dice1.src = path;
        roll1.style.display = "none";
        roll2.style.display = "inline-block";
    } else {
        dice2.title = dice;
        dice2.src = path;
        check();
        res.style.display = "block";
        roll2.style.display = "none";
    }
}

function check() {
    if (dice1.title > dice2.title) {
        msg.innerHTML = `${player1.innerText} wins`;
        player1.style.color = "red";
        player2.style.color = "black";
    } else if (dice1.title < dice2.title) {
        msg.innerHTML = `${player2.innerText} wins`;
        player1.style.color = "black";
        player2.style.color = "red";
    } else {
        msg.innerHTML = "It's a draw!";
        player1.style.color = "red";
        player2.style.color = "red";
    }
}

function reset() {
    dice1.src = "pics/blank.png";
    dice2.src = "pics/blank.png";
    res.style.display = "none";
    roll1.style.display = "inline-block";
    msg.innerHTML = "";
    player1.style.color = "black";
    player2.style.color = "black";
}

roll1.addEventListener("click", () => roll("dice1"));
roll2.addEventListener("click", () => roll("dice2"));
res.addEventListener("click", () => reset());