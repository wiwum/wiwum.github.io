var win = Math.random();

function optone() {
  while (win > .5) {
    alert("you win");
    win = .5;
  }
  while (win < .5) {
    alert("you lose");
    win = .5;
  }
}

function opttwo() {
  while (win > .5) {
    alert("you lose");
    win = .5;
  }
  while (win < .5) {
    alert("you win");
    win = .5;
  }
}
