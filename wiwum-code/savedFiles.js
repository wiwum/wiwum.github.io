//this wiLL be where saved fiLes go, as in if someone wants to save ther code.
//inputs(lines) variables:
//line 1 variables
var line1p1 = document.getElementById("line1-1");
var line1p2 = document.getElementById("line1-2");
var line1p3 = document.getElementById("line1-3");

//line 2 variables
var line2p1 = document.getElementById("line2-1");
var line2p2 = document.getElementById("line2-2");
var line2p3 = document.getElementById("line2-3");

//line 3 variables
var line3p1 = document.getElementById("line3-1");
var line3p2 = document.getElementById("line3-2");
var line3p3 = document.getElementById("line3-3");

//line 4 variables
var line4p1 = document.getElementById("line4-1");
var line4p2 = document.getElementById("line4-2");
var line4p3 = document.getElementById("line4-3");

//line 5 variables
var line5p1 = document.getElementById("line5-1");
var line5p2 = document.getElementById("line5-2");
var line5p3 = document.getElementById("line5-3");


//line 6 variables
var line6p1 = document.getElementById("line6-1");
var line6p2 = document.getElementById("line6-2");
var line6p3 = document.getElementById("line6-3");


//line 7 variables
var line7p1 = document.getElementById("line7-1");
var line7p2 = document.getElementById("line7-2");
var line7p3 = document.getElementById("line7-3");


//line 8 variables
var line8p1 = document.getElementById("line8-1");
var line8p2 = document.getElementById("line8-2");
var line8p3 = document.getElementById("line8-3");


//line 9 variables
var line9p1 = document.getElementById("line9-1");
var line9p2 = document.getElementById("line9-2");
var line9p3 = document.getElementById("line9-3");


//line 10 variables
var line10p1 = document.getElementById("line10-1");
var line10p2 = document.getElementById("line10-2");
var line10p3 = document.getElementById("line10-3");
//variabLes for storage:
//spot 1
var L1p1s1;
var L1p2s1;
var L1p3s1;
var L2p1s1;
var L2p2s1;
var L2p3s1;
var L3p1s1;
var L3p2s1;
var L3p3s1;
var L4p1s1;
var L4p2s1;
var L4p3s1;
var L5p1s1;
var L5p2s1;
var L5p3s1;
var L6p1s1;
var L6p2s1;
var L6p3s1;
var L7p1s1;
var L7p2s1;
var L7p3s1;
var L8p1s1;
var L8p2s1;
var L8p3s1;
var L9p1s1;
var L9p2s1;
var L9p3s1;
var L10p1s1;
var L10p2s1;
var L10p3s1;
//spot 2
var L1p1s2;
var L1p2s2;
var L1p3s2;
var L2p1s2;
var L2p2s2;
var L2p3s2;
var L3p1s2;
var L3p2s2;
var L3p3s2;
var L4p1s2;
var L4p2s2;
var L4p3s2;
var L5p1s2;
var L5p2s2;
var L5p3s2;
var L6p1s2;
var L6p2s2;
var L6p3s2;
var L7p1s2;
var L7p2s2;
var L7p3s2;
var L8p1s2;
var L8p2s2;
var L8p3s2;
var L9p1s2;
var L9p2s2;
var L9p3s2;
var L10p1s2;
var L10p2s2;
var L10p3s2;
//spot 3
var L1p1s3;
var L1p2s3;
var L1p3s3;
var L2p1s3;
var L2p2s3;
var L2p3s3;
var L3p1s3;
var L3p2s3;
var L3p3s3;
var L4p1s3;
var L4p2s3;
var L4p3s3;
var L5p1s3;
var L5p2s3;
var L5p3s3;
var L6p1s3;
var L6p2s3;
var L6p3s3;
var L7p1s3;
var L7p2s3;
var L7p3s3;
var L8p1s3;
var L8p2s3;
var L8p3s3;
var L9p1s3;
var L9p2s3;
var L9p3s3;
var L10p1s3;
var L10p2s3;
var L10p3s3;

