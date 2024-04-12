//player 1

let count = 0

document.getElementById("button1").onclick = function () {
    count++;
    document.getElementById("player1ScoreLabel").innerHTML = count;
}

document.getElementById("button2").onclick = function () {
    count = count + 5;
    document.getElementById("player1ScoreLabel").innerHTML = count;
}

document.getElementById("erase").onclick = function () {
    count = 0;
    document.getElementById("player1ScoreLabel").innerHTML = count;
}

//player2
let count2 = 0

document.getElementById("button3").onclick = function () {
    count2++;
    document.getElementById("player2ScoreLabel").innerHTML = count2;
}

document.getElementById("button4").onclick = function () {
    count2 = count2 + 5;
    document.getElementById("player2ScoreLabel").innerHTML = count2;
}

document.getElementById("erase2").onclick = function () {
    count2 = 0;
    document.getElementById("player2ScoreLabel").innerHTML = count2;
}
