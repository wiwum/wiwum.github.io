//variables to select the word based on a random number
var selectNum;
var selectWord;
//paragragh that displays the line
var line = document.getElementById("cardSentance");

//function to select and display word
var randomAdjective = function () {
  selectNum = Math.random(1, 6);
  selectWord = Math.round(selectNum);
  if (selectWord == 1) {
    line.innerHTML = "My mom is wonderful";
  }
  if (selectWord == 2) {
    line.innerHTML = "My mome is faithful";
  }
  if (selectWord == 3) {
    line.innerHTML = "My mome is beautiful";
  }
  if (selectWord == 4) {
    line.innerHTML = "My mome is loving";
  }
  if (selectWord == 5) {
    line.innerHTML = "My mome is greatful";
  }
  if (selectWord == 6) {
    line.innerHTML = "My mome is perfect";
  }
};
