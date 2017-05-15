//variables to select the word based on a random number
var selectNum;
var selectWord;
//paragragh that displays the line
var line = document.getElementById("cardSentance").innerHTML;

//function to select and display word
var randomAdjective = function () {
  selectNum = Math.random(1, 6);
  selectWord = Math.round(selectNum);
  if (selectWord == 1) {
    line = "My mom is wonderful";
  }
  if (selectWord == 2) {
    line = "My mome is faithful";
  }
  if (selectWord == 3) {
    line = "My mome is beautiful";
  }
  if (selectWord == 4) {
    line = "My mome is loving";
  }
  if (selectWord == 5) {
    line = "My mome is greatful";
  }
  if (selectWord == 6) {
    line = "My mome is perfect";
  }
};
