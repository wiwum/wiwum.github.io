var n = 1;
var i = 0;

function yub() {
   document.writeln("YUB");
   document.writeln(n);
   n += 1;
}
for (i = 0; i < 150; i += 1) {
   yub();
}
