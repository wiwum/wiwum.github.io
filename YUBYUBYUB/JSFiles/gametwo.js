var playerone = 0;

function winoptone() {
  playerone = -10;
}

function winopttwo() {
  playerone = 10;
}

function clickoptone() {
  while (playerone < 0) {
    alert("Player two wins!!!");
    playerone = 0;
  }
  while (playerone > 0) {
    alert("Player one wins!!!");
    playerone = 0;
  }
}

function clickopttwo() {
  while (playerone < 0) {
    alert("Player one wins!!!");
    playerone = 0;
  }
  while (playerone > 0) {
    alert("Player two wins!!!");
    playerone = 0;
  }
}
