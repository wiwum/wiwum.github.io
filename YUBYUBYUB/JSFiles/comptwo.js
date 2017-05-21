var whowin = Math.random();

function comptwo() {
   while (whowin > .5) {
      alert("yub wins!!!");
      whowin = .5;
   }
   while (whowin < .5 & whowin > .2) {
      alert("it was a tie.");
      whowin = .5;
   }
   while (whowin < .2) {
      alert("nub wins.");
      whowin = .5;
   }
}
