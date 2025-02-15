var allWhite = [["white", "white", "white", "white", "white", "white", "white", "white"], ["white", "white", "white", "white", "white", "white", "white", "white"], ["white", "white", "white", "white", "white", "white", "white", "white"], ["white", "white", "white", "white", "white", "white", "white", "white"], ["white", "white", "white", "white", "white", "white", "white", "white"], ["white", "white", "white", "white", "white", "white", "white", "white"], ["white", "white", "white", "white", "white", "white", "white", "white"], ["white", "white", "white", "white", "white", "white", "white", "white"], ["white", "white", "white", "white", "white", "white", "white", "white"], ["white", "white", "white", "white", "white", "white", "white", "white"], ["white", "white", "white", "white", "white", "white", "white", "white"], ["white", "white", "white", "white", "white", "white", "white", "white"], ["white", "white", "white", "white", "white", "white", "white", "white"], ["white", "white", "white", "white", "white", "white", "white", "white"], ["white", "white", "white", "white", "white", "white", "white", "white"], ["white", "white", "white", "white", "white", "white", "white", "white"]];
var piece = {
    color1: "white",
    color2: "white",
    x: 3,
    y: 0
};
var gameArr = [["black", "black", "black", "black", "black", "black", "black", "black"], ["black", "black", "black", "black", "black", "black", "black", "black"], ["black", "black", "black", "black", "black", "black", "black", "black"], ["black", "black", "black", "black", "black", "black", "black", "black"], ["black", "black", "black", "black", "black", "black", "black", "black"], ["black", "black", "black", "black", "black", "black", "black", "black"], ["black", "black", "black", "black", "black", "black", "black", "black"], ["black", "black", "black", "black", "black", "black", "black", "black"], ["black", "black", "black", "black", "black", "black", "black", "black"], ["black", "black", "black", "black", "black", "black", "black", "black"], ["black", "black", "black", "black", "black", "black", "black", "black"], ["black", "black", "black", "black", "black", "black", "black", "black"], ["black", "black", "black", "black", "black", "black", "black", "black"], ["black", "black", "black", "black", "black", "black", "black", "black"], ["black", "black", "black", "black", "black", "black", "black", "black"], ["black", "black", "black", "black", "black", "black", "black", "black"]];
;
var r = false;
var l = false;
var f = false;
var score = 0;
var ended = true;
var frame = 0;
var scr = document.getElementById("scr");
document.addEventListener("keydown", function (e) {
    console.log(e.key);
    if (e.key === "e") {
        console.log("ending");
        frame = 0;
        score = 0;
        ended = true;
    }
    if (e.key === "ArrowRight")
        r = true;
    if (e.key === "ArrowLeft")
        l = true;
    if (e.key === "ArrowUp")
        f = true;
    if (e.key === "r" && ended) {
        ended = false;
        gameArr = [["black", "black", "black", "black", "black", "black", "black", "black"], ["black", "black", "black", "black", "black", "black", "black", "black"], ["black", "black", "black", "black", "black", "black", "black", "black"], ["black", "black", "black", "black", "black", "black", "black", "black"], ["black", "black", "black", "black", "black", "black", "black", "black"], ["black", "black", "black", "black", "black", "black", "black", "black"], ["black", "black", "black", "black", "black", "black", "black", "black"], ["black", "black", "black", "black", "black", "black", "black", "black"], ["black", "black", "black", "black", "black", "black", "black", "black"], ["black", "black", "black", "black", "black", "black", "black", "black"], ["black", "black", "black", "black", "black", "black", "black", "black"], ["black", "black", "black", "black", "black", "black", "black", "black"], ["black", "black", "black", "black", "black", "black", "black", "black"], ["black", "black", "black", "black", "black", "black", "black", "black"], ["black", "black", "black", "black", "black", "black", "black", "black"], ["black", "black", "black", "black", "black", "black", "black", "black"]];
        r = false;
        l = false;
        f = false;
        score = 0;
        if (scr)
            scr.innerHTML = "score: " + score;
        frame = 0;
        genPiece();
        gameLoop();
    }
});
window.alert("use the left and right arrows to move the falling piece, the up arrow to flip it. Match 3 of the same color (vertically or horizontally) to clear them. Press 'e' to abort game and 'r' to start");
function setScreen(arr) {
    var s = "";
    for (var i = 0; i < 16; i++) {
        for (var j = 0; j < 8; j++) {
            s = "s" + i + j;
            var b = document.getElementById(s);
            if (b) {
                b.style.color = arr[i][j];
                b.style.backgroundColor = arr[i][j];
            }
        }
    }
}
function gameLoop() {
    setScreen(gameArr);
    if (frame % 3 === 0) {
        moveDown();
        //check if game over
        for (var i = 0; i < 8; i++) {
            if (!(gameArr[0][i] === "black")) {
                ended = true;
                setScreen(allWhite);
            }
        }
    }
    else {
        if (r) {
            moveRight();
            r = false;
        }
        else if (l) {
            moveLeft();
            l = false;
        }
        else if (f) {
            flip();
            f = false;
        }
        else
            console.log("no move");
    }
    console.log(frame);
    frame++;
    if (!ended)
        setTimeout(gameLoop, 80 * (Math.pow(0.975, score)));
    else
        setScreen(allWhite);
}
function moveRight() {
    if (piece.x < 6 && gameArr[piece.y][piece.x + 2] === "black") {
        gameArr[piece.y][piece.x] = "black";
        gameArr[piece.y][piece.x + 1] = "black";
        piece.x++;
        gameArr[piece.y][piece.x] = piece.color1;
        gameArr[piece.y][piece.x + 1] = piece.color2;
    }
}
function moveLeft() {
    if (piece.x > 0 && gameArr[piece.y][piece.x - 1] === "black") {
        gameArr[piece.y][piece.x] = "black";
        gameArr[piece.y][piece.x + 1] = "black";
        piece.x--;
        gameArr[piece.y][piece.x] = piece.color1;
        gameArr[piece.y][piece.x + 1] = piece.color2;
    }
}
function flip() {
    var temp = piece.color1;
    piece.color1 = piece.color2;
    piece.color2 = temp;
}
function moveDown() {
    if (piece.y < 15 && gameArr[piece.y + 1][piece.x] === "black" && gameArr[piece.y + 1][piece.x + 1] === "black") {
        gameArr[piece.y][piece.x] = "black";
        gameArr[piece.y][piece.x + 1] = "black";
        piece.y++;
        gameArr[piece.y][piece.x] = piece.color1;
        gameArr[piece.y][piece.x + 1] = piece.color2;
    }
    else {
        check3();
        genPiece();
    }
}
function check3() {
    //check horizontal
    for (var i = 15; i >= 0; i--) {
        for (var j = 0; j < 6; j++) {
            if (!(gameArr[i][j] === "black") && gameArr[i][j] === gameArr[i][j + 1] && gameArr[i][j] === gameArr[i][j + 2]) {
                //move rows down
                for (var k = i; k >= 1; k--) {
                    gameArr[k][j] = gameArr[k - 1][j];
                    gameArr[k][j + 1] = gameArr[k - 1][j + 1];
                    gameArr[k][j + 2] = gameArr[k - 1][j + 2];
                }
                gameArr[0][j] = "black";
                gameArr[0][j + 1] = "black";
                gameArr[0][j + 2] = "black";
                score++;
                if (scr)
                    scr.innerHTML = "score: " + score;
                check3();
            }
        }
    }
    //check for vertical
    for (var i = 15; i >= 0; i--) {
        for (var j = 7; j >= 0; j--) {
            //only check squares which are not empty
            if (!(gameArr[i][j] === "black") && i - 2 >= 0 && gameArr[i][j] === gameArr[i - 1][j] && gameArr[i][j] === gameArr[i - 2][j]) {
                console.log("Vertical");
                //move row down
                for (var k = i; k >= 3; k--) {
                    gameArr[k][j] = gameArr[k - 3][j];
                }
                for (var k = 2; k >= 0; k--) {
                    gameArr[k][j] = "black";
                }
                //check for any new matches created
                score++;
                if (scr)
                    scr.innerHTML = "score: " + score;
                check3();
            }
        }
    }
}
function genPiece() {
    piece.x = 3;
    piece.y = 0;
    piece.color1 = genColor();
    piece.color2 = genColor();
}
function genColor() {
    var decideColor = Math.floor(Math.random() * 4);
    if (decideColor === 0)
        return "red";
    if (decideColor === 1)
        return "green";
    if (decideColor === 2)
        return "blue";
    if (decideColor === 3)
        return "purple";
    return "white";
}
