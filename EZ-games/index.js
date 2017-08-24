// gameboard/gamesquare element variable
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
    gameBoard.innerHTML =  currentGameBoardData + "<br>";
  }
  currentGameBoardData = gameBoard.innerHTML;
}

//for loops to add the javascript into the <game-board> element !!! warning this will not be very "clean" code
//variables for selecting the <game-square>s
var Yclick = 1;
var Xclick = 1;
var square1 = document.getElementById('1,1');
var addClick = function () {
  //this will be a for loop that adds event listeners to all the <game-square>s
  square1.innerHTML = "<script id='scriptElementIn1' type='text/javascript'>console.log('script in one is working!!!');</script>";
  var scriptElemData = document.getElementById('scriptElementIn1').innerHTML;
  for (var i = 0; i < 144; i++) {
    //adds an event listener
    document.getElementById('scriptElementIn1').innerHTML = scriptElemData + "document.getElementById('" + Yclick + "," + Xclick + "').innerHTML = 'O';";
    Xclick++
    scriptElemData = document.getElementById('scriptElementIn1').innerHTML;
    //starts selecting the next row after it selects a full row
    if (Xclick == 13) {
      Xclick = 1;
      Yclick++;
    }
  }
};


var addMouseOver = function () {
  //this will be a for loop that adds event listeners to all the <game-square>s
};


// color change function
var changeColor = function (x, y, color) {
  var squareCoordinates = x + "," + y; // puts the squares coordinates into a string.
  console.log(squareCoordinates);
  var selectedSquare = document.getElementById(squareCoordinates); // finds square with the coordinates
  //sends error message if square can't be found
  if (selectedSquare == undefined) {
    console.log("could not find selected square");
  }
  // changes class of square in order to change its color (see class-styles.css)
  if (selectedSquare != undefined) {
    selectedSquare.style.backgroundColor = color;
  }
};