// sets the storage variables to the input values, thus storing the input values to be retreived later
var saveTo1 = function () {
   L1p1s1 = line1p1.value;
   L1p2s1 = line1p2.value;
   L1p3s1 = line1p3.value;
   L2p1s1 = line2p1.value;
   L2p2s1 = line2p2.value;
   L2p3s1 = line2p3.value;
   L3p1s1 = line3p1.value;
   L3p2s1 = line3p2.value;
   L3p3s1 = line3p3.value;
   L4p1s1 = line4p1.value;
   L4p2s1 = line4p2.value;
   L4p3s1 = line4p3.value;
   L5p1s1 = line5p1.value;
   L5p2s1 = line5p2.value;
   L5p3s1 = line5p3.value;
   L6p1s1 = line6p1.value;
   L6p2s1 = line6p2.value;
   L6p3s1 = line6p3.value;
   L7p1s1 = line7p1.value;
   L7p2s1 = line7p2.value;
   L7p3s1 = line7p3.value;
   L8p1s1 = line8p1.value;
   L8p2s1 = line8p2.value;
   L8p3s1 = line8p3.value;
   L9p1s1 = line9p1.value;
   L9p2s1 = line9p2.value;
   L9p3s1 = line9p3.value;
   L10p1s1 = line10p1.value;
   L10p2s1 = line10p2.value;
   L10p3s1 = line10p3.value;
};

//sets the input values to the storage variables, thus restoring the lines of code to what was stored
var getFrom1 = function () {
   line1p1.value = L1p1s1;
   line1p2.value = L1p2s1;
   line1p3.value = L1p3s1;
   line2p1.value = L2p1s1;
   line2p2.value = L2p2s1;
   line2p3.value = L2p3s1;
   line3p1.value = L3p1s1;
   line3p2.value = L3p2s1;
   line3p3.value = L3p3s1;
   line4p1.value = L4p1s1;
   line4p2.value = L4p2s1;
   line4p3.value = L4p3s1;
   line5p1.value = L5p1s1;
   line5p2.value = L5p2s1;
   line5p3.value = L5p3s1;
   line6p1.value = L6p1s1;
   line6p2.value = L6p2s1;
   line6p3.value = L6p3s1;
   line7p1.value = L7p1s1;
   line7p2.value = L7p2s1;
   line7p3.value = L7p3s1;
   line8p1.value = L8p1s1;
   line8p2.value = L8p2s1;
   line8p3.value = L8p3s1;
   line9p1.value = L9p1s1;
   line9p2.value = L9p2s1;
   line9p3.value = L9p3s1;
   line10p1.value = L10p1s1;
   line10p2.value = L10p2s1;
   line10p3.value = L10p3s1;
};

// sets the storage variables to the input values, thus storing the input values to be retreived later
var saveTo2 = function () {
   L1p1s2 = line1p1.value;
   L1p2s2 = line1p2.value;
   L1p3s2 = line1p3.value;
   L2p1s2 = line2p1.value;
   L2p2s2 = line2p2.value;
   L2p3s2 = line2p3.value;
   L3p1s2 = line3p1.value;
   L3p2s2 = line3p2.value;
   L3p3s2 = line3p3.value;
   L4p1s2 = line4p1.value;
   L4p2s2 = line4p2.value;
   L4p3s2 = line4p3.value;
   L5p1s2 = line5p1.value;
   L5p2s2 = line5p2.value;
   L5p3s2 = line5p3.value;
   L6p1s2 = line6p1.value;
   L6p2s2 = line6p2.value;
   L6p3s2 = line6p3.value;
   L7p1s2 = line7p1.value;
   L7p2s2 = line7p2.value;
   L7p3s2 = line7p3.value;
   L8p1s2 = line8p1.value;
   L8p2s2 = line8p2.value;
   L8p3s2 = line8p3.value;
   L9p1s2 = line9p1.value;
   L9p2s2 = line9p2.value;
   L9p3s2 = line9p3.value;
   L10p1s2 = line10p1.value;
   L10p2s2 = line10p2.value;
   L10p3s2 = line10p3.value;
};

