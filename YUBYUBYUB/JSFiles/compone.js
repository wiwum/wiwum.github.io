var yubornub = Math.random();
var i = 0;
var yubcount = 0;
var nubcount = 0;
for (i = 0; i < 50; i += 1) {
   while (yubornub > .415) {
      document.writeln("YUB");
      yubcount += 1;
      yubornub = Math.random();
   }
   while (yubornub < .415) {
      document.writeln("NUB");
      nubcount += 1;
      yubornub = Math.random();
   }
}
while (yubcount > nubcount) {
   document.writeln("yub wins!!!");
   yubcount = 0;
   nubcount = 0;
}
while (nubcount > yubcount) {
   document.writeln("nub wins!!!");
   yubcount = 0;
   nubcount = 0;
}
