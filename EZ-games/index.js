// gameboard element variable
var gameBoard = document.querySelector("game-board");
var currentGameBoardData = gameBoard.innerHTML;

// squares variables (loc = location, as in location along the y axis)
var XLoc = 1;
var YLoc = 1;

// for loop to add the <game-square> elements into the <game-board> element
for (var i = 0; i < 144; i++) {
  // <game-square> element contents goe down
  gameBoard.innerHTML =  currentGameBoardData + "<game-square x-loc='" + XLoc + "' y-loc='" + YLoc + "' class='black'></game-square>";
  currentGameBoardData = gameBoard.innerHTML;
  XLoc++;
  if (XLoc == 13) {
    XLoc = 1;
    YLoc++;
    gameBoard.innerHTML =  currentGameBoardData + "<br>"
  }
  currentGameBoardData = gameBoard.innerHTML;
}

// color change function
var changeColor = function (x, y, c) {
  var selectedSquare = document.querySelector('[x-loc = "x"][y-loc = y]');
  selectedSquare.backgroundColor = c;
};