//sets the input values to the storage variables, thus restoring the lines of code to what was stored
var getFrom2 = function () {
   line1p1.value = L1p1s2;
   line1p2.value = L1p2s2;
   line1p3.value = L1p3s2;
   line2p1.value = L2p1s2;
   line2p2.value = L2p2s2;
   line2p3.value = L2p3s2;
   line3p1.value = L3p1s2;
   line3p2.value = L3p2s2;
   line3p3.value = L3p3s2;
   line4p1.value = L4p1s2;
   line4p2.value = L4p2s2;
   line4p3.value = L4p3s2;
   line5p1.value = L5p1s2;
   line5p2.value = L5p2s2;
   line5p3.value = L5p3s2;
   line6p1.value = L6p1s2;
   line6p2.value = L6p2s2;
   line6p3.value = L6p3s2;
   line7p1.value = L7p1s2;
   line7p2.value = L7p2s2;
   line7p3.value = L7p3s2;
   line8p1.value = L8p1s2;
   line8p2.value = L8p2s2;
   line8p3.value = L8p3s2;
   line9p1.value = L9p1s2;
   line9p2.value = L9p2s2;
   line9p3.value = L9p3s2;
   line10p1.value = L10p1s2;
   line10p2.value = L10p2s2;
   line10p3.value = L10p3s2;
};

// sets the storage variables to the input values, thus storing the input values to be retreived later
var saveTo3 = function () {
   L1p1s3 = line1p1.value;
   L1p2s3 = line1p2.value;
   L1p3s3 = line1p3.value;
   L2p1s3 = line2p1.value;
   L2p2s3 = line2p2.value;
   L2p3s3 = line2p3.value;
   L3p1s3 = line3p1.value;
   L3p2s3 = line3p2.value;
   L3p3s3 = line3p3.value;
   L4p1s3 = line4p1.value;
   L4p2s3 = line4p2.value;
   L4p3s3 = line4p3.value;
   L5p1s3 = line5p1.value;
   L5p2s3 = line5p2.value;
   L5p3s3 = line5p3.value;
   L6p1s3 = line6p1.value;
   L6p2s3 = line6p2.value;
   L6p3s3 = line6p3.value;
   L7p1s3 = line7p1.value;
   L7p2s3 = line7p2.value;
   L7p3s3 = line7p3.value;
   L8p1s3 = line8p1.value;
   L8p2s3 = line8p2.value;
   L8p3s3 = line8p3.value;
   L9p1s3 = line9p1.value;
   L9p2s3 = line9p2.value;
   L9p3s3 = line9p3.value;
   L10p1s3 = line10p1.value;
   L10p2s3 = line10p2.value;
   L10p3s3 = line10p3.value;
};

//sets the input values to the storage variables, thus restoring the lines of code to what was stored
var getFrom3 = function () {
   line1p1.value = L1p1s3;
   line1p2.value = L1p2s3;
   line1p3.value = L1p3s3;
   line2p1.value = L2p1s3;
   line2p2.value = L2p2s3;
   line2p3.value = L2p3s3;
   line3p1.value = L3p1s3;
   line3p2.value = L3p2s3;
   line3p3.value = L3p3s3;
   line4p1.value = L4p1s3;
   line4p2.value = L4p2s3;
   line4p3.value = L4p3s3;
   line5p1.value = L5p1s3;
   line5p2.value = L5p2s3;
   line5p3.value = L5p3s3;
   line6p1.value = L6p1s3;
   line6p2.value = L6p2s3;
   line6p3.value = L6p3s3;
   line7p1.value = L7p1s3;
   line7p2.value = L7p2s3;
   line7p3.value = L7p3s3;
   line8p1.value = L8p1s3;
   line8p2.value = L8p2s3;
   line8p3.value = L8p3s3;
   line9p1.value = L9p1s3;
   line9p2.value = L9p2s3;
   line9p3.value = L9p3s3;
   line10p1.value = L10p1s3;
   line10p2.value = L10p2s3;
   line10p3.value = L10p3s3;
};
