// gameboard element variable
var gameBoard = document.querySelector("game-board");
var currentGameBoardData = gameBoard.innerHTML;

// squares variables (loc = location, as in location along the y axis)
var XLoc = 1;
var YLoc = 1;

// for loop to add the <game-square> elements into the <game-board> element
for (var i = 0; i < 144; i++) {
  // <game-square> element contents goe down
  gameBoard.innerHTML =  currentGameBoardData + "<game-square id='" + XLoc + "," + YLoc + "'></game-square>";
  currentGameBoardData = gameBoard.innerHTML;
  XLoc++;
  // makes a new row to keep the length of each row at twelve.
  if (XLoc == 13) {
    XLoc = 1;
    YLoc++;
    gameBoard.innerHTML =  currentGameBoardData + "<br>"
  }
  currentGameBoardData = gameBoard.innerHTML;
}

//for loop to add the javascript into the <game-board> element !!! warning this is not very "clean" code
document.getElementById("1,1").innerHTML = "<test></test>"

// color change function
var changeColor = function (x, y, c) {
  var squareCoordinates = x + "," + y; // puts the squares coordinates into a string.
  console.log(squareCoordinates);
  var selectedSquare = document.getElementById(squareCoordinates); // finds square with the coordinates
  //sends error message if square can't be found
  if (selectedSquare == undefined) {
    console.log("could not find selected square");
  }
  // changes class of square in order to change its color (see class-styles.css)
  if (selectedSquare != undefined) {
    selectedSquare.style.backgroundColor = c;
  }
};
