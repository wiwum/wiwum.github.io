var output = document.getElementById("outputElement");
var txtOutput = document.getElementById("outputText");
var imgOutput = document.getElementById("outputImage");

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


//function that actually runs the code
var runCode = function () {
    //makes the out put blank
    txtOutput.innerHTML = "";
    imgOutput.src = "";
    output.style.backgroundColor = "white";
    output.style.color = "black";
    output.style.fontSize = "14px";
    output.style.paddingLeft = "0px"

    //IMPORTANT: this function has redundant if statements that check for the same things in different lines, only the first line's if statements are commented
    //checks for "display" in the first box
    if (line1p1.value == "display") {
        //checks for "text" in the second box, then sets the text output to whatever is in the third box
        if (line1p2.value == "text") {
            txtOutput.innerHTML = line1p3.value;
        }
        //checks for "image" in the second box, then sets the image output's source to whatever is in the third box
        if (line1p2.value == "image") {
            imgOutput.src = line1p3.value;
        }
        //checks for "moveOutput" in the second box, then moves the output however many pixels specified in the third box
        if (line1p2.value == "moveOutput") {
            output.style.paddingLeft = line1p3.value;
        }
    }
    //checks for "addStyle" in the first box
    if (line1p1.value == "addStyle") {
        //checks for "backgroundColor" in the second box, then sets the output's background color to whatever is in the third box
        if (line1p2.value == "backgroundColor") {
            output.style.backgroundColor = line1p3.value;
        }
        //checks for "textColor" in the second box, then sets the output's text color to whatever is in the third box
        if (line1p2.value == "textColor") {
            output.style.color = line1p3.value;
        }
        //checks for "textSize" in the second box, then sets the output's text size to whatever is in the third box
        if (line1p2.value == "textSize") {
            output.style.fontSize = line1p3.value;
        }
    }
    //checks for "changeText" in the first box then changes the text output to whatever is in the third box after the delay specified in the second box
    if (line1p1.value == "changeText") {
        var setTxtChange1 = setTimeout(changeText1, line1p2.value);
    }

    function changeText1() {
        txtOutput.innerHTML = line1p3.value;
    }
    //checks for "changeImage" in the first box then changes the image output's source to whatever is in the third box after the delay specified in the second box
    if (line1p1.value == "changeImage") {
        var setImgChange1 = setTimeout(changeImage1, line1p2.value);
    }

    function changeImage1() {
        imgOutput.src = line1p3.value;
    }
    // new line
    // new line
    if (line2p1.value == "display") {
        if (line2p2.value == "text") {
            txtOutput.innerHTML = line2p3.value;
        }
        if (line2p2.value == "image") {
            imgOutput.src = line2p3.value;
        }
        if (line2p2.value == "moveOutput") {
            output.style.paddingLeft = line2p3.value;
        }
    }
    if (line2p1.value == "addStyle") {
        if (line2p2.value == "backgroundColor") {
            output.style.backgroundColor = line2p3.value;
        }
        if (line2p2.value == "textColor") {
            output.style.color = line2p3.value;
        }
        if (line2p2.value == "textSize") {
            output.style.fontSize = line2p3.value;
        }
    }
    if (line2p1.value == "changeText") {
        var setTxtChange2 = setTimeout(changeText2, line2p2.value);
    }

    function changeText2() {
        txtOutput.innerHTML = line2p3.value;
    }
    if (line2p1.value == "changeImage") {
        var setImgChange2 = setTimeout(changeImage2, line2p2.value);
    }

    function changeImage2() {
        imgOutput.src = line2p3.value;
    }
    // new line
    // new line
    if (line3p1.value == "display") {
        if (line3p2.value == "text") {
            txtOutput.innerHTML = line3p3.value;
        }
        if (line3p2.value == "image") {
            imgOutput.src = line3p3.value;
        }
        if (line3p2.value == "moveOutput") {
            output.style.paddingLeft = line3p3.value;
        }
    }
    if (line3p1.value == "addStyle") {
        if (line3p2.value == "backgroundColor") {
            output.style.backgroundColor = line3p3.value;
        }
        if (line3p2.value == "textColor") {
            output.style.color = line3p3.value;
        }
        if (line3p2.value == "textSize") {
            output.style.fontSize = line3p3.value;
        }
    }
    if (line3p1.value == "changeText") {
        var setTxtChange3 = setTimeout(changeText3, line3p2.value);
    }

    function changeText3() {
        txtOutput.innerHTML = line3p3.value;
    }
    if (line3p1.value == "changeImage") {
        var setImgChange3 = setTimeout(changeImage3, line3p2.value);
    }

    function changeImage3() {
        imgOutput.src = line3p3.value;
    }
    // new line
    // new line
    if (line4p1.value == "display") {
        if (line4p2.value == "text") {
            txtOutput.innerHTML = line4p3.value;
        }
        if (line4p2.value == "image") {
            imgOutput.src = line4p3.value;
        }
        if (line4p2.value == "moveOutput") {
            output.style.paddingLeft = line4p3.value;
        }
    }
    if (line4p1.value == "addStyle") {
        if (line4p2.value == "backgroundColor") {
            output.style.backgroundColor = line4p3.value;
        }
        if (line4p2.value == "textColor") {
            output.style.color = line4p3.value;
        }
        if (line4p2.value == "textSize") {
            output.style.fontSize = line4p3.value;
        }

    }
    if (line4p1.value == "changeText") {
        var setTxtChange4 = setTimeout(changeText4, line4p2.value);
    }

    function changeText4() {
        txtOutput.innerHTML = line4p3.value;
    }
    if (line4p1.value == "changeImage") {
        var setImgChange4 = setTimeout(changeImage4, line4p2.value);
    }

    function changeImage4() {
        imgOutput.src = line4p3.value;
    }
    // new line
    // new line
    if (line5p1.value == "display") {
        if (line5p2.value == "text") {
            txtOutput.innerHTML = line5p3.value;
        }
        if (line5p2.value == "image") {
            imgOutput.src = line5p3.value;
        }
        if (line5p2.value == "moveOutput") {
            output.style.paddingLeft = line5p3.value;
        }
    }
    if (line5p1.value == "addStyle") {
        if (line5p2.value == "backgroundColor") {
            output.style.backgroundColor = line5p3.value;
        }
        if (line5p2.value == "textColor") {
            output.style.color = line5p3.value;
        }
        if (line5p2.value == "textSize") {
            output.style.fontSize = line5p3.value;
        }
    }
    if (line5p1.value == "changeText") {
        var setTxtChange5 = setTimeout(changeText5, line5p2.value);
    }

    function changeText5() {
        txtOutput.innerHTML = line5p3.value;
    }
    if (line5p1.value == "changeImage") {
        var setImgChange5 = setTimeout(changeImage5, line5p2.value);
    }

    function changeImage5() {
        imgOutput.src = line5p3.value;
    }
    // new line
    // new line
    if (line6p1.value == "display") {
        if (line6p2.value == "text") {
            txtOutput.innerHTML = line6p3.value;
        }
        if (line6p2.value == "image") {
            imgOutput.src = line6p3.value;
        }
        if (line6p2.value == "moveOutput") {
            output.style.paddingLeft = line6p3.value;
        }
    }
    if (line6p1.value == "addStyle") {
        if (line6p2.value == "backgroundColor") {
            output.style.backgroundColor = line6p3.value;
        }
        if (line6p2.value == "textColor") {
            output.style.color = line6p3.value;
        }
        if (line6p2.value == "textSize") {
            output.style.fontSize = line6p3.value;
        }
    }
    if (line6p1.value == "changeText") {
        var setTxtChange6 = setTimeout(changeText6, line6p2.value);
    }

    function changeText6() {
        txtOutput.innerHTML = line6p3.value;
    }
    if (line6p1.value == "changeImage") {
        var setImgChange6 = setTimeout(changeImage6, line6p2.value);
    }

    function changeImage6() {
        imgOutput.src = line6p3.value;
    }
    // new line
    // new line
    if (line7p1.value == "display") {
        if (line7p2.value == "text") {
            txtOutput.innerHTML = line7p3.value;
        }
        if (line7p2.value == "image") {
            imgOutput.src = line7p3.value;
        }
        if (line7p2.value == "moveOutput") {
            output.style.paddingLeft = line7p3.value;
        }
    }
    if (line7p1.value == "addStyle") {
        if (line7p2.value == "backgroundColor") {
            output.style.backgroundColor = line7p3.value;
        }
        if (line7p2.value == "textColor") {
            output.style.color = line7p3.value;
        }
        if (line7p2.value == "textSize") {
            output.style.fontSize = line7p3.value;
        }
    }
    if (line7p1.value == "changeText") {
        var setTxtChange7 = setTimeout(changeText7, line7p2.value);
    }

    function changeText7() {
        txtOutput.innerHTML = line7p3.value;
    }
    if (line7p1.value == "changeImage") {
        var setImgChange7 = setTimeout(changeImage7, line7p2.value);
    }

    function changeImage7() {
        imgOutput.src = line7p3.value;
    }
    // new line
    // new line
    if (line8p1.value == "display") {
        if (line8p2.value == "text") {
            txtOutput.innerHTML = line8p3.value;
        }
        if (line8p2.value == "image") {
            imgOutput.src = line8p3.value;
        }
        if (line8p2.value == "moveOutput") {
            output.style.paddingLeft = line8p3.value;
        }
    }
    if (line8p1.value == "addStyle") {
        if (line8p2.value == "backgroundColor") {
            output.style.backgroundColor = line8p3.value;
        }
        if (line8p2.value == "textColor") {
            output.style.color = line8p3.value;
        }
        if (line8p2.value == "textSize") {
            output.style.fontSize = line8p3.value;
        }
    }
    if (line8p1.value == "changeText") {
        var setTxtChange8 = setTimeout(changeText8, line8p2.value);
    }

    function changeText8() {
        txtOutput.innerHTML = line8p3.value;
    }
    if (line8p1.value == "changeImage") {
        var setImgChange8 = setTimeout(changeImage8, line8p2.value);
    }

    function changeImage8() {
        imgOutput.src = line8p3.value;
    }
    // new line
    // new line
    if (line9p1.value == "display") {
        if (line9p2.value == "text") {
            txtOutput.innerHTML = line9p3.value;
        }
        if (line9p2.value == "image") {
            imgOutput.src = line9p3.value;
        }
        if (line9p2.value == "moveOutput") {
            output.style.paddingLeft = line9p3.value;
        }
    }
    if (line9p1.value == "addStyle") {
        if (line9p2.value == "backgroundColor") {
            output.style.backgroundColor = line9p3.value;
        }
        if (line9p2.value == "textColor") {
            output.style.color = line9p3.value;
        }
        if (line9p2.value == "textSize") {
            output.style.fontSize = line9p3.value;
        }
    }
    if (line9p1.value == "changeText") {
        var setTxtChange9 = setTimeout(changeText9, line9p2.value);
    }

    function changeText9() {
        txtOutput.innerHTML = line9p3.value;
    }
    if (line9p1.value == "changeImage") {
        var setImgChange9 = setTimeout(changeImage9, line9p2.value);
    }

    function changeImage9() {
        imgOutput.src = line9p3.value;
    }
    // new line
    // new line
    if (line10p1.value == "display") {
        if (line10p2.value == "text") {
            txtOutput.innerHTML = line10p3.value;
        }
        if (line10p2.value == "image") {
            imgOutput.src = line10p3.value;
        }
        if (line10p2.value == "moveOutput") {
            output.style.paddingLeft = line10p3.value;
        }
    }
    if (line10p1.value == "addStyle") {
        if (line10p2.value == "backgroundColor") {
            output.style.backgroundColor = line10p3.value;
        }
        if (line10p2.value == "textColor") {
            output.style.color = line10p3.value;
        }
        if (line10p2.value == "textSize") {
            output.style.fontSize = line10p3.value;
        }

    }
    if (line10p1.value == "changeText") {
        var setTxtChange10 = setTimeout(changeText10, line10p2.value);
    }

    function changeText10() {
        txtOutput.innerHTML = line10p3.value;
    }
    if (line10p1.value == "changeImage") {
        var setImgChange10 = setTimeout(changeImage10, line10p2.value);
    }

    function changeImage10() {
        imgOutput.src = line10p3.value;
    }
};
