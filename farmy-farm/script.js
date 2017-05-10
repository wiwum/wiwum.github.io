/*
crops:
    corn
    wheat
    rice
    sugar
    carrot
    potato
*/
//variables variables variables variables variables variables variables variables variables variables variables variables variables variables variables variables//
var cropName = document.getElementById("cropName");
var farmTitle = document.getElementById("farmAndMoneys");
var numOfItems = document.getElementById("numberOfStuff");
var crop = "wheat";
var corn = 0;
var wheat = 0;
var rice = 0;
var sugar = 0;
var carrots = 0;
var potatoes = 0;
var bread = 0;
var cake = 0;
var cornBread = 0;
var carrotCake = 0;
var cornChips = 0;
var sweetPotatoes = 0;
var sweetCarrots = 0;
var money = 20;
var q = 0;
cropName.innerHTML = "You are planting " + crop;
farmTitle.innerHTML = "This is your farm. you have " + money + " moneys.";
numOfItems.innerHTML = "corn: " + corn + " wheat: " + wheat + " rice: " + rice + " sugar: " + sugar + " carrots: " + carrots + " potatoes: " + potatoes + " bread: " + bread + " cake: " + cake + " corn bread: " + cornBread + " carrot cake: " + carrotCake + " corn chips: " + cornChips + " sweet potatoes: " + sweetPotatoes + " sweet carrots: " + sweetCarrots;
//functions functions functions functions functions functions functions functions functions functions functions functions functions functions functions functions//
//changes crop to something else:
var changeCropWheat = function () {
    crop = "wheat";
    cropName.innerHTML = "You are planting " + crop;
};
var changeCropCorn = function () {
    crop = "corn";
    cropName.innerHTML = "You are planting " + crop;
};
var changeCropRice = function () {
    crop = "rice";
    cropName.innerHTML = "You are planting " + crop;
};
var changeCropSugar = function () {
    crop = "sugar";
    cropName.innerHTML = "You are planting " + crop;
};
var changeCropCarrot = function () {
    crop = "carrot";
    cropName.innerHTML = "You are planting " + crop;
};
var changeCropPotato = function () {
    crop = "potato";
    cropName.innerHTML = "You are planting " + crop;
};
var plot1 = document.getElementById("one");
var plot2 = document.getElementById("two");
var plot3 = document.getElementById("three");
var plot4 = document.getElementById("four");
var plot5 = document.getElementById("five");
var plot6 = document.getElementById("six");
var plot7 = document.getElementById("seven");
var plot8 = document.getElementById("eight");
var plot9 = document.getElementById("nine");
var plot10 = document.getElementById("ten");
var plot11 = document.getElementById("eleven");
var plot12 = document.getElementById("twelve");
var plot13 = document.getElementById("thirteen");
var plot14 = document.getElementById("fourteen");
var plot15 = document.getElementById("fifteen");
var plot16 = document.getElementById("sixteen");
var plot17 = document.getElementById("seventeen");
var plot18 = document.getElementById("eightteen");
var plot19 = document.getElementById("nineteen");
var plot20 = document.getElementById("twenty");
//plants the crop in the first square:
var plantSquare1 = function () {
    //the if statements subtract from your money, set the styling to make the square look active, and set a timeOut to and call a function that will give you the crop.
    if (crop == "corn" && money >= 1) {
        money -= 1;
        var growCorn1 = setTimeout(cornGrow1, 54000);
        console.log("working: " + crop);
        plot1.style.backgroundColor = "#cc9900";
        plot1.innerHTML = crop;
    }
    if (crop == "wheat" && money >= 2) {
        money -= 2;
        var growWheat1 = setTimeout(wheatGrow1, 27000);
        console.log("working: " + crop);
        plot1.style.backgroundColor = "#cc9900";
        plot1.innerHTML = crop;
    }
    if (crop == "rice" && money >= 1.5) {
        money -= 1.5;
        var growRice1 = setTimeout(riceGrow1, 36000);
        console.log("working: " + crop);
        plot1.style.backgroundColor = "#cc9900";
        plot1.innerHTML = crop;
    }
    if (crop == "sugar" && money >= 1.5) {
        money -= 1.5;
        var growSugar1 = setTimeout(sugarGrow1, 36000);
        console.log("working: " + crop);
        plot1.style.backgroundColor = "#cc9900";
        plot1.innerHTML = crop;
    }
    if (crop == "carrot" && money >= 3) {
        money -= 3;
        var growCarrot1 = setTimeout(carrotGrow1, 54000);
        console.log("working: " + crop);
        plot1.style.backgroundColor = "#cc9900";
        plot1.innerHTML = crop;
    }
    if (crop == "potato" && money >= 1) {
        money -= 1;
        var growPotato1 = setTimeout(potatoGrow1, 36000);
        console.log("working: " + crop);
        plot1.style.backgroundColor = "#cc9900";
        plot1.innerHTML = crop;
    }
    //the functions give you the crop reset the styling of the square
    function cornGrow1() {
        corn += 1;
        plot1.style.backgroundColor = "green";
        plot1.innerHTML = "";
        numOfItems.innerHTML = "corn: " + corn + " wheat: " + wheat + " rice: " + rice + " sugar: " + sugar + " carrots: " + carrots + " potatoes: " + potatoes + " bread: " + bread + " cake: " + cake + " corn bread: " + cornBread + " carrot cake: " + carrotCake + " corn chips: " + cornChips + " sweet potatoes: " + sweetPotatoes + " sweet carrots: " + sweetCarrots;
    }

    function wheatGrow1() {
        wheat += 1;
        plot1.style.backgroundColor = "green";
        plot1.innerHTML = "";
        numOfItems.innerHTML = "corn: " + corn + " wheat: " + wheat + " rice: " + rice + " sugar: " + sugar + " carrots: " + carrots + " potatoes: " + potatoes + " bread: " + bread + " cake: " + cake + " corn bread: " + cornBread + " carrot cake: " + carrotCake + " corn chips: " + cornChips + " sweet potatoes: " + sweetPotatoes + " sweet carrots: " + sweetCarrots;
    }

    function riceGrow1() {
        rice += 1;
        plot1.style.backgroundColor = "green";
        plot1.innerHTML = "";
        numOfItems.innerHTML = "corn: " + corn + " wheat: " + wheat + " rice: " + rice + " sugar: " + sugar + " carrots: " + carrots + " potatoes: " + potatoes + " bread: " + bread + " cake: " + cake + " corn bread: " + cornBread + " carrot cake: " + carrotCake + " corn chips: " + cornChips + " sweet potatoes: " + sweetPotatoes + " sweet carrots: " + sweetCarrots;
    }

    function sugarGrow1() {
        sugar += 1;
        plot1.style.backgroundColor = "green";
        plot1.innerHTML = "";
        numOfItems.innerHTML = "corn: " + corn + " wheat: " + wheat + " rice: " + rice + " sugar: " + sugar + " carrots: " + carrots + " potatoes: " + potatoes + " bread: " + bread + " cake: " + cake + " corn bread: " + cornBread + " carrot cake: " + carrotCake + " corn chips: " + cornChips + " sweet potatoes: " + sweetPotatoes + " sweet carrots: " + sweetCarrots;
    }

    function carrotGrow1() {
        carrots += 1;
        plot1.style.backgroundColor = "green";
        plot1.innerHTML = "";
        numOfItems.innerHTML = "corn: " + corn + " wheat: " + wheat + " rice: " + rice + " sugar: " + sugar + " carrots: " + carrots + " potatoes: " + potatoes + " bread: " + bread + " cake: " + cake + " corn bread: " + cornBread + " carrot cake: " + carrotCake + " corn chips: " + cornChips + " sweet potatoes: " + sweetPotatoes + " sweet carrots: " + sweetCarrots;
    }

    function potatoGrow1() {
        potatoes += 1;
        plot1.style.backgroundColor = "green";
        plot1.innerHTML = "";
        numOfItems.innerHTML = "corn: " + corn + " wheat: " + wheat + " rice: " + rice + " sugar: " + sugar + " carrots: " + carrots + " potatoes: " + potatoes + " bread: " + bread + " cake: " + cake + " corn bread: " + cornBread + " carrot cake: " + carrotCake + " corn chips: " + cornChips + " sweet potatoes: " + sweetPotatoes + " sweet carrots: " + sweetCarrots;
    }
    farmTitle.innerHTML = "This is your farm. you have " + money + " moneys.";
};
var plantSquare2 = function () {
    //the if statements subtract from your money, set the styling to make the square look active, and set a timeOut to and call a function that will give you the crop.
    if (crop == "corn" && money >= 1) {
        money -= 1;
        var growCorn2 = setTimeout(cornGrow2, 54000);
        console.log("working: " + crop);
        plot2.style.backgroundColor = "#cc9900";
        plot2.innerHTML = crop;
    }
    if (crop == "wheat" && money >= 2) {
        money -= 2;
        var growWheat2 = setTimeout(wheatGrow2, 27000);
        console.log("working: " + crop);
        plot2.style.backgroundColor = "#cc9900";
        plot2.innerHTML = crop;
    }
    if (crop == "rice" && money >= 1.5) {
        money -= 1.5;
        var growRice2 = setTimeout(riceGrow2, 36000);
        console.log("working: " + crop);
        plot2.style.backgroundColor = "#cc9900";
        plot2.innerHTML = crop;
    }
    if (crop == "sugar" && money >= 1.5) {
        money -= 1.5;
        var growSugar2 = setTimeout(sugarGrow2, 36000);
        console.log("working: " + crop);
        plot2.style.backgroundColor = "#cc9900";
        plot2.innerHTML = crop;
    }
    if (crop == "carrot" && money >= 3) {
        money -= 3;
        var growCarrot2 = setTimeout(carrotGrow2, 54000);
        console.log("working: " + crop);
        plot2.style.backgroundColor = "#cc9900";
        plot2.innerHTML = crop;
    }
    if (crop == "potato" && money >= 1) {
        money -= 1;
        var growPotato2 = setTimeout(potatoGrow2, 36000);
        console.log("working: " + crop);
        plot2.style.backgroundColor = "#cc9900";
        plot2.innerHTML = crop;
    }
    //the functions give you the crop reset the styling of the square
    function cornGrow2() {
        corn += 1;
        plot2.style.backgroundColor = "green";
        plot2.innerHTML = "";
        numOfItems.innerHTML = "corn: " + corn + " wheat: " + wheat + " rice: " + rice + " sugar: " + sugar + " carrots: " + carrots + " potatoes: " + potatoes + " bread: " + bread + " cake: " + cake + " corn bread: " + cornBread + " carrot cake: " + carrotCake + " corn chips: " + cornChips + " sweet potatoes: " + sweetPotatoes + " sweet carrots: " + sweetCarrots;
    }

    function wheatGrow2() {
        wheat += 1;
        plot2.style.backgroundColor = "green";
        plot2.innerHTML = "";
        numOfItems.innerHTML = "corn: " + corn + " wheat: " + wheat + " rice: " + rice + " sugar: " + sugar + " carrots: " + carrots + " potatoes: " + potatoes + " bread: " + bread + " cake: " + cake + " corn bread: " + cornBread + " carrot cake: " + carrotCake + " corn chips: " + cornChips + " sweet potatoes: " + sweetPotatoes + " sweet carrots: " + sweetCarrots;
    }

    function riceGrow2() {
        rice += 1;
        plot2.style.backgroundColor = "green";
        plot2.innerHTML = "";
        numOfItems.innerHTML = "corn: " + corn + " wheat: " + wheat + " rice: " + rice + " sugar: " + sugar + " carrots: " + carrots + " potatoes: " + potatoes + " bread: " + bread + " cake: " + cake + " corn bread: " + cornBread + " carrot cake: " + carrotCake + " corn chips: " + cornChips + " sweet potatoes: " + sweetPotatoes + " sweet carrots: " + sweetCarrots;
    }

    function sugarGrow2() {
        sugar += 1;
        plot2.style.backgroundColor = "green";
        plot2.innerHTML = "";
        numOfItems.innerHTML = "corn: " + corn + " wheat: " + wheat + " rice: " + rice + " sugar: " + sugar + " carrots: " + carrots + " potatoes: " + potatoes + " bread: " + bread + " cake: " + cake + " corn bread: " + cornBread + " carrot cake: " + carrotCake + " corn chips: " + cornChips + " sweet potatoes: " + sweetPotatoes + " sweet carrots: " + sweetCarrots;
    }

    function carrotGrow2() {
        carrots += 1;
        plot2.style.backgroundColor = "green";
        plot2.innerHTML = "";
        numOfItems.innerHTML = "corn: " + corn + " wheat: " + wheat + " rice: " + rice + " sugar: " + sugar + " carrots: " + carrots + " potatoes: " + potatoes + " bread: " + bread + " cake: " + cake + " corn bread: " + cornBread + " carrot cake: " + carrotCake + " corn chips: " + cornChips + " sweet potatoes: " + sweetPotatoes + " sweet carrots: " + sweetCarrots;
    }

    function potatoGrow2() {
        potatoes += 1;
        plot2.style.backgroundColor = "green";
        plot2.innerHTML = "";
        numOfItems.innerHTML = "corn: " + corn + " wheat: " + wheat + " rice: " + rice + " sugar: " + sugar + " carrots: " + carrots + " potatoes: " + potatoes + " bread: " + bread + " cake: " + cake + " corn bread: " + cornBread + " carrot cake: " + carrotCake + " corn chips: " + cornChips + " sweet potatoes: " + sweetPotatoes + " sweet carrots: " + sweetCarrots;
    }
    farmTitle.innerHTML = "This is your farm. you have " + money + " moneys.";
};
var plantSquare3 = function () {
    //the if statements subtract from your money, set the styling to make the square look active, and set a timeOut to and call a function that will give you the crop.
    if (crop == "corn" && money >= 1) {
        money -= 1;
        var growCorn3 = setTimeout(cornGrow3, 54000);
        console.log("working: " + crop);
        plot3.style.backgroundColor = "#cc9900";
        plot3.innerHTML = crop;
    }
    if (crop == "wheat" && money >= 2) {
        money -= 2;
        var growWheat3 = setTimeout(wheatGrow3, 27000);
        console.log("working: " + crop);
        plot3.style.backgroundColor = "#cc9900";
        plot3.innerHTML = crop;
    }
    if (crop == "rice" && money >= 1.5) {
        money -= 1.5;
        var growRice3 = setTimeout(riceGrow3, 36000);
        console.log("working: " + crop);
        plot3.style.backgroundColor = "#cc9900";
        plot3.innerHTML = crop;
    }
    if (crop == "sugar" && money >= 1.5) {
        money -= 1.5;
        var growSugar3 = setTimeout(sugarGrow3, 36000);
        console.log("working: " + crop);
        plot3.style.backgroundColor = "#cc9900";
        plot3.innerHTML = crop;
    }
    if (crop == "carrot" && money >= 3) {
        money -= 3;
        var growCarrot3 = setTimeout(carrotGrow3, 54000);
        console.log("working: " + crop);
        plot3.style.backgroundColor = "#cc9900";
        plot3.innerHTML = crop;
    }
    if (crop == "potato" && money >= 1) {
        money -= 1;
        var growPotato3 = setTimeout(potatoGrow3, 36000);
        console.log("working: " + crop);
        plot3.style.backgroundColor = "#cc9900";
        plot3.innerHTML = crop;
    }
    //the functions give you the crop reset the styling of the square
    function cornGrow3() {
        corn += 1;
        plot3.style.backgroundColor = "green";
        plot3.innerHTML = "";
        numOfItems.innerHTML = "corn: " + corn + " wheat: " + wheat + " rice: " + rice + " sugar: " + sugar + " carrots: " + carrots + " potatoes: " + potatoes + " bread: " + bread + " cake: " + cake + " corn bread: " + cornBread + " carrot cake: " + carrotCake + " corn chips: " + cornChips + " sweet potatoes: " + sweetPotatoes + " sweet carrots: " + sweetCarrots;
    }

    function wheatGrow3() {
        wheat += 1;
        plot3.style.backgroundColor = "green";
        plot3.innerHTML = "";
        numOfItems.innerHTML = "corn: " + corn + " wheat: " + wheat + " rice: " + rice + " sugar: " + sugar + " carrots: " + carrots + " potatoes: " + potatoes + " bread: " + bread + " cake: " + cake + " corn bread: " + cornBread + " carrot cake: " + carrotCake + " corn chips: " + cornChips + " sweet potatoes: " + sweetPotatoes + " sweet carrots: " + sweetCarrots;
    }

    function riceGrow3() {
        rice += 1;
        plot3.style.backgroundColor = "green";
        plot3.innerHTML = "";
        numOfItems.innerHTML = "corn: " + corn + " wheat: " + wheat + " rice: " + rice + " sugar: " + sugar + " carrots: " + carrots + " potatoes: " + potatoes + " bread: " + bread + " cake: " + cake + " corn bread: " + cornBread + " carrot cake: " + carrotCake + " corn chips: " + cornChips + " sweet potatoes: " + sweetPotatoes + " sweet carrots: " + sweetCarrots;
    }

    function sugarGrow3() {
        sugar += 1;
        plot3.style.backgroundColor = "green";
        plot3.innerHTML = "";
        numOfItems.innerHTML = "corn: " + corn + " wheat: " + wheat + " rice: " + rice + " sugar: " + sugar + " carrots: " + carrots + " potatoes: " + potatoes + " bread: " + bread + " cake: " + cake + " corn bread: " + cornBread + " carrot cake: " + carrotCake + " corn chips: " + cornChips + " sweet potatoes: " + sweetPotatoes + " sweet carrots: " + sweetCarrots;
    }

    function carrotGrow3() {
        carrots += 1;
        plot3.style.backgroundColor = "green";
        plot3.innerHTML = "";
        numOfItems.innerHTML = "corn: " + corn + " wheat: " + wheat + " rice: " + rice + " sugar: " + sugar + " carrots: " + carrots + " potatoes: " + potatoes + " bread: " + bread + " cake: " + cake + " corn bread: " + cornBread + " carrot cake: " + carrotCake + " corn chips: " + cornChips + " sweet potatoes: " + sweetPotatoes + " sweet carrots: " + sweetCarrots;
    }

    function potatoGrow3() {
        potatoes += 1;
        plot3.style.backgroundColor = "green";
        plot3.innerHTML = "";
        numOfItems.innerHTML = "corn: " + corn + " wheat: " + wheat + " rice: " + rice + " sugar: " + sugar + " carrots: " + carrots + " potatoes: " + potatoes + " bread: " + bread + " cake: " + cake + " corn bread: " + cornBread + " carrot cake: " + carrotCake + " corn chips: " + cornChips + " sweet potatoes: " + sweetPotatoes + " sweet carrots: " + sweetCarrots;
    }
    farmTitle.innerHTML = "This is your farm. you have " + money + " moneys.";
};
var plantSquare4 = function () {
    //the if statements subtract from your money, set the styling to make the square look active, and set a timeOut to and call a function that will give you the crop.
    if (crop == "corn" && money >= 1) {
        money -= 1;
        var growCorn4 = setTimeout(cornGrow4, 54000);
        console.log("working: " + crop);
        plot4.style.backgroundColor = "#cc9900";
        plot4.innerHTML = crop;
    }
    if (crop == "wheat" && money >= 2) {
        money -= 2;
        var growWheat4 = setTimeout(wheatGrow4, 27000);
        console.log("working: " + crop);
        plot4.style.backgroundColor = "#cc9900";
        plot4.innerHTML = crop;
    }
    if (crop == "rice" && money >= 1.5) {
        money -= 1.5;
        var growRice4 = setTimeout(riceGrow4, 36000);
        console.log("working: " + crop);
        plot4.style.backgroundColor = "#cc9900";
        plot4.innerHTML = crop;
    }
    if (crop == "sugar" && money >= 1.5) {
        money -= 1.5;
        var growSugar4 = setTimeout(sugarGrow4, 36000);
        console.log("working: " + crop);
        plot4.style.backgroundColor = "#cc9900";
        plot4.innerHTML = crop;
    }
    if (crop == "carrot" && money >= 3) {
        money -= 3;
        var growCarrot4 = setTimeout(carrotGrow4, 54000);
        console.log("working: " + crop);
        plot4.style.backgroundColor = "#cc9900";
        plot4.innerHTML = crop;
    }
    if (crop == "potato" && money >= 1) {
        money -= 1;
        var growPotato4 = setTimeout(potatoGrow4, 36000);
        console.log("working: " + crop);
        plot4.style.backgroundColor = "#cc9900";
        plot4.innerHTML = crop;
    }
    //the functions give you the crop reset the styling of the square
    function cornGrow4() {
        corn += 1;
        plot4.style.backgroundColor = "green";
        plot4.innerHTML = "";
        numOfItems.innerHTML = "corn: " + corn + " wheat: " + wheat + " rice: " + rice + " sugar: " + sugar + " carrots: " + carrots + " potatoes: " + potatoes + " bread: " + bread + " cake: " + cake + " corn bread: " + cornBread + " carrot cake: " + carrotCake + " corn chips: " + cornChips + " sweet potatoes: " + sweetPotatoes + " sweet carrots: " + sweetCarrots;
    }

    function wheatGrow4() {
        wheat += 1;
        plot4.style.backgroundColor = "green";
        plot4.innerHTML = "";
        numOfItems.innerHTML = "corn: " + corn + " wheat: " + wheat + " rice: " + rice + " sugar: " + sugar + " carrots: " + carrots + " potatoes: " + potatoes + " bread: " + bread + " cake: " + cake + " corn bread: " + cornBread + " carrot cake: " + carrotCake + " corn chips: " + cornChips + " sweet potatoes: " + sweetPotatoes + " sweet carrots: " + sweetCarrots;
    }

    function riceGrow4() {
        rice += 1;
        plot4.style.backgroundColor = "green";
        plot4.innerHTML = "";
        numOfItems.innerHTML = "corn: " + corn + " wheat: " + wheat + " rice: " + rice + " sugar: " + sugar + " carrots: " + carrots + " potatoes: " + potatoes + " bread: " + bread + " cake: " + cake + " corn bread: " + cornBread + " carrot cake: " + carrotCake + " corn chips: " + cornChips + " sweet potatoes: " + sweetPotatoes + " sweet carrots: " + sweetCarrots;
    }

    function sugarGrow4() {
        sugar += 1;
        plot4.style.backgroundColor = "green";
        plot4.innerHTML = "";
        numOfItems.innerHTML = "corn: " + corn + " wheat: " + wheat + " rice: " + rice + " sugar: " + sugar + " carrots: " + carrots + " potatoes: " + potatoes + " bread: " + bread + " cake: " + cake + " corn bread: " + cornBread + " carrot cake: " + carrotCake + " corn chips: " + cornChips + " sweet potatoes: " + sweetPotatoes + " sweet carrots: " + sweetCarrots;
    }

    function carrotGrow4() {
        carrots += 1;
        plot4.style.backgroundColor = "green";
        plot4.innerHTML = "";
        numOfItems.innerHTML = "corn: " + corn + " wheat: " + wheat + " rice: " + rice + " sugar: " + sugar + " carrots: " + carrots + " potatoes: " + potatoes + " bread: " + bread + " cake: " + cake + " corn bread: " + cornBread + " carrot cake: " + carrotCake + " corn chips: " + cornChips + " sweet potatoes: " + sweetPotatoes + " sweet carrots: " + sweetCarrots;
    }

    function potatoGrow4() {
        potatoes += 1;
        plot4.style.backgroundColor = "green";
        plot4.innerHTML = "";
        numOfItems.innerHTML = "corn: " + corn + " wheat: " + wheat + " rice: " + rice + " sugar: " + sugar + " carrots: " + carrots + " potatoes: " + potatoes + " bread: " + bread + " cake: " + cake + " corn bread: " + cornBread + " carrot cake: " + carrotCake + " corn chips: " + cornChips + " sweet potatoes: " + sweetPotatoes + " sweet carrots: " + sweetCarrots;
    }
    farmTitle.innerHTML = "This is your farm. you have " + money + " moneys.";
};
var plantSquare5 = function () {
    //the if statements subtract from your money, set the styling to make the square look active, and set a timeOut to and call a function that will give you the crop.
    if (crop == "corn" && money >= 1) {
        money -= 1;
        var growCorn5 = setTimeout(cornGrow5, 54000);
        console.log("working: " + crop);
        plot5.style.backgroundColor = "#cc9900";
        plot5.innerHTML = crop;
    }
    if (crop == "wheat" && money >= 2) {
        money -= 2;
        var growWheat5 = setTimeout(wheatGrow5, 27000);
        console.log("working: " + crop);
        plot5.style.backgroundColor = "#cc9900";
        plot5.innerHTML = crop;
    }
    if (crop == "rice" && money >= 1.5) {
        money -= 1.5;
        var growRice5 = setTimeout(riceGrow5, 36000);
        console.log("working: " + crop);
        plot5.style.backgroundColor = "#cc9900";
        plot5.innerHTML = crop;
    }
    if (crop == "sugar" && money >= 1.5) {
        money -= 1.5;
        var growSugar5 = setTimeout(sugarGrow5, 36000);
        console.log("working: " + crop);
        plot5.style.backgroundColor = "#cc9900";
        plot5.innerHTML = crop;
    }
    if (crop == "carrot" && money >= 3) {
        money -= 3;
        var growCarrot5 = setTimeout(carrotGrow5, 54000);
        console.log("working: " + crop);
        plot5.style.backgroundColor = "#cc9900";
        plot5.innerHTML = crop;
    }
    if (crop == "potato" && money >= 1) {
        money -= 1;
        var growPotato5 = setTimeout(potatoGrow5, 36000);
        console.log("working: " + crop);
        plot5.style.backgroundColor = "#cc9900";
        plot5.innerHTML = crop;
    }
    //the functions give you the crop reset the styling of the square
    function cornGrow5() {
        corn += 1;
        plot5.style.backgroundColor = "green";
        plot5.innerHTML = "";
        numOfItems.innerHTML = "corn: " + corn + " wheat: " + wheat + " rice: " + rice + " sugar: " + sugar + " carrots: " + carrots + " potatoes: " + potatoes + " bread: " + bread + " cake: " + cake + " corn bread: " + cornBread + " carrot cake: " + carrotCake + " corn chips: " + cornChips + " sweet potatoes: " + sweetPotatoes + " sweet carrots: " + sweetCarrots;
    }

    function wheatGrow5() {
        wheat += 1;
        plot5.style.backgroundColor = "green";
        plot5.innerHTML = "";
        numOfItems.innerHTML = "corn: " + corn + " wheat: " + wheat + " rice: " + rice + " sugar: " + sugar + " carrots: " + carrots + " potatoes: " + potatoes + " bread: " + bread + " cake: " + cake + " corn bread: " + cornBread + " carrot cake: " + carrotCake + " corn chips: " + cornChips + " sweet potatoes: " + sweetPotatoes + " sweet carrots: " + sweetCarrots;
    }

    function riceGrow5() {
        rice += 1;
        plot5.style.backgroundColor = "green";
        plot5.innerHTML = "";
        numOfItems.innerHTML = "corn: " + corn + " wheat: " + wheat + " rice: " + rice + " sugar: " + sugar + " carrots: " + carrots + " potatoes: " + potatoes + " bread: " + bread + " cake: " + cake + " corn bread: " + cornBread + " carrot cake: " + carrotCake + " corn chips: " + cornChips + " sweet potatoes: " + sweetPotatoes + " sweet carrots: " + sweetCarrots;
    }

    function sugarGrow5() {
        sugar += 1;
        plot5.style.backgroundColor = "green";
        plot5.innerHTML = "";
        numOfItems.innerHTML = "corn: " + corn + " wheat: " + wheat + " rice: " + rice + " sugar: " + sugar + " carrots: " + carrots + " potatoes: " + potatoes + " bread: " + bread + " cake: " + cake + " corn bread: " + cornBread + " carrot cake: " + carrotCake + " corn chips: " + cornChips + " sweet potatoes: " + sweetPotatoes + " sweet carrots: " + sweetCarrots;
    }

    function carrotGrow5() {
        carrots += 1;
        plot5.style.backgroundColor = "green";
        plot5.innerHTML = "";
        numOfItems.innerHTML = "corn: " + corn + " wheat: " + wheat + " rice: " + rice + " sugar: " + sugar + " carrots: " + carrots + " potatoes: " + potatoes + " bread: " + bread + " cake: " + cake + " corn bread: " + cornBread + " carrot cake: " + carrotCake + " corn chips: " + cornChips + " sweet potatoes: " + sweetPotatoes + " sweet carrots: " + sweetCarrots;
    }

    function potatoGrow5() {
        potatoes += 1;
        plot5.style.backgroundColor = "green";
        plot5.innerHTML = "";
        numOfItems.innerHTML = "corn: " + corn + " wheat: " + wheat + " rice: " + rice + " sugar: " + sugar + " carrots: " + carrots + " potatoes: " + potatoes + " bread: " + bread + " cake: " + cake + " corn bread: " + cornBread + " carrot cake: " + carrotCake + " corn chips: " + cornChips + " sweet potatoes: " + sweetPotatoes + " sweet carrots: " + sweetCarrots;
    }
    farmTitle.innerHTML = "This is your farm. you have " + money + " moneys.";
};
var plantSquare6 = function () {
    //the if statements subtract from your money, set the styling to make the square look active, and set a timeOut to and call a function that will give you the crop.
    if (crop == "corn" && money >= 1) {
        money -= 1;
        var growCorn6 = setTimeout(cornGrow6, 54000);
        console.log("working: " + crop);
        plot6.style.backgroundColor = "#cc9900";
        plot6.innerHTML = crop;
    }
    if (crop == "wheat" && money >= 2) {
        money -= 2;
        var growWheat6 = setTimeout(wheatGrow6, 27000);
        console.log("working: " + crop);
        plot6.style.backgroundColor = "#cc9900";
        plot6.innerHTML = crop;
    }
    if (crop == "rice" && money >= 1.5) {
        money -= 1.5;
        var growRice6 = setTimeout(riceGrow6, 36000);
        console.log("working: " + crop);
        plot6.style.backgroundColor = "#cc9900";
        plot6.innerHTML = crop;
    }
    if (crop == "sugar" && money >= 1.5) {
        money -= 1.5;
        var growSugar6 = setTimeout(sugarGrow6, 36000);
        console.log("working: " + crop);
        plot6.style.backgroundColor = "#cc9900";
        plot6.innerHTML = crop;
    }
    if (crop == "carrot" && money >= 3) {
        money -= 3;
        var growCarrot6 = setTimeout(carrotGrow6, 54000);
        console.log("working: " + crop);
        plot6.style.backgroundColor = "#cc9900";
        plot6.innerHTML = crop;
    }
    if (crop == "potato" && money >= 1) {
        money -= 1;
        var growPotato6 = setTimeout(potatoGrow6, 36000);
        console.log("working: " + crop);
        plot6.style.backgroundColor = "#cc9900";
        plot6.innerHTML = crop;
    }
    //the functions give you the crop reset the styling of the square
    function cornGrow6() {
        corn += 1;
        plot6.style.backgroundColor = "green";
        plot6.innerHTML = "";
        numOfItems.innerHTML = "corn: " + corn + " wheat: " + wheat + " rice: " + rice + " sugar: " + sugar + " carrots: " + carrots + " potatoes: " + potatoes + " bread: " + bread + " cake: " + cake + " corn bread: " + cornBread + " carrot cake: " + carrotCake + " corn chips: " + cornChips + " sweet potatoes: " + sweetPotatoes + " sweet carrots: " + sweetCarrots;
    }

    function wheatGrow6() {
        wheat += 1;
        plot6.style.backgroundColor = "green";
        plot6.innerHTML = "";
        numOfItems.innerHTML = "corn: " + corn + " wheat: " + wheat + " rice: " + rice + " sugar: " + sugar + " carrots: " + carrots + " potatoes: " + potatoes + " bread: " + bread + " cake: " + cake + " corn bread: " + cornBread + " carrot cake: " + carrotCake + " corn chips: " + cornChips + " sweet potatoes: " + sweetPotatoes + " sweet carrots: " + sweetCarrots;
    }

    function riceGrow6() {
        rice += 1;
        plot6.style.backgroundColor = "green";
        plot6.innerHTML = "";
        numOfItems.innerHTML = "corn: " + corn + " wheat: " + wheat + " rice: " + rice + " sugar: " + sugar + " carrots: " + carrots + " potatoes: " + potatoes + " bread: " + bread + " cake: " + cake + " corn bread: " + cornBread + " carrot cake: " + carrotCake + " corn chips: " + cornChips + " sweet potatoes: " + sweetPotatoes + " sweet carrots: " + sweetCarrots;
    }

    function sugarGrow6() {
        sugar += 1;
        plot6.style.backgroundColor = "green";
        plot6.innerHTML = "";
        numOfItems.innerHTML = "corn: " + corn + " wheat: " + wheat + " rice: " + rice + " sugar: " + sugar + " carrots: " + carrots + " potatoes: " + potatoes + " bread: " + bread + " cake: " + cake + " corn bread: " + cornBread + " carrot cake: " + carrotCake + " corn chips: " + cornChips + " sweet potatoes: " + sweetPotatoes + " sweet carrots: " + sweetCarrots;
    }

    function carrotGrow6() {
        carrots += 1;
        plot6.style.backgroundColor = "green";
        plot6.innerHTML = "";
        numOfItems.innerHTML = "corn: " + corn + " wheat: " + wheat + " rice: " + rice + " sugar: " + sugar + " carrots: " + carrots + " potatoes: " + potatoes + " bread: " + bread + " cake: " + cake + " corn bread: " + cornBread + " carrot cake: " + carrotCake + " corn chips: " + cornChips + " sweet potatoes: " + sweetPotatoes + " sweet carrots: " + sweetCarrots;
    }

    function potatoGrow6() {
        potatoes += 1;
        plot6.style.backgroundColor = "green";
        plot6.innerHTML = "";
        numOfItems.innerHTML = "corn: " + corn + " wheat: " + wheat + " rice: " + rice + " sugar: " + sugar + " carrots: " + carrots + " potatoes: " + potatoes + " bread: " + bread + " cake: " + cake + " corn bread: " + cornBread + " carrot cake: " + carrotCake + " corn chips: " + cornChips + " sweet potatoes: " + sweetPotatoes + " sweet carrots: " + sweetCarrots;
    }
    farmTitle.innerHTML = "This is your farm. you have " + money + " moneys.";
};
var plantSquare7 = function () {
    //the if statements subtract from your money, set the styling to make the square look active, and set a timeOut to and call a function that will give you the crop.
    if (crop == "corn" && money >= 1) {
        money -= 1;
        var growCorn7 = setTimeout(cornGrow7, 54000);
        console.log("working: " + crop);
        plot7.style.backgroundColor = "#cc9900";
        plot7.innerHTML = crop;
    }
    if (crop == "wheat" && money >= 2) {
        money -= 2;
        var growWheat7 = setTimeout(wheatGrow7, 27000);
        console.log("working: " + crop);
        plot7.style.backgroundColor = "#cc9900";
        plot7.innerHTML = crop;
    }
    if (crop == "rice" && money >= 1.5) {
        money -= 1.5;
        var growRice7 = setTimeout(riceGrow7, 36000);
        console.log("working: " + crop);
        plot7.style.backgroundColor = "#cc9900";
        plot7.innerHTML = crop;
    }
    if (crop == "sugar" && money >= 1.5) {
        money -= 1.5;
        var growSugar7 = setTimeout(sugarGrow7, 36000);
        console.log("working: " + crop);
        plot7.style.backgroundColor = "#cc9900";
        plot7.innerHTML = crop;
    }
    if (crop == "carrot" && money >= 3) {
        money -= 3;
        var growCarrot7 = setTimeout(carrotGrow7, 54000);
        console.log("working: " + crop);
        plot7.style.backgroundColor = "#cc9900";
        plot7.innerHTML = crop;
    }
    if (crop == "potato" && money >= 1) {
        money -= 1;
        var growPotato7 = setTimeout(potatoGrow7, 36000);
        console.log("working: " + crop);
        plot7.style.backgroundColor = "#cc9900";
        plot7.innerHTML = crop;
    }
    //the functions give you the crop reset the styling of the square
    function cornGrow7() {
        corn += 1;
        plot7.style.backgroundColor = "green";
        plot7.innerHTML = "";
        numOfItems.innerHTML = "corn: " + corn + " wheat: " + wheat + " rice: " + rice + " sugar: " + sugar + " carrots: " + carrots + " potatoes: " + potatoes + " bread: " + bread + " cake: " + cake + " corn bread: " + cornBread + " carrot cake: " + carrotCake + " corn chips: " + cornChips + " sweet potatoes: " + sweetPotatoes + " sweet carrots: " + sweetCarrots;
    }

    function wheatGrow7() {
        wheat += 1;
        plot7.style.backgroundColor = "green";
        plot7.innerHTML = "";
        numOfItems.innerHTML = "corn: " + corn + " wheat: " + wheat + " rice: " + rice + " sugar: " + sugar + " carrots: " + carrots + " potatoes: " + potatoes + " bread: " + bread + " cake: " + cake + " corn bread: " + cornBread + " carrot cake: " + carrotCake + " corn chips: " + cornChips + " sweet potatoes: " + sweetPotatoes + " sweet carrots: " + sweetCarrots;
    }

    function riceGrow7() {
        rice += 1;
        plot7.style.backgroundColor = "green";
        plot7.innerHTML = "";
        numOfItems.innerHTML = "corn: " + corn + " wheat: " + wheat + " rice: " + rice + " sugar: " + sugar + " carrots: " + carrots + " potatoes: " + potatoes + " bread: " + bread + " cake: " + cake + " corn bread: " + cornBread + " carrot cake: " + carrotCake + " corn chips: " + cornChips + " sweet potatoes: " + sweetPotatoes + " sweet carrots: " + sweetCarrots;
    }

    function sugarGrow7() {
        sugar += 1;
        plot7.style.backgroundColor = "green";
        plot7.innerHTML = "";
        numOfItems.innerHTML = "corn: " + corn + " wheat: " + wheat + " rice: " + rice + " sugar: " + sugar + " carrots: " + carrots + " potatoes: " + potatoes + " bread: " + bread + " cake: " + cake + " corn bread: " + cornBread + " carrot cake: " + carrotCake + " corn chips: " + cornChips + " sweet potatoes: " + sweetPotatoes + " sweet carrots: " + sweetCarrots;
    }

    function carrotGrow7() {
        carrots += 1;
        plot7.style.backgroundColor = "green";
        plot7.innerHTML = "";
        numOfItems.innerHTML = "corn: " + corn + " wheat: " + wheat + " rice: " + rice + " sugar: " + sugar + " carrots: " + carrots + " potatoes: " + potatoes + " bread: " + bread + " cake: " + cake + " corn bread: " + cornBread + " carrot cake: " + carrotCake + " corn chips: " + cornChips + " sweet potatoes: " + sweetPotatoes + " sweet carrots: " + sweetCarrots;
    }

    function potatoGrow7() {
        potatoes += 1;
        plot7.style.backgroundColor = "green";
        plot7.innerHTML = "";
        numOfItems.innerHTML = "corn: " + corn + " wheat: " + wheat + " rice: " + rice + " sugar: " + sugar + " carrots: " + carrots + " potatoes: " + potatoes + " bread: " + bread + " cake: " + cake + " corn bread: " + cornBread + " carrot cake: " + carrotCake + " corn chips: " + cornChips + " sweet potatoes: " + sweetPotatoes + " sweet carrots: " + sweetCarrots;
    }
    farmTitle.innerHTML = "This is your farm. you have " + money + " moneys.";
};
var plantSquare8 = function () {
    //the if statements subtract from your money, set the styling to make the square look active, and set a timeOut to and call a function that will give you the crop.
    if (crop == "corn" && money >= 1) {
        money -= 1;
        var growCorn8 = setTimeout(cornGrow8, 54000);
        console.log("working: " + crop);
        plot8.style.backgroundColor = "#cc9900";
        plot8.innerHTML = crop;
    }
    if (crop == "wheat" && money >= 2) {
        money -= 2;
        var growWheat8 = setTimeout(wheatGrow8, 27000);
        console.log("working: " + crop);
        plot8.style.backgroundColor = "#cc9900";
        plot8.innerHTML = crop;
    }
    if (crop == "rice" && money >= 1.5) {
        money -= 1.5;
        var growRice8 = setTimeout(riceGrow8, 36000);
        console.log("working: " + crop);
        plot8.style.backgroundColor = "#cc9900";
        plot8.innerHTML = crop;
    }
    if (crop == "sugar" && money >= 1.5) {
        money -= 1.5;
        var growSugar8 = setTimeout(sugarGrow8, 36000);
        console.log("working: " + crop);
        plot8.style.backgroundColor = "#cc9900";
        plot8.innerHTML = crop;
    }
    if (crop == "carrot" && money >= 3) {
        money -= 3;
        var growCarrot8 = setTimeout(carrotGrow8, 54000);
        console.log("working: " + crop);
        plot8.style.backgroundColor = "#cc9900";
        plot8.innerHTML = crop;
    }
    if (crop == "potato" && money >= 1) {
        money -= 1;
        var growPotato8 = setTimeout(potatoGrow8, 36000);
        console.log("working: " + crop);
        plot8.style.backgroundColor = "#cc9900";
        plot8.innerHTML = crop;
    }
    //the functions give you the crop reset the styling of the square
    function cornGrow8() {
        corn += 1;
        plot8.style.backgroundColor = "green";
        plot8.innerHTML = "";
        numOfItems.innerHTML = "corn: " + corn + " wheat: " + wheat + " rice: " + rice + " sugar: " + sugar + " carrots: " + carrots + " potatoes: " + potatoes + " bread: " + bread + " cake: " + cake + " corn bread: " + cornBread + " carrot cake: " + carrotCake + " corn chips: " + cornChips + " sweet potatoes: " + sweetPotatoes + " sweet carrots: " + sweetCarrots;
    }

    function wheatGrow8() {
        wheat += 1;
        plot8.style.backgroundColor = "green";
        plot8.innerHTML = "";
        numOfItems.innerHTML = "corn: " + corn + " wheat: " + wheat + " rice: " + rice + " sugar: " + sugar + " carrots: " + carrots + " potatoes: " + potatoes + " bread: " + bread + " cake: " + cake + " corn bread: " + cornBread + " carrot cake: " + carrotCake + " corn chips: " + cornChips + " sweet potatoes: " + sweetPotatoes + " sweet carrots: " + sweetCarrots;
    }

    function riceGrow8() {
        rice += 1;
        plot8.style.backgroundColor = "green";
        plot8.innerHTML = "";
        numOfItems.innerHTML = "corn: " + corn + " wheat: " + wheat + " rice: " + rice + " sugar: " + sugar + " carrots: " + carrots + " potatoes: " + potatoes + " bread: " + bread + " cake: " + cake + " corn bread: " + cornBread + " carrot cake: " + carrotCake + " corn chips: " + cornChips + " sweet potatoes: " + sweetPotatoes + " sweet carrots: " + sweetCarrots;
    }

    function sugarGrow8() {
        sugar += 1;
        plot8.style.backgroundColor = "green";
        plot8.innerHTML = "";
        numOfItems.innerHTML = "corn: " + corn + " wheat: " + wheat + " rice: " + rice + " sugar: " + sugar + " carrots: " + carrots + " potatoes: " + potatoes + " bread: " + bread + " cake: " + cake + " corn bread: " + cornBread + " carrot cake: " + carrotCake + " corn chips: " + cornChips + " sweet potatoes: " + sweetPotatoes + " sweet carrots: " + sweetCarrots;
    }

    function carrotGrow8() {
        carrots += 1;
        plot8.style.backgroundColor = "green";
        plot8.innerHTML = "";
        numOfItems.innerHTML = "corn: " + corn + " wheat: " + wheat + " rice: " + rice + " sugar: " + sugar + " carrots: " + carrots + " potatoes: " + potatoes + " bread: " + bread + " cake: " + cake + " corn bread: " + cornBread + " carrot cake: " + carrotCake + " corn chips: " + cornChips + " sweet potatoes: " + sweetPotatoes + " sweet carrots: " + sweetCarrots;
    }

    function potatoGrow8() {
        potatoes += 1;
        plot8.style.backgroundColor = "green";
        plot8.innerHTML = "";
        numOfItems.innerHTML = "corn: " + corn + " wheat: " + wheat + " rice: " + rice + " sugar: " + sugar + " carrots: " + carrots + " potatoes: " + potatoes + " bread: " + bread + " cake: " + cake + " corn bread: " + cornBread + " carrot cake: " + carrotCake + " corn chips: " + cornChips + " sweet potatoes: " + sweetPotatoes + " sweet carrots: " + sweetCarrots;
    }
    farmTitle.innerHTML = "This is your farm. you have " + money + " moneys.";
};
var plantSquare9 = function () {
    //the if statements subtract from your money, set the styling to make the square look active, and set a timeOut to and call a function that will give you the crop.
    if (crop == "corn" && money >= 1) {
        money -= 1;
        var growCorn9 = setTimeout(cornGrow9, 54000);
        console.log("working: " + crop);
        plot9.style.backgroundColor = "#cc9900";
        plot9.innerHTML = crop;
    }
    if (crop == "wheat" && money >= 2) {
        money -= 2;
        var growWheat9 = setTimeout(wheatGrow9, 27000);
        console.log("working: " + crop);
        plot9.style.backgroundColor = "#cc9900";
        plot9.innerHTML = crop;
    }
    if (crop == "rice" && money >= 1.5) {
        money -= 1.5;
        var growRice9 = setTimeout(riceGrow9, 36000);
        console.log("working: " + crop);
        plot9.style.backgroundColor = "#cc9900";
        plot9.innerHTML = crop;
    }
    if (crop == "sugar" && money >= 1.5) {
        money -= 1.5;
        var growSugar9 = setTimeout(sugarGrow9, 36000);
        console.log("working: " + crop);
        plot9.style.backgroundColor = "#cc9900";
        plot9.innerHTML = crop;
    }
    if (crop == "carrot" && money >= 3) {
        money -= 3;
        var growCarrot9 = setTimeout(carrotGrow9, 54000);
        console.log("working: " + crop);
        plot9.style.backgroundColor = "#cc9900";
        plot9.innerHTML = crop;
    }
    if (crop == "potato" && money >= 1) {
        money -= 1;
        var growPotato9 = setTimeout(potatoGrow9, 36000);
        console.log("working: " + crop);
        plot9.style.backgroundColor = "#cc9900";
        plot9.innerHTML = crop;
    }
    //the functions give you the crop reset the styling of the square
    function cornGrow9() {
        corn += 1;
        plot9.style.backgroundColor = "green";
        plot9.innerHTML = "";
        numOfItems.innerHTML = "corn: " + corn + " wheat: " + wheat + " rice: " + rice + " sugar: " + sugar + " carrots: " + carrots + " potatoes: " + potatoes + " bread: " + bread + " cake: " + cake + " corn bread: " + cornBread + " carrot cake: " + carrotCake + " corn chips: " + cornChips + " sweet potatoes: " + sweetPotatoes + " sweet carrots: " + sweetCarrots;
    }

    function wheatGrow9() {
        wheat += 1;
        plot9.style.backgroundColor = "green";
        plot9.innerHTML = "";
        numOfItems.innerHTML = "corn: " + corn + " wheat: " + wheat + " rice: " + rice + " sugar: " + sugar + " carrots: " + carrots + " potatoes: " + potatoes + " bread: " + bread + " cake: " + cake + " corn bread: " + cornBread + " carrot cake: " + carrotCake + " corn chips: " + cornChips + " sweet potatoes: " + sweetPotatoes + " sweet carrots: " + sweetCarrots;
    }

    function riceGrow9() {
        rice += 1;
        plot9.style.backgroundColor = "green";
        plot9.innerHTML = "";
        numOfItems.innerHTML = "corn: " + corn + " wheat: " + wheat + " rice: " + rice + " sugar: " + sugar + " carrots: " + carrots + " potatoes: " + potatoes + " bread: " + bread + " cake: " + cake + " corn bread: " + cornBread + " carrot cake: " + carrotCake + " corn chips: " + cornChips + " sweet potatoes: " + sweetPotatoes + " sweet carrots: " + sweetCarrots;
    }

    function sugarGrow9() {
        sugar += 1;
        plot9.style.backgroundColor = "green";
        plot9.innerHTML = "";
        numOfItems.innerHTML = "corn: " + corn + " wheat: " + wheat + " rice: " + rice + " sugar: " + sugar + " carrots: " + carrots + " potatoes: " + potatoes + " bread: " + bread + " cake: " + cake + " corn bread: " + cornBread + " carrot cake: " + carrotCake + " corn chips: " + cornChips + " sweet potatoes: " + sweetPotatoes + " sweet carrots: " + sweetCarrots;
    }

    function carrotGrow9() {
        carrots += 1;
        plot9.style.backgroundColor = "green";
        plot9.innerHTML = "";
        numOfItems.innerHTML = "corn: " + corn + " wheat: " + wheat + " rice: " + rice + " sugar: " + sugar + " carrots: " + carrots + " potatoes: " + potatoes + " bread: " + bread + " cake: " + cake + " corn bread: " + cornBread + " carrot cake: " + carrotCake + " corn chips: " + cornChips + " sweet potatoes: " + sweetPotatoes + " sweet carrots: " + sweetCarrots;
    }

    function potatoGrow9() {
        potatoes += 1;
        plot9.style.backgroundColor = "green";
        plot9.innerHTML = "";
        numOfItems.innerHTML = "corn: " + corn + " wheat: " + wheat + " rice: " + rice + " sugar: " + sugar + " carrots: " + carrots + " potatoes: " + potatoes + " bread: " + bread + " cake: " + cake + " corn bread: " + cornBread + " carrot cake: " + carrotCake + " corn chips: " + cornChips + " sweet potatoes: " + sweetPotatoes + " sweet carrots: " + sweetCarrots;
    }
    farmTitle.innerHTML = "This is your farm. you have " + money + " moneys.";
};
var plantSquare10 = function () {
    //the if statements subtract from your money, set the styling to make the square look active, and set a timeOut to and call a function that will give you the crop.
    if (crop == "corn" && money >= 1) {
        money -= 1;
        var growCorn10 = setTimeout(cornGrow10, 54000);
        console.log("working: " + crop);
        plot10.style.backgroundColor = "#cc9900";
        plot10.innerHTML = crop;
    }
    if (crop == "wheat" && money >= 2) {
        money -= 2;
        var growWheat10 = setTimeout(wheatGrow10, 27000);
        console.log("working: " + crop);
        plot10.style.backgroundColor = "#cc9900";
        plot10.innerHTML = crop;
    }
    if (crop == "rice" && money >= 1.5) {
        money -= 1.5;
        var growRice10 = setTimeout(riceGrow10, 36000);
        console.log("working: " + crop);
        plot10.style.backgroundColor = "#cc9900";
        plot10.innerHTML = crop;
    }
    if (crop == "sugar" && money >= 1.5) {
        money -= 1.5;
        var growSugar10 = setTimeout(sugarGrow10, 36000);
        console.log("working: " + crop);
        plot10.style.backgroundColor = "#cc9900";
        plot10.innerHTML = crop;
    }
    if (crop == "carrot" && money >= 3) {
        money -= 3;
        var growCarrot10 = setTimeout(carrotGrow10, 54000);
        console.log("working: " + crop);
        plot10.style.backgroundColor = "#cc9900";
        plot10.innerHTML = crop;
    }
    if (crop == "potato" && money >= 1) {
        money -= 1;
        var growPotato10 = setTimeout(potatoGrow10, 36000);
        console.log("working: " + crop);
        plot10.style.backgroundColor = "#cc9900";
        plot10.innerHTML = crop;
    }
    //the functions give you the crop reset the styling of the square
    function cornGrow10() {
        corn += 1;
        plot10.style.backgroundColor = "green";
        plot10.innerHTML = "";
        numOfItems.innerHTML = "corn: " + corn + " wheat: " + wheat + " rice: " + rice + " sugar: " + sugar + " carrots: " + carrots + " potatoes: " + potatoes + " bread: " + bread + " cake: " + cake + " corn bread: " + cornBread + " carrot cake: " + carrotCake + " corn chips: " + cornChips + " sweet potatoes: " + sweetPotatoes + " sweet carrots: " + sweetCarrots;
    }

    function wheatGrow10() {
        wheat += 1;
        plot10.style.backgroundColor = "green";
        plot10.innerHTML = "";
        numOfItems.innerHTML = "corn: " + corn + " wheat: " + wheat + " rice: " + rice + " sugar: " + sugar + " carrots: " + carrots + " potatoes: " + potatoes + " bread: " + bread + " cake: " + cake + " corn bread: " + cornBread + " carrot cake: " + carrotCake + " corn chips: " + cornChips + " sweet potatoes: " + sweetPotatoes + " sweet carrots: " + sweetCarrots;
    }

    function riceGrow10() {
        rice += 1;
        plot10.style.backgroundColor = "green";
        plot10.innerHTML = "";
        numOfItems.innerHTML = "corn: " + corn + " wheat: " + wheat + " rice: " + rice + " sugar: " + sugar + " carrots: " + carrots + " potatoes: " + potatoes + " bread: " + bread + " cake: " + cake + " corn bread: " + cornBread + " carrot cake: " + carrotCake + " corn chips: " + cornChips + " sweet potatoes: " + sweetPotatoes + " sweet carrots: " + sweetCarrots;
    }

    function sugarGrow10() {
        sugar += 1;
        plot10.style.backgroundColor = "green";
        plot10.innerHTML = "";
        numOfItems.innerHTML = "corn: " + corn + " wheat: " + wheat + " rice: " + rice + " sugar: " + sugar + " carrots: " + carrots + " potatoes: " + potatoes + " bread: " + bread + " cake: " + cake + " corn bread: " + cornBread + " carrot cake: " + carrotCake + " corn chips: " + cornChips + " sweet potatoes: " + sweetPotatoes + " sweet carrots: " + sweetCarrots;
    }

    function carrotGrow10() {
        carrots += 1;
        plot10.style.backgroundColor = "green";
        plot10.innerHTML = "";
        numOfItems.innerHTML = "corn: " + corn + " wheat: " + wheat + " rice: " + rice + " sugar: " + sugar + " carrots: " + carrots + " potatoes: " + potatoes + " bread: " + bread + " cake: " + cake + " corn bread: " + cornBread + " carrot cake: " + carrotCake + " corn chips: " + cornChips + " sweet potatoes: " + sweetPotatoes + " sweet carrots: " + sweetCarrots;
    }

    function potatoGrow10() {
        potatoes += 1;
        plot10.style.backgroundColor = "green";
        plot10.innerHTML = "";
        numOfItems.innerHTML = "corn: " + corn + " wheat: " + wheat + " rice: " + rice + " sugar: " + sugar + " carrots: " + carrots + " potatoes: " + potatoes + " bread: " + bread + " cake: " + cake + " corn bread: " + cornBread + " carrot cake: " + carrotCake + " corn chips: " + cornChips + " sweet potatoes: " + sweetPotatoes + " sweet carrots: " + sweetCarrots;
    }
    farmTitle.innerHTML = "This is your farm. you have " + money + " moneys.";
};
var plantSquare11 = function () {
    //the if statements subtract from your money, set the styling to make the square look active, and set a timeOut to and call a function that will give you the crop.
    if (crop == "corn" && money >= 1) {
        money -= 1;
        var growCorn11 = setTimeout(cornGrow11, 54000);
        console.log("working: " + crop);
        plot11.style.backgroundColor = "#cc9900";
        plot11.innerHTML = crop;
    }
    if (crop == "wheat" && money >= 2) {
        money -= 2;
        var growWheat11 = setTimeout(wheatGrow11, 27000);
        console.log("working: " + crop);
        plot11.style.backgroundColor = "#cc9900";
        plot11.innerHTML = crop;
    }
    if (crop == "rice" && money >= 1.5) {
        money -= 1.5;
        var growRice11 = setTimeout(riceGrow11, 36000);
        console.log("working: " + crop);
        plot11.style.backgroundColor = "#cc9900";
        plot11.innerHTML = crop;
    }
    if (crop == "sugar" && money >= 1.5) {
        money -= 1.5;
        var growSugar11 = setTimeout(sugarGrow11, 36000);
        console.log("working: " + crop);
        plot11.style.backgroundColor = "#cc9900";
        plot11.innerHTML = crop;
    }
    if (crop == "carrot" && money >= 3) {
        money -= 3;
        var growCarrot11 = setTimeout(carrotGrow11, 54000);
        console.log("working: " + crop);
        plot11.style.backgroundColor = "#cc9900";
        plot11.innerHTML = crop;
    }
    if (crop == "potato" && money >= 1) {
        money -= 1;
        var growPotato11 = setTimeout(potatoGrow11, 36000);
        console.log("working: " + crop);
        plot11.style.backgroundColor = "#cc9900";
        plot11.innerHTML = crop;
    }
    //the functions give you the crop reset the styling of the square
    function cornGrow11() {
        corn += 1;
        plot11.style.backgroundColor = "green";
        plot11.innerHTML = "";
        numOfItems.innerHTML = "corn: " + corn + " wheat: " + wheat + " rice: " + rice + " sugar: " + sugar + " carrots: " + carrots + " potatoes: " + potatoes + " bread: " + bread + " cake: " + cake + " corn bread: " + cornBread + " carrot cake: " + carrotCake + " corn chips: " + cornChips + " sweet potatoes: " + sweetPotatoes + " sweet carrots: " + sweetCarrots;
    }

    function wheatGrow11() {
        wheat += 1;
        plot11.style.backgroundColor = "green";
        plot11.innerHTML = "";
        numOfItems.innerHTML = "corn: " + corn + " wheat: " + wheat + " rice: " + rice + " sugar: " + sugar + " carrots: " + carrots + " potatoes: " + potatoes + " bread: " + bread + " cake: " + cake + " corn bread: " + cornBread + " carrot cake: " + carrotCake + " corn chips: " + cornChips + " sweet potatoes: " + sweetPotatoes + " sweet carrots: " + sweetCarrots;
    }

    function riceGrow11() {
        rice += 1;
        plot11.style.backgroundColor = "green";
        plot11.innerHTML = "";
        numOfItems.innerHTML = "corn: " + corn + " wheat: " + wheat + " rice: " + rice + " sugar: " + sugar + " carrots: " + carrots + " potatoes: " + potatoes + " bread: " + bread + " cake: " + cake + " corn bread: " + cornBread + " carrot cake: " + carrotCake + " corn chips: " + cornChips + " sweet potatoes: " + sweetPotatoes + " sweet carrots: " + sweetCarrots;
    }

    function sugarGrow11() {
        sugar += 1;
        plot11.style.backgroundColor = "green";
        plot11.innerHTML = "";
        numOfItems.innerHTML = "corn: " + corn + " wheat: " + wheat + " rice: " + rice + " sugar: " + sugar + " carrots: " + carrots + " potatoes: " + potatoes + " bread: " + bread + " cake: " + cake + " corn bread: " + cornBread + " carrot cake: " + carrotCake + " corn chips: " + cornChips + " sweet potatoes: " + sweetPotatoes + " sweet carrots: " + sweetCarrots;
    }

    function carrotGrow11() {
        carrots += 1;
        plot11.style.backgroundColor = "green";
        plot11.innerHTML = "";
        numOfItems.innerHTML = "corn: " + corn + " wheat: " + wheat + " rice: " + rice + " sugar: " + sugar + " carrots: " + carrots + " potatoes: " + potatoes + " bread: " + bread + " cake: " + cake + " corn bread: " + cornBread + " carrot cake: " + carrotCake + " corn chips: " + cornChips + " sweet potatoes: " + sweetPotatoes + " sweet carrots: " + sweetCarrots;
    }

    function potatoGrow11() {
        potatoes += 1;
        plot11.style.backgroundColor = "green";
        plot11.innerHTML = "";
        numOfItems.innerHTML = "corn: " + corn + " wheat: " + wheat + " rice: " + rice + " sugar: " + sugar + " carrots: " + carrots + " potatoes: " + potatoes + " bread: " + bread + " cake: " + cake + " corn bread: " + cornBread + " carrot cake: " + carrotCake + " corn chips: " + cornChips + " sweet potatoes: " + sweetPotatoes + " sweet carrots: " + sweetCarrots;
    }
    farmTitle.innerHTML = "This is your farm. you have " + money + " moneys.";
};
var plantSquare12 = function () {
    //the if statements subtract from your money, set the styling to make the square look active, and set a timeOut to and call a function that will give you the crop.
    if (crop == "corn" && money >= 1) {
        money -= 1;
        var growCorn12 = setTimeout(cornGrow12, 54000);
        console.log("working: " + crop);
        plot12.style.backgroundColor = "#cc9900";
        plot12.innerHTML = crop;
    }
    if (crop == "wheat" && money >= 2) {
        money -= 2;
        var growWheat12 = setTimeout(wheatGrow12, 27000);
        console.log("working: " + crop);
        plot12.style.backgroundColor = "#cc9900";
        plot12.innerHTML = crop;
    }
    if (crop == "rice" && money >= 1.5) {
        money -= 1.5;
        var growRice12 = setTimeout(riceGrow12, 36000);
        console.log("working: " + crop);
        plot12.style.backgroundColor = "#cc9900";
        plot12.innerHTML = crop;
    }
    if (crop == "sugar" && money >= 1.5) {
        money -= 1.5;
        var growSugar12 = setTimeout(sugarGrow12, 36000);
        console.log("working: " + crop);
        plot12.style.backgroundColor = "#cc9900";
        plot12.innerHTML = crop;
    }
    if (crop == "carrot" && money >= 3) {
        money -= 3;
        var growCarrot12 = setTimeout(carrotGrow12, 54000);
        console.log("working: " + crop);
        plot12.style.backgroundColor = "#cc9900";
        plot12.innerHTML = crop;
    }
    if (crop == "potato" && money >= 1) {
        money -= 1;
        var growPotato12 = setTimeout(potatoGrow12, 36000);
        console.log("working: " + crop);
        plot12.style.backgroundColor = "#cc9900";
        plot12.innerHTML = crop;
    }
    //the functions give you the crop reset the styling of the square
    function cornGrow12() {
        corn += 1;
        plot12.style.backgroundColor = "green";
        plot12.innerHTML = "";
        numOfItems.innerHTML = "corn: " + corn + " wheat: " + wheat + " rice: " + rice + " sugar: " + sugar + " carrots: " + carrots + " potatoes: " + potatoes + " bread: " + bread + " cake: " + cake + " corn bread: " + cornBread + " carrot cake: " + carrotCake + " corn chips: " + cornChips + " sweet potatoes: " + sweetPotatoes + " sweet carrots: " + sweetCarrots;
    }

    function wheatGrow12() {
        wheat += 1;
        plot12.style.backgroundColor = "green";
        plot12.innerHTML = "";
        numOfItems.innerHTML = "corn: " + corn + " wheat: " + wheat + " rice: " + rice + " sugar: " + sugar + " carrots: " + carrots + " potatoes: " + potatoes + " bread: " + bread + " cake: " + cake + " corn bread: " + cornBread + " carrot cake: " + carrotCake + " corn chips: " + cornChips + " sweet potatoes: " + sweetPotatoes + " sweet carrots: " + sweetCarrots;
    }

    function riceGrow12() {
        rice += 1;
        plot12.style.backgroundColor = "green";
        plot12.innerHTML = "";
        numOfItems.innerHTML = "corn: " + corn + " wheat: " + wheat + " rice: " + rice + " sugar: " + sugar + " carrots: " + carrots + " potatoes: " + potatoes + " bread: " + bread + " cake: " + cake + " corn bread: " + cornBread + " carrot cake: " + carrotCake + " corn chips: " + cornChips + " sweet potatoes: " + sweetPotatoes + " sweet carrots: " + sweetCarrots;
    }

    function sugarGrow12() {
        sugar += 1;
        plot12.style.backgroundColor = "green";
        plot12.innerHTML = "";
        numOfItems.innerHTML = "corn: " + corn + " wheat: " + wheat + " rice: " + rice + " sugar: " + sugar + " carrots: " + carrots + " potatoes: " + potatoes + " bread: " + bread + " cake: " + cake + " corn bread: " + cornBread + " carrot cake: " + carrotCake + " corn chips: " + cornChips + " sweet potatoes: " + sweetPotatoes + " sweet carrots: " + sweetCarrots;
    }

    function carrotGrow12() {
        carrots += 1;
        plot12.style.backgroundColor = "green";
        plot12.innerHTML = "";
        numOfItems.innerHTML = "corn: " + corn + " wheat: " + wheat + " rice: " + rice + " sugar: " + sugar + " carrots: " + carrots + " potatoes: " + potatoes + " bread: " + bread + " cake: " + cake + " corn bread: " + cornBread + " carrot cake: " + carrotCake + " corn chips: " + cornChips + " sweet potatoes: " + sweetPotatoes + " sweet carrots: " + sweetCarrots;
    }

    function potatoGrow12() {
        potatoes += 1;
        plot12.style.backgroundColor = "green";
        plot12.innerHTML = "";
        numOfItems.innerHTML = "corn: " + corn + " wheat: " + wheat + " rice: " + rice + " sugar: " + sugar + " carrots: " + carrots + " potatoes: " + potatoes + " bread: " + bread + " cake: " + cake + " corn bread: " + cornBread + " carrot cake: " + carrotCake + " corn chips: " + cornChips + " sweet potatoes: " + sweetPotatoes + " sweet carrots: " + sweetCarrots;
    }
    farmTitle.innerHTML = "This is your farm. you have " + money + " moneys.";
};
var plantSquare13 = function () {
    //the if statements subtract from your money, set the styling to make the square look active, and set a timeOut to and call a function that will give you the crop.
    if (crop == "corn" && money >= 1) {
        money -= 1;
        var growCorn13 = setTimeout(cornGrow13, 54000);
        console.log("working: " + crop);
        plot13.style.backgroundColor = "#cc9900";
        plot13.innerHTML = crop;
    }
    if (crop == "wheat" && money >= 2) {
        money -= 2;
        var growWheat13 = setTimeout(wheatGrow13, 27000);
        console.log("working: " + crop);
        plot13.style.backgroundColor = "#cc9900";
        plot13.innerHTML = crop;
    }
    if (crop == "rice" && money >= 1.5) {
        money -= 1.5;
        var growRice13 = setTimeout(riceGrow13, 36000);
        console.log("working: " + crop);
        plot13.style.backgroundColor = "#cc9900";
        plot13.innerHTML = crop;
    }
    if (crop == "sugar" && money >= 1.5) {
        money -= 1.5;
        var growSugar13 = setTimeout(sugarGrow13, 36000);
        console.log("working: " + crop);
        plot13.style.backgroundColor = "#cc9900";
        plot13.innerHTML = crop;
    }
    if (crop == "carrot" && money >= 3) {
        money -= 3;
        var growCarrot13 = setTimeout(carrotGrow13, 54000);
        console.log("working: " + crop);
        plot13.style.backgroundColor = "#cc9900";
        plot13.innerHTML = crop;
    }
    if (crop == "potato" && money >= 1) {
        money -= 1;
        var growPotato13 = setTimeout(potatoGrow13, 36000);
        console.log("working: " + crop);
        plot13.style.backgroundColor = "#cc9900";
        plot13.innerHTML = crop;
    }
    //the functions give you the crop reset the styling of the square
    function cornGrow13() {
        corn += 1;
        plot13.style.backgroundColor = "green";
        plot13.innerHTML = "";
        numOfItems.innerHTML = "corn: " + corn + " wheat: " + wheat + " rice: " + rice + " sugar: " + sugar + " carrots: " + carrots + " potatoes: " + potatoes + " bread: " + bread + " cake: " + cake + " corn bread: " + cornBread + " carrot cake: " + carrotCake + " corn chips: " + cornChips + " sweet potatoes: " + sweetPotatoes + " sweet carrots: " + sweetCarrots;
    }

    function wheatGrow13() {
        wheat += 1;
        plot13.style.backgroundColor = "green";
        plot13.innerHTML = "";
        numOfItems.innerHTML = "corn: " + corn + " wheat: " + wheat + " rice: " + rice + " sugar: " + sugar + " carrots: " + carrots + " potatoes: " + potatoes + " bread: " + bread + " cake: " + cake + " corn bread: " + cornBread + " carrot cake: " + carrotCake + " corn chips: " + cornChips + " sweet potatoes: " + sweetPotatoes + " sweet carrots: " + sweetCarrots;
    }

    function riceGrow13() {
        rice += 1;
        plot13.style.backgroundColor = "green";
        plot13.innerHTML = "";
        numOfItems.innerHTML = "corn: " + corn + " wheat: " + wheat + " rice: " + rice + " sugar: " + sugar + " carrots: " + carrots + " potatoes: " + potatoes + " bread: " + bread + " cake: " + cake + " corn bread: " + cornBread + " carrot cake: " + carrotCake + " corn chips: " + cornChips + " sweet potatoes: " + sweetPotatoes + " sweet carrots: " + sweetCarrots;
    }

    function sugarGrow13() {
        sugar += 1;
        plot13.style.backgroundColor = "green";
        plot13.innerHTML = "";
        numOfItems.innerHTML = "corn: " + corn + " wheat: " + wheat + " rice: " + rice + " sugar: " + sugar + " carrots: " + carrots + " potatoes: " + potatoes + " bread: " + bread + " cake: " + cake + " corn bread: " + cornBread + " carrot cake: " + carrotCake + " corn chips: " + cornChips + " sweet potatoes: " + sweetPotatoes + " sweet carrots: " + sweetCarrots;
    }

    function carrotGrow13() {
        carrots += 1;
        plot13.style.backgroundColor = "green";
        plot13.innerHTML = "";
        numOfItems.innerHTML = "corn: " + corn + " wheat: " + wheat + " rice: " + rice + " sugar: " + sugar + " carrots: " + carrots + " potatoes: " + potatoes + " bread: " + bread + " cake: " + cake + " corn bread: " + cornBread + " carrot cake: " + carrotCake + " corn chips: " + cornChips + " sweet potatoes: " + sweetPotatoes + " sweet carrots: " + sweetCarrots;
    }

    function potatoGrow13() {
        potatoes += 1;
        plot13.style.backgroundColor = "green";
        plot13.innerHTML = "";
        numOfItems.innerHTML = "corn: " + corn + " wheat: " + wheat + " rice: " + rice + " sugar: " + sugar + " carrots: " + carrots + " potatoes: " + potatoes + " bread: " + bread + " cake: " + cake + " corn bread: " + cornBread + " carrot cake: " + carrotCake + " corn chips: " + cornChips + " sweet potatoes: " + sweetPotatoes + " sweet carrots: " + sweetCarrots;
    }
    farmTitle.innerHTML = "This is your farm. you have " + money + " moneys.";
};
var plantSquare14 = function () {
    //the if statements subtract from your money, set the styling to make the square look active, and set a timeOut to and call a function that will give you the crop.
    if (crop == "corn" && money >= 1) {
        money -= 1;
        var growCorn14 = setTimeout(cornGrow14, 54000);
        console.log("working: " + crop);
        plot14.style.backgroundColor = "#cc9900";
        plot14.innerHTML = crop;
    }
    if (crop == "wheat" && money >= 2) {
        money -= 2;
        var growWheat14 = setTimeout(wheatGrow14, 27000);
        console.log("working: " + crop);
        plot14.style.backgroundColor = "#cc9900";
        plot14.innerHTML = crop;
    }
    if (crop == "rice" && money >= 1.5) {
        money -= 1.5;
        var growRice14 = setTimeout(riceGrow14, 36000);
        console.log("working: " + crop);
        plot14.style.backgroundColor = "#cc9900";
        plot14.innerHTML = crop;
    }
    if (crop == "sugar" && money >= 1.5) {
        money -= 1.5;
        var growSugar14 = setTimeout(sugarGrow14, 36000);
        console.log("working: " + crop);
        plot14.style.backgroundColor = "#cc9900";
        plot14.innerHTML = crop;
    }
    if (crop == "carrot" && money >= 3) {
        money -= 3;
        var growCarrot14 = setTimeout(carrotGrow14, 54000);
        console.log("working: " + crop);
        plot14.style.backgroundColor = "#cc9900";
        plot14.innerHTML = crop;
    }
    if (crop == "potato" && money >= 1) {
        money -= 1;
        var growPotato14 = setTimeout(potatoGrow14, 36000);
        console.log("working: " + crop);
        plot14.style.backgroundColor = "#cc9900";
        plot14.innerHTML = crop;
    }
    //the functions give you the crop reset the styling of the square
    function cornGrow14() {
        corn += 1;
        plot14.style.backgroundColor = "green";
        plot14.innerHTML = "";
        numOfItems.innerHTML = "corn: " + corn + " wheat: " + wheat + " rice: " + rice + " sugar: " + sugar + " carrots: " + carrots + " potatoes: " + potatoes + " bread: " + bread + " cake: " + cake + " corn bread: " + cornBread + " carrot cake: " + carrotCake + " corn chips: " + cornChips + " sweet potatoes: " + sweetPotatoes + " sweet carrots: " + sweetCarrots;
    }

    function wheatGrow14() {
        wheat += 1;
        plot14.style.backgroundColor = "green";
        plot14.innerHTML = "";
        numOfItems.innerHTML = "corn: " + corn + " wheat: " + wheat + " rice: " + rice + " sugar: " + sugar + " carrots: " + carrots + " potatoes: " + potatoes + " bread: " + bread + " cake: " + cake + " corn bread: " + cornBread + " carrot cake: " + carrotCake + " corn chips: " + cornChips + " sweet potatoes: " + sweetPotatoes + " sweet carrots: " + sweetCarrots;
    }

    function riceGrow14() {
        rice += 1;
        plot14.style.backgroundColor = "green";
        plot14.innerHTML = "";
        numOfItems.innerHTML = "corn: " + corn + " wheat: " + wheat + " rice: " + rice + " sugar: " + sugar + " carrots: " + carrots + " potatoes: " + potatoes + " bread: " + bread + " cake: " + cake + " corn bread: " + cornBread + " carrot cake: " + carrotCake + " corn chips: " + cornChips + " sweet potatoes: " + sweetPotatoes + " sweet carrots: " + sweetCarrots;
    }

    function sugarGrow14() {
        sugar += 1;
        plot14.style.backgroundColor = "green";
        plot14.innerHTML = "";
        numOfItems.innerHTML = "corn: " + corn + " wheat: " + wheat + " rice: " + rice + " sugar: " + sugar + " carrots: " + carrots + " potatoes: " + potatoes + " bread: " + bread + " cake: " + cake + " corn bread: " + cornBread + " carrot cake: " + carrotCake + " corn chips: " + cornChips + " sweet potatoes: " + sweetPotatoes + " sweet carrots: " + sweetCarrots;
    }

    function carrotGrow14() {
        carrots += 1;
        plot14.style.backgroundColor = "green";
        plot14.innerHTML = "";
        numOfItems.innerHTML = "corn: " + corn + " wheat: " + wheat + " rice: " + rice + " sugar: " + sugar + " carrots: " + carrots + " potatoes: " + potatoes + " bread: " + bread + " cake: " + cake + " corn bread: " + cornBread + " carrot cake: " + carrotCake + " corn chips: " + cornChips + " sweet potatoes: " + sweetPotatoes + " sweet carrots: " + sweetCarrots;
    }

    function potatoGrow14() {
        potatoes += 1;
        plot14.style.backgroundColor = "green";
        plot14.innerHTML = "";
        numOfItems.innerHTML = "corn: " + corn + " wheat: " + wheat + " rice: " + rice + " sugar: " + sugar + " carrots: " + carrots + " potatoes: " + potatoes + " bread: " + bread + " cake: " + cake + " corn bread: " + cornBread + " carrot cake: " + carrotCake + " corn chips: " + cornChips + " sweet potatoes: " + sweetPotatoes + " sweet carrots: " + sweetCarrots;
    }
    farmTitle.innerHTML = "This is your farm. you have " + money + " moneys.";
};
var plantSquare15 = function () {
    //the if statements subtract from your money, set the styling to make the square look active, and set a timeOut to and call a function that will give you the crop.
    if (crop == "corn" && money >= 1) {
        money -= 1;
        var growCorn15 = setTimeout(cornGrow15, 54000);
        console.log("working: " + crop);
        plot15.style.backgroundColor = "#cc9900";
        plot15.innerHTML = crop;
    }
    if (crop == "wheat" && money >= 2) {
        money -= 2;
        var growWheat15 = setTimeout(wheatGrow15, 27000);
        console.log("working: " + crop);
        plot15.style.backgroundColor = "#cc9900";
        plot15.innerHTML = crop;
    }
    if (crop == "rice" && money >= 1.5) {
        money -= 1.5;
        var growRice15 = setTimeout(riceGrow15, 36000);
        console.log("working: " + crop);
        plot15.style.backgroundColor = "#cc9900";
        plot15.innerHTML = crop;
    }
    if (crop == "sugar" && money >= 1.5) {
        money -= 1.5;
        var growSugar15 = setTimeout(sugarGrow15, 36000);
        console.log("working: " + crop);
        plot15.style.backgroundColor = "#cc9900";
        plot15.innerHTML = crop;
    }
    if (crop == "carrot" && money >= 3) {
        money -= 3;
        var growCarrot15 = setTimeout(carrotGrow15, 54000);
        console.log("working: " + crop);
        plot15.style.backgroundColor = "#cc9900";
        plot15.innerHTML = crop;
    }
    if (crop == "potato" && money >= 1) {
        money -= 1;
        var growPotato15 = setTimeout(potatoGrow15, 36000);
        console.log("working: " + crop);
        plot15.style.backgroundColor = "#cc9900";
        plot15.innerHTML = crop;
    }
    //the functions give you the crop reset the styling of the square
    function cornGrow15() {
        corn += 1;
        plot15.style.backgroundColor = "green";
        plot15.innerHTML = "";
        numOfItems.innerHTML = "corn: " + corn + " wheat: " + wheat + " rice: " + rice + " sugar: " + sugar + " carrots: " + carrots + " potatoes: " + potatoes + " bread: " + bread + " cake: " + cake + " corn bread: " + cornBread + " carrot cake: " + carrotCake + " corn chips: " + cornChips + " sweet potatoes: " + sweetPotatoes + " sweet carrots: " + sweetCarrots;
    }

    function wheatGrow15() {
        wheat += 1;
        plot15.style.backgroundColor = "green";
        plot15.innerHTML = "";
        numOfItems.innerHTML = "corn: " + corn + " wheat: " + wheat + " rice: " + rice + " sugar: " + sugar + " carrots: " + carrots + " potatoes: " + potatoes + " bread: " + bread + " cake: " + cake + " corn bread: " + cornBread + " carrot cake: " + carrotCake + " corn chips: " + cornChips + " sweet potatoes: " + sweetPotatoes + " sweet carrots: " + sweetCarrots;
    }

    function riceGrow15() {
        rice += 1;
        plot15.style.backgroundColor = "green";
        plot15.innerHTML = "";
        numOfItems.innerHTML = "corn: " + corn + " wheat: " + wheat + " rice: " + rice + " sugar: " + sugar + " carrots: " + carrots + " potatoes: " + potatoes + " bread: " + bread + " cake: " + cake + " corn bread: " + cornBread + " carrot cake: " + carrotCake + " corn chips: " + cornChips + " sweet potatoes: " + sweetPotatoes + " sweet carrots: " + sweetCarrots;
    }

    function sugarGrow15() {
        sugar += 1;
        plot15.style.backgroundColor = "green";
        plot15.innerHTML = "";
        numOfItems.innerHTML = "corn: " + corn + " wheat: " + wheat + " rice: " + rice + " sugar: " + sugar + " carrots: " + carrots + " potatoes: " + potatoes + " bread: " + bread + " cake: " + cake + " corn bread: " + cornBread + " carrot cake: " + carrotCake + " corn chips: " + cornChips + " sweet potatoes: " + sweetPotatoes + " sweet carrots: " + sweetCarrots;
    }

    function carrotGrow15() {
        carrots += 1;
        plot15.style.backgroundColor = "green";
        plot15.innerHTML = "";
        numOfItems.innerHTML = "corn: " + corn + " wheat: " + wheat + " rice: " + rice + " sugar: " + sugar + " carrots: " + carrots + " potatoes: " + potatoes + " bread: " + bread + " cake: " + cake + " corn bread: " + cornBread + " carrot cake: " + carrotCake + " corn chips: " + cornChips + " sweet potatoes: " + sweetPotatoes + " sweet carrots: " + sweetCarrots;
    }

    function potatoGrow15() {
        potatoes += 1;
        plot15.style.backgroundColor = "green";
        plot15.innerHTML = "";
        numOfItems.innerHTML = "corn: " + corn + " wheat: " + wheat + " rice: " + rice + " sugar: " + sugar + " carrots: " + carrots + " potatoes: " + potatoes + " bread: " + bread + " cake: " + cake + " corn bread: " + cornBread + " carrot cake: " + carrotCake + " corn chips: " + cornChips + " sweet potatoes: " + sweetPotatoes + " sweet carrots: " + sweetCarrots;
    }
    farmTitle.innerHTML = "This is your farm. you have " + money + " moneys.";
};
var plantSquare16 = function () {
    //the if statements subtract from your money, set the styling to make the square look active, and set a timeOut to and call a function that will give you the crop.
    if (crop == "corn" && money >= 1) {
        money -= 1;
        var growCorn16 = setTimeout(cornGrow16, 54000);
        console.log("working: " + crop);
        plot16.style.backgroundColor = "#cc9900";
        plot16.innerHTML = crop;
    }
    if (crop == "wheat" && money >= 2) {
        money -= 2;
        var growWheat16 = setTimeout(wheatGrow16, 27000);
        console.log("working: " + crop);
        plot16.style.backgroundColor = "#cc9900";
        plot16.innerHTML = crop;
    }
    if (crop == "rice" && money >= 1.5) {
        money -= 1.5;
        var growRice16 = setTimeout(riceGrow16, 36000);
        console.log("working: " + crop);
        plot16.style.backgroundColor = "#cc9900";
        plot16.innerHTML = crop;
    }
    if (crop == "sugar" && money >= 1.5) {
        money -= 1.5;
        var growSugar16 = setTimeout(sugarGrow16, 36000);
        console.log("working: " + crop);
        plot16.style.backgroundColor = "#cc9900";
        plot16.innerHTML = crop;
    }
    if (crop == "carrot" && money >= 3) {
        money -= 3;
        var growCarrot16 = setTimeout(carrotGrow16, 54000);
        console.log("working: " + crop);
        plot16.style.backgroundColor = "#cc9900";
        plot16.innerHTML = crop;
    }
    if (crop == "potato" && money >= 1) {
        money -= 1;
        var growPotato16 = setTimeout(potatoGrow16, 36000);
        console.log("working: " + crop);
        plot16.style.backgroundColor = "#cc9900";
        plot16.innerHTML = crop;
    }
    //the functions give you the crop reset the styling of the square
    function cornGrow16() {
        corn += 1;
        plot16.style.backgroundColor = "green";
        plot16.innerHTML = "";
        numOfItems.innerHTML = "corn: " + corn + " wheat: " + wheat + " rice: " + rice + " sugar: " + sugar + " carrots: " + carrots + " potatoes: " + potatoes + " bread: " + bread + " cake: " + cake + " corn bread: " + cornBread + " carrot cake: " + carrotCake + " corn chips: " + cornChips + " sweet potatoes: " + sweetPotatoes + " sweet carrots: " + sweetCarrots;
    }

    function wheatGrow16() {
        wheat += 1;
        plot16.style.backgroundColor = "green";
        plot16.innerHTML = "";
        numOfItems.innerHTML = "corn: " + corn + " wheat: " + wheat + " rice: " + rice + " sugar: " + sugar + " carrots: " + carrots + " potatoes: " + potatoes + " bread: " + bread + " cake: " + cake + " corn bread: " + cornBread + " carrot cake: " + carrotCake + " corn chips: " + cornChips + " sweet potatoes: " + sweetPotatoes + " sweet carrots: " + sweetCarrots;
    }

    function riceGrow16() {
        rice += 1;
        plot16.style.backgroundColor = "green";
        plot16.innerHTML = "";
        numOfItems.innerHTML = "corn: " + corn + " wheat: " + wheat + " rice: " + rice + " sugar: " + sugar + " carrots: " + carrots + " potatoes: " + potatoes + " bread: " + bread + " cake: " + cake + " corn bread: " + cornBread + " carrot cake: " + carrotCake + " corn chips: " + cornChips + " sweet potatoes: " + sweetPotatoes + " sweet carrots: " + sweetCarrots;
    }

    function sugarGrow16() {
        sugar += 1;
        plot16.style.backgroundColor = "green";
        plot16.innerHTML = "";
        numOfItems.innerHTML = "corn: " + corn + " wheat: " + wheat + " rice: " + rice + " sugar: " + sugar + " carrots: " + carrots + " potatoes: " + potatoes + " bread: " + bread + " cake: " + cake + " corn bread: " + cornBread + " carrot cake: " + carrotCake + " corn chips: " + cornChips + " sweet potatoes: " + sweetPotatoes + " sweet carrots: " + sweetCarrots;
    }

    function carrotGrow16() {
        carrots += 1;
        plot16.style.backgroundColor = "green";
        plot16.innerHTML = "";
        numOfItems.innerHTML = "corn: " + corn + " wheat: " + wheat + " rice: " + rice + " sugar: " + sugar + " carrots: " + carrots + " potatoes: " + potatoes + " bread: " + bread + " cake: " + cake + " corn bread: " + cornBread + " carrot cake: " + carrotCake + " corn chips: " + cornChips + " sweet potatoes: " + sweetPotatoes + " sweet carrots: " + sweetCarrots;
    }

    function potatoGrow16() {
        potatoes += 1;
        plot16.style.backgroundColor = "green";
        plot16.innerHTML = "";
        numOfItems.innerHTML = "corn: " + corn + " wheat: " + wheat + " rice: " + rice + " sugar: " + sugar + " carrots: " + carrots + " potatoes: " + potatoes + " bread: " + bread + " cake: " + cake + " corn bread: " + cornBread + " carrot cake: " + carrotCake + " corn chips: " + cornChips + " sweet potatoes: " + sweetPotatoes + " sweet carrots: " + sweetCarrots;
    }
    farmTitle.innerHTML = "This is your farm. you have " + money + " moneys.";
};

var plantSquare17 = function () {
    //the if statements subtract from your money, set the styling to make the square look active, and set a timeOut to and call a function that will give you the crop.
    if (crop == "corn" && money >= 1) {
        money -= 1;
        var growCorn17 = setTimeout(cornGrow17, 54000);
        console.log("working: " + crop);
        plot17.style.backgroundColor = "#cc9900";
        plot17.innerHTML = crop;
    }
    if (crop == "wheat" && money >= 2) {
        money -= 2;
        var growWheat17 = setTimeout(wheatGrow17, 27000);
        console.log("working: " + crop);
        plot17.style.backgroundColor = "#cc9900";
        plot17.innerHTML = crop;
    }
    if (crop == "rice" && money >= 1.5) {
        money -= 1.5;
        var growRice17 = setTimeout(riceGrow17, 36000);
        console.log("working: " + crop);
        plot17.style.backgroundColor = "#cc9900";
        plot17.innerHTML = crop;
    }
    if (crop == "sugar" && money >= 1.5) {
        money -= 1.5;
        var growSugar17 = setTimeout(sugarGrow17, 36000);
        console.log("working: " + crop);
        plot17.style.backgroundColor = "#cc9900";
        plot17.innerHTML = crop;
    }
    if (crop == "carrot" && money >= 3) {
        money -= 3;
        var growCarrot17 = setTimeout(carrotGrow17, 54000);
        console.log("working: " + crop);
        plot17.style.backgroundColor = "#cc9900";
        plot17.innerHTML = crop;
    }
    if (crop == "potato" && money >= 1) {
        money -= 1;
        var growPotato17 = setTimeout(potatoGrow17, 36000);
        console.log("working: " + crop);
        plot17.style.backgroundColor = "#cc9900";
        plot17.innerHTML = crop;
    }
    //the functions give you the crop reset the styling of the square
    function cornGrow17() {
        corn += 1;
        plot17.style.backgroundColor = "green";
        plot17.innerHTML = "";
        numOfItems.innerHTML = "corn: " + corn + " wheat: " + wheat + " rice: " + rice + " sugar: " + sugar + " carrots: " + carrots + " potatoes: " + potatoes + " bread: " + bread + " cake: " + cake + " corn bread: " + cornBread + " carrot cake: " + carrotCake + " corn chips: " + cornChips + " sweet potatoes: " + sweetPotatoes + " sweet carrots: " + sweetCarrots;
    }

    function wheatGrow17() {
        wheat += 1;
        plot17.style.backgroundColor = "green";
        plot17.innerHTML = "";
        numOfItems.innerHTML = "corn: " + corn + " wheat: " + wheat + " rice: " + rice + " sugar: " + sugar + " carrots: " + carrots + " potatoes: " + potatoes + " bread: " + bread + " cake: " + cake + " corn bread: " + cornBread + " carrot cake: " + carrotCake + " corn chips: " + cornChips + " sweet potatoes: " + sweetPotatoes + " sweet carrots: " + sweetCarrots;
    }

    function riceGrow17() {
        rice += 1;
        plot17.style.backgroundColor = "green";
        plot17.innerHTML = "";
        numOfItems.innerHTML = "corn: " + corn + " wheat: " + wheat + " rice: " + rice + " sugar: " + sugar + " carrots: " + carrots + " potatoes: " + potatoes + " bread: " + bread + " cake: " + cake + " corn bread: " + cornBread + " carrot cake: " + carrotCake + " corn chips: " + cornChips + " sweet potatoes: " + sweetPotatoes + " sweet carrots: " + sweetCarrots;
    }

    function sugarGrow17() {
        sugar += 1;
        plot17.style.backgroundColor = "green";
        plot17.innerHTML = "";
        numOfItems.innerHTML = "corn: " + corn + " wheat: " + wheat + " rice: " + rice + " sugar: " + sugar + " carrots: " + carrots + " potatoes: " + potatoes + " bread: " + bread + " cake: " + cake + " corn bread: " + cornBread + " carrot cake: " + carrotCake + " corn chips: " + cornChips + " sweet potatoes: " + sweetPotatoes + " sweet carrots: " + sweetCarrots;
    }

    function carrotGrow17() {
        carrots += 1;
        plot17.style.backgroundColor = "green";
        plot17.innerHTML = "";
        numOfItems.innerHTML = "corn: " + corn + " wheat: " + wheat + " rice: " + rice + " sugar: " + sugar + " carrots: " + carrots + " potatoes: " + potatoes + " bread: " + bread + " cake: " + cake + " corn bread: " + cornBread + " carrot cake: " + carrotCake + " corn chips: " + cornChips + " sweet potatoes: " + sweetPotatoes + " sweet carrots: " + sweetCarrots;
    }

    function potatoGrow17() {
        potatoes += 1;
        plot17.style.backgroundColor = "green";
        plot17.innerHTML = "";
        numOfItems.innerHTML = "corn: " + corn + " wheat: " + wheat + " rice: " + rice + " sugar: " + sugar + " carrots: " + carrots + " potatoes: " + potatoes + " bread: " + bread + " cake: " + cake + " corn bread: " + cornBread + " carrot cake: " + carrotCake + " corn chips: " + cornChips + " sweet potatoes: " + sweetPotatoes + " sweet carrots: " + sweetCarrots;
    }
    farmTitle.innerHTML = "This is your farm. you have " + money + " moneys.";
};
var plantSquare18 = function () {
    //the if statements subtract from your money, set the styling to make the square look active, and set a timeOut to and call a function that will give you the crop.
    if (crop == "corn" && money >= 1) {
        money -= 1;
        var growCorn18 = setTimeout(cornGrow18, 54000);
        console.log("working: " + crop);
        plot18.style.backgroundColor = "#cc9900";
        plot18.innerHTML = crop;
    }
    if (crop == "wheat" && money >= 2) {
        money -= 2;
        var growWheat18 = setTimeout(wheatGrow18, 27000);
        console.log("working: " + crop);
        plot18.style.backgroundColor = "#cc9900";
        plot18.innerHTML = crop;
    }
    if (crop == "rice" && money >= 1.5) {
        money -= 1.5;
        var growRice18 = setTimeout(riceGrow18, 36000);
        console.log("working: " + crop);
        plot18.style.backgroundColor = "#cc9900";
        plot18.innerHTML = crop;
    }
    if (crop == "sugar" && money >= 1.5) {
        money -= 1.5;
        var growSugar18 = setTimeout(sugarGrow18, 36000);
        console.log("working: " + crop);
        plot18.style.backgroundColor = "#cc9900";
        plot18.innerHTML = crop;
    }
    if (crop == "carrot" && money >= 3) {
        money -= 3;
        var growCarrot18 = setTimeout(carrotGrow18, 54000);
        console.log("working: " + crop);
        plot18.style.backgroundColor = "#cc9900";
        plot18.innerHTML = crop;
    }
    if (crop == "potato" && money >= 1) {
        money -= 1;
        var growPotato18 = setTimeout(potatoGrow18, 36000);
        console.log("working: " + crop);
        plot18.style.backgroundColor = "#cc9900";
        plot18.innerHTML = crop;
    }
    //the functions give you the crop reset the styling of the square
    function cornGrow18() {
        corn += 1;
        plot18.style.backgroundColor = "green";
        plot18.innerHTML = "";
        numOfItems.innerHTML = "corn: " + corn + " wheat: " + wheat + " rice: " + rice + " sugar: " + sugar + " carrots: " + carrots + " potatoes: " + potatoes + " bread: " + bread + " cake: " + cake + " corn bread: " + cornBread + " carrot cake: " + carrotCake + " corn chips: " + cornChips + " sweet potatoes: " + sweetPotatoes + " sweet carrots: " + sweetCarrots;
    }

    function wheatGrow18() {
        wheat += 1;
        plot18.style.backgroundColor = "green";
        plot18.innerHTML = "";
        numOfItems.innerHTML = "corn: " + corn + " wheat: " + wheat + " rice: " + rice + " sugar: " + sugar + " carrots: " + carrots + " potatoes: " + potatoes + " bread: " + bread + " cake: " + cake + " corn bread: " + cornBread + " carrot cake: " + carrotCake + " corn chips: " + cornChips + " sweet potatoes: " + sweetPotatoes + " sweet carrots: " + sweetCarrots;
    }

    function riceGrow18() {
        rice += 1;
        plot18.style.backgroundColor = "green";
        plot18.innerHTML = "";
        numOfItems.innerHTML = "corn: " + corn + " wheat: " + wheat + " rice: " + rice + " sugar: " + sugar + " carrots: " + carrots + " potatoes: " + potatoes + " bread: " + bread + " cake: " + cake + " corn bread: " + cornBread + " carrot cake: " + carrotCake + " corn chips: " + cornChips + " sweet potatoes: " + sweetPotatoes + " sweet carrots: " + sweetCarrots;
    }

    function sugarGrow18() {
        sugar += 1;
        plot18.style.backgroundColor = "green";
        plot18.innerHTML = "";
        numOfItems.innerHTML = "corn: " + corn + " wheat: " + wheat + " rice: " + rice + " sugar: " + sugar + " carrots: " + carrots + " potatoes: " + potatoes + " bread: " + bread + " cake: " + cake + " corn bread: " + cornBread + " carrot cake: " + carrotCake + " corn chips: " + cornChips + " sweet potatoes: " + sweetPotatoes + " sweet carrots: " + sweetCarrots;
    }

    function carrotGrow18() {
        carrots += 1;
        plot18.style.backgroundColor = "green";
        plot18.innerHTML = "";
        numOfItems.innerHTML = "corn: " + corn + " wheat: " + wheat + " rice: " + rice + " sugar: " + sugar + " carrots: " + carrots + " potatoes: " + potatoes + " bread: " + bread + " cake: " + cake + " corn bread: " + cornBread + " carrot cake: " + carrotCake + " corn chips: " + cornChips + " sweet potatoes: " + sweetPotatoes + " sweet carrots: " + sweetCarrots;
    }

    function potatoGrow18() {
        potatoes += 1;
        plot18.style.backgroundColor = "green";
        plot18.innerHTML = "";
        numOfItems.innerHTML = "corn: " + corn + " wheat: " + wheat + " rice: " + rice + " sugar: " + sugar + " carrots: " + carrots + " potatoes: " + potatoes + " bread: " + bread + " cake: " + cake + " corn bread: " + cornBread + " carrot cake: " + carrotCake + " corn chips: " + cornChips + " sweet potatoes: " + sweetPotatoes + " sweet carrots: " + sweetCarrots;
    }
    farmTitle.innerHTML = "This is your farm. you have " + money + " moneys.";
};
var plantSquare19 = function () {
    //the if statements subtract from your money, set the styling to make the square look active, and set a timeOut to and call a function that will give you the crop.
    if (crop == "corn" && money >= 1) {
        money -= 1;
        var growCorn19 = setTimeout(cornGrow19, 54000);
        console.log("working: " + crop);
        plot19.style.backgroundColor = "#cc9900";
        plot19.innerHTML = crop;
    }
    if (crop == "wheat" && money >= 2) {
        money -= 2;
        var growWheat19 = setTimeout(wheatGrow19, 27000);
        console.log("working: " + crop);
        plot19.style.backgroundColor = "#cc9900";
        plot19.innerHTML = crop;
    }
    if (crop == "rice" && money >= 1.5) {
        money -= 1.5;
        var growRice19 = setTimeout(riceGrow19, 36000);
        console.log("working: " + crop);
        plot19.style.backgroundColor = "#cc9900";
        plot19.innerHTML = crop;
    }
    if (crop == "sugar" && money >= 1.5) {
        money -= 1.5;
        var growSugar19 = setTimeout(sugarGrow19, 36000);
        console.log("working: " + crop);
        plot19.style.backgroundColor = "#cc9900";
        plot19.innerHTML = crop;
    }
    if (crop == "carrot" && money >= 3) {
        money -= 3;
        var growCarrot19 = setTimeout(carrotGrow19, 54000);
        console.log("working: " + crop);
        plot19.style.backgroundColor = "#cc9900";
        plot19.innerHTML = crop;
    }
    if (crop == "potato" && money >= 1) {
        money -= 1;
        var growPotato19 = setTimeout(potatoGrow19, 36000);
        console.log("working: " + crop);
        plot19.style.backgroundColor = "#cc9900";
        plot19.innerHTML = crop;
    }
    //the functions give you the crop reset the styling of the square
    function cornGrow19() {
        corn += 1;
        plot19.style.backgroundColor = "green";
        plot19.innerHTML = "";
        numOfItems.innerHTML = "corn: " + corn + " wheat: " + wheat + " rice: " + rice + " sugar: " + sugar + " carrots: " + carrots + " potatoes: " + potatoes + " bread: " + bread + " cake: " + cake + " corn bread: " + cornBread + " carrot cake: " + carrotCake + " corn chips: " + cornChips + " sweet potatoes: " + sweetPotatoes + " sweet carrots: " + sweetCarrots;
    }

    function wheatGrow19() {
        wheat += 1;
        plot19.style.backgroundColor = "green";
        plot19.innerHTML = "";
        numOfItems.innerHTML = "corn: " + corn + " wheat: " + wheat + " rice: " + rice + " sugar: " + sugar + " carrots: " + carrots + " potatoes: " + potatoes + " bread: " + bread + " cake: " + cake + " corn bread: " + cornBread + " carrot cake: " + carrotCake + " corn chips: " + cornChips + " sweet potatoes: " + sweetPotatoes + " sweet carrots: " + sweetCarrots;
    }

    function riceGrow19() {
        rice += 1;
        plot19.style.backgroundColor = "green";
        plot19.innerHTML = "";
        numOfItems.innerHTML = "corn: " + corn + " wheat: " + wheat + " rice: " + rice + " sugar: " + sugar + " carrots: " + carrots + " potatoes: " + potatoes + " bread: " + bread + " cake: " + cake + " corn bread: " + cornBread + " carrot cake: " + carrotCake + " corn chips: " + cornChips + " sweet potatoes: " + sweetPotatoes + " sweet carrots: " + sweetCarrots;
    }

    function sugarGrow19() {
        sugar += 1;
        plot19.style.backgroundColor = "green";
        plot19.innerHTML = "";
        numOfItems.innerHTML = "corn: " + corn + " wheat: " + wheat + " rice: " + rice + " sugar: " + sugar + " carrots: " + carrots + " potatoes: " + potatoes + " bread: " + bread + " cake: " + cake + " corn bread: " + cornBread + " carrot cake: " + carrotCake + " corn chips: " + cornChips + " sweet potatoes: " + sweetPotatoes + " sweet carrots: " + sweetCarrots;
    }

    function carrotGrow19() {
        carrots += 1;
        plot19.style.backgroundColor = "green";
        plot19.innerHTML = "";
        numOfItems.innerHTML = "corn: " + corn + " wheat: " + wheat + " rice: " + rice + " sugar: " + sugar + " carrots: " + carrots + " potatoes: " + potatoes + " bread: " + bread + " cake: " + cake + " corn bread: " + cornBread + " carrot cake: " + carrotCake + " corn chips: " + cornChips + " sweet potatoes: " + sweetPotatoes + " sweet carrots: " + sweetCarrots;
    }

    function potatoGrow19() {
        potatoes += 1;
        plot19.style.backgroundColor = "green";
        plot19.innerHTML = "";
        numOfItems.innerHTML = "corn: " + corn + " wheat: " + wheat + " rice: " + rice + " sugar: " + sugar + " carrots: " + carrots + " potatoes: " + potatoes + " bread: " + bread + " cake: " + cake + " corn bread: " + cornBread + " carrot cake: " + carrotCake + " corn chips: " + cornChips + " sweet potatoes: " + sweetPotatoes + " sweet carrots: " + sweetCarrots;
    }
    farmTitle.innerHTML = "This is your farm. you have " + money + " moneys.";
};
var plantSquare20 = function () {
    //the if statements subtract from your money, set the styling to make the square look active, and set a timeOut to and call a function that will give you the crop.
    if (crop == "corn" && money >= 1) {
        money -= 1;
        var growCorn20 = setTimeout(cornGrow20, 54000);
        console.log("working: " + crop);
        plot20.style.backgroundColor = "#cc9900";
        plot20.innerHTML = crop;
    }
    if (crop == "wheat" && money >= 2) {
        money -= 2;
        var growWheat20 = setTimeout(wheatGrow20, 27000);
        console.log("working: " + crop);
        plot20.style.backgroundColor = "#cc9900";
        plot20.innerHTML = crop;
    }
    if (crop == "rice" && money >= 1.5) {
        money -= 1.5;
        var growRice20 = setTimeout(riceGrow20, 36000);
        console.log("working: " + crop);
        plot20.style.backgroundColor = "#cc9900";
        plot20.innerHTML = crop;
    }
    if (crop == "sugar" && money >= 1.5) {
        money -= 1.5;
        var growSugar20 = setTimeout(sugarGrow20, 36000);
        console.log("working: " + crop);
        plot20.style.backgroundColor = "#cc9900";
        plot20.innerHTML = crop;
    }
    if (crop == "carrot" && money >= 3) {
        money -= 3;
        var growCarrot20 = setTimeout(carrotGrow20, 54000);
        console.log("working: " + crop);
        plot20.style.backgroundColor = "#cc9900";
        plot20.innerHTML = crop;
    }
    if (crop == "potato" && money >= 1) {
        money -= 1;
        var growPotato20 = setTimeout(potatoGrow20, 36000);
        console.log("working: " + crop);
        plot20.style.backgroundColor = "#cc9900";
        plot20.innerHTML = crop;
    }
    //the functions give you the crop reset the styling of the square
    function cornGrow20() {
        corn += 1;
        plot20.style.backgroundColor = "green";
        plot20.innerHTML = "";
        numOfItems.innerHTML = "corn: " + corn + " wheat: " + wheat + " rice: " + rice + " sugar: " + sugar + " carrots: " + carrots + " potatoes: " + potatoes + " bread: " + bread + " cake: " + cake + " corn bread: " + cornBread + " carrot cake: " + carrotCake + " corn chips: " + cornChips + " sweet potatoes: " + sweetPotatoes + " sweet carrots: " + sweetCarrots;
    }

    function wheatGrow20() {
        wheat += 1;
        plot20.style.backgroundColor = "green";
        plot20.innerHTML = "";
        numOfItems.innerHTML = "corn: " + corn + " wheat: " + wheat + " rice: " + rice + " sugar: " + sugar + " carrots: " + carrots + " potatoes: " + potatoes + " bread: " + bread + " cake: " + cake + " corn bread: " + cornBread + " carrot cake: " + carrotCake + " corn chips: " + cornChips + " sweet potatoes: " + sweetPotatoes + " sweet carrots: " + sweetCarrots;
    }

    function riceGrow20() {
        rice += 1;
        plot20.style.backgroundColor = "green";
        plot20.innerHTML = "";
        numOfItems.innerHTML = "corn: " + corn + " wheat: " + wheat + " rice: " + rice + " sugar: " + sugar + " carrots: " + carrots + " potatoes: " + potatoes + " bread: " + bread + " cake: " + cake + " corn bread: " + cornBread + " carrot cake: " + carrotCake + " corn chips: " + cornChips + " sweet potatoes: " + sweetPotatoes + " sweet carrots: " + sweetCarrots;
    }

    function sugarGrow20() {
        sugar += 1;
        plot20.style.backgroundColor = "green";
        plot20.innerHTML = "";
        numOfItems.innerHTML = "corn: " + corn + " wheat: " + wheat + " rice: " + rice + " sugar: " + sugar + " carrots: " + carrots + " potatoes: " + potatoes + " bread: " + bread + " cake: " + cake + " corn bread: " + cornBread + " carrot cake: " + carrotCake + " corn chips: " + cornChips + " sweet potatoes: " + sweetPotatoes + " sweet carrots: " + sweetCarrots;
    }

    function carrotGrow20() {
        carrots += 1;
        plot20.style.backgroundColor = "green";
        plot20.innerHTML = "";
        numOfItems.innerHTML = "corn: " + corn + " wheat: " + wheat + " rice: " + rice + " sugar: " + sugar + " carrots: " + carrots + " potatoes: " + potatoes + " bread: " + bread + " cake: " + cake + " corn bread: " + cornBread + " carrot cake: " + carrotCake + " corn chips: " + cornChips + " sweet potatoes: " + sweetPotatoes + " sweet carrots: " + sweetCarrots;
    }

    function potatoGrow20() {
        potatoes += 1;
        plot20.style.backgroundColor = "green";
        plot20.innerHTML = "";
        numOfItems.innerHTML = "corn: " + corn + " wheat: " + wheat + " rice: " + rice + " sugar: " + sugar + " carrots: " + carrots + " potatoes: " + potatoes + " bread: " + bread + " cake: " + cake + " corn bread: " + cornBread + " carrot cake: " + carrotCake + " corn chips: " + cornChips + " sweet potatoes: " + sweetPotatoes + " sweet carrots: " + sweetCarrots;
    }
    farmTitle.innerHTML = "This is your farm. you have " + money + " moneys.";
};
//Kitchen Kitchen Kitchen Kitchen Kitchen Kitchen Kitchen Kitchen Kitchen Kitchen Kitchen Kitchen Kitchen Kitchen Kitchen Kitchen Kitchen//
var breadButton = document.getElementById("kitchenBread");
var cakeButton = document.getElementById("kitchenCake");
var cornBreadButton = document.getElementById("kitchenCornBread");
var carrotCakeButton = document.getElementById("kitchenCarrotCake");
var cornChipsButton = document.getElementById("kitchenCornChips");
var sweetPotatoesButton = document.getElementById("kitchenSweetPotatoes");
var sweetCarrotsButton = document.getElementById("kitchenSweetCarrots");
var makeBread = function () {
    if (wheat >= 2) {
        wheat -= 2;
        breadButton.style.backgroundColor = "#bb9966";
        breadButton.innerHTML = "making bread";
        var breadTimer = setTimeout(breadMaker, 7000);
        numOfItems.innerHTML = "corn: " + corn + " wheat: " + wheat + " rice: " + rice + " sugar: " + sugar + " carrots: " + carrots + " potatoes: " + potatoes + " bread: " + bread + " cake: " + cake + " corn bread: " + cornBread + " carrot cake: " + carrotCake + " corn chips: " + cornChips + " sweet potatoes: " + sweetPotatoes + " sweet carrots: " + sweetCarrots;
    }

    function breadMaker() {
        bread += 1;
        breadButton.style.backgroundColor = "#b5b56a";
        breadButton.innerHTML = "make bread";
        numOfItems.innerHTML = "corn: " + corn + " wheat: " + wheat + " rice: " + rice + " sugar: " + sugar + " carrots: " + carrots + " potatoes: " + potatoes + " bread: " + bread + " cake: " + cake + " corn bread: " + cornBread + " carrot cake: " + carrotCake + " corn chips: " + cornChips + " sweet potatoes: " + sweetPotatoes + " sweet carrots: " + sweetCarrots;
    }
};
var makeCake = function () {
    if (wheat >= 2 && sugar >= 1) {
        wheat -= 2;
        sugar -= 1;
        cakeButton.style.backgroundColor = "#bb9966";
        cakeButton.innerHTML = "making cake";
        var cakeTimer = setTimeout(cakeMaker, 8000);
        numOfItems.innerHTML = "corn: " + corn + " wheat: " + wheat + " rice: " + rice + " sugar: " + sugar + " carrots: " + carrots + " potatoes: " + potatoes + " bread: " + bread + " cake: " + cake + " corn bread: " + cornBread + " carrot cake: " + carrotCake + " corn chips: " + cornChips + " sweet potatoes: " + sweetPotatoes + " sweet carrots: " + sweetCarrots;
    }

    function cakeMaker() {
        cake += 1;
        cakeButton.style.backgroundColor = "#b5b56a";
        cakeButton.innerHTML = "make cake";
        numOfItems.innerHTML = "corn: " + corn + " wheat: " + wheat + " rice: " + rice + " sugar: " + sugar + " carrots: " + carrots + " potatoes: " + potatoes + " bread: " + bread + " cake: " + cake + " corn bread: " + cornBread + " carrot cake: " + carrotCake + " corn chips: " + cornChips + " sweet potatoes: " + sweetPotatoes + " sweet carrots: " + sweetCarrots;
    }
};
var makeCornBread = function () {
    if (corn >= 2 && bread >= 1) {
        corn -= 2;
        bread -= 1;
        cornBreadButton.style.backgroundColor = "#bb9966";
        cornBreadButton.innerHTML = "making corn bread";
        var cornBreadTimer = setTimeout(cornBreadMaker, 4000);
        numOfItems.innerHTML = "corn: " + corn + " wheat: " + wheat + " rice: " + rice + " sugar: " + sugar + " carrots: " + carrots + " potatoes: " + potatoes + " bread: " + bread + " cake: " + cake + " corn bread: " + cornBread + " carrot cake: " + carrotCake + " corn chips: " + cornChips + " sweet potatoes: " + sweetPotatoes + " sweet carrots: " + sweetCarrots;
    }

    function cornBreadMaker() {
        cornBread += 1;
        cornBreadButton.style.backgroundColor = "#b5b56a";
        cornBreadButton.innerHTML = "make corn bread";
        numOfItems.innerHTML = "corn: " + corn + " wheat: " + wheat + " rice: " + rice + " sugar: " + sugar + " carrots: " + carrots + " potatoes: " + potatoes + " bread: " + bread + " cake: " + cake + " corn bread: " + cornBread + " carrot cake: " + carrotCake + " corn chips: " + cornChips + " sweet potatoes: " + sweetPotatoes + " sweet carrots: " + sweetCarrots;
    }
};
var makeCarrotCake = function () {
    if (carrots >= 2 && cake >= 1) {
        carrots -= 2;
        cake -= 1;
        carrotCakeButton.style.backgroundColor = "#bb9966";
        carrotCakeButton.innerHTML = "making carrot cake";
        var carrotCakeTimer = setTimeout(carrotCakeMaker, 7000);
        numOfItems.innerHTML = "corn: " + corn + " wheat: " + wheat + " rice: " + rice + " sugar: " + sugar + " carrots: " + carrots + " potatoes: " + potatoes + " bread: " + bread + " cake: " + cake + " corn bread: " + cornBread + " carrot cake: " + carrotCake + " corn chips: " + cornChips + " sweet potatoes: " + sweetPotatoes + " sweet carrots: " + sweetCarrots;
    }

    function carrotCakeMaker() {
        carrotCake += 1;
        carrotCakeButton.style.backgroundColor = "#b5b56a";
        carrotCakeButton.innerHTML = "make carrot cake";
        numOfItems.innerHTML = "corn: " + corn + " wheat: " + wheat + " rice: " + rice + " sugar: " + sugar + " carrots: " + carrots + " potatoes: " + potatoes + " bread: " + bread + " cake: " + cake + " corn bread: " + cornBread + " carrot cake: " + carrotCake + " corn chips: " + cornChips + " sweet potatoes: " + sweetPotatoes + " sweet carrots: " + sweetCarrots;
    }
};
var makeCornChips = function () {
    if (corn >= 2) {
        corn -= 2;
        cornChipsButton.style.backgroundColor = "#bb9966";
        cornChipsButton.innerHTML = "making corn chips";
        var cornChipsTimer = setTimeout(cornChipsMaker, 5000);
        numOfItems.innerHTML = "corn: " + corn + " wheat: " + wheat + " rice: " + rice + " sugar: " + sugar + " carrots: " + carrots + " potatoes: " + potatoes + " bread: " + bread + " cake: " + cake + " corn bread: " + cornBread + " carrot cake: " + carrotCake + " corn chips: " + cornChips + " sweet potatoes: " + sweetPotatoes + " sweet carrots: " + sweetCarrots;
    }

    function cornChipsMaker() {
        cornChips += 1;
        cornChipsButton.style.backgroundColor = "#b5b56a";
        cornChipsButton.innerHTML = "make corn chips";
        numOfItems.innerHTML = "corn: " + corn + " wheat: " + wheat + " rice: " + rice + " sugar: " + sugar + " carrots: " + carrots + " potatoes: " + potatoes + " bread: " + bread + " cake: " + cake + " corn bread: " + cornBread + " carrot cake: " + carrotCake + " corn chips: " + cornChips + " sweet potatoes: " + sweetPotatoes + " sweet carrots: " + sweetCarrots;
    }
};
var makeSweetPotatoes = function () {
    if (potatoes >= 1 && sugar >= 1) {
        potatoes -= 1;
        sugar -= 1;
        sweetPotatoesButton.style.backgroundColor = "#bb9966";
        sweetPotatoesButton.innerHTML = "making sweet potatoes";
        var sweetPotatoesTimer = setTimeout(sweetPotatoesMaker, 4500);
        numOfItems.innerHTML = "corn: " + corn + " wheat: " + wheat + " rice: " + rice + " sugar: " + sugar + " carrots: " + carrots + " potatoes: " + potatoes + " bread: " + bread + " cake: " + cake + " corn bread: " + cornBread + " carrot cake: " + carrotCake + " corn chips: " + cornChips + " sweet potatoes: " + sweetPotatoes + " sweet carrots: " + sweetCarrots;
    }

    function sweetPotatoesMaker() {
        sweetPotatoes += 1;
        sweetPotatoesButton.style.backgroundColor = "#b5b56a";
        sweetPotatoesButton.innerHTML = "make sweet potatoes";
        numOfItems.innerHTML = "corn: " + corn + " wheat: " + wheat + " rice: " + rice + " sugar: " + sugar + " carrots: " + carrots + " potatoes: " + potatoes + " bread: " + bread + " cake: " + cake + " corn bread: " + cornBread + " carrot cake: " + carrotCake + " corn chips: " + cornChips + " sweet potatoes: " + sweetPotatoes + " sweet carrots: " + sweetCarrots;
    }
};
var makeSweetCarrots = function () {
    if (carrots >= 1 && sugar >= 1) {
        carrots -= 1;
        sugar -= 1;
        sweetCarrotsButton.style.backgroundColor = "#bb9966";
        sweetCarrotsButton.innerHTML = "making sweet carrots";
        var sweetCarrotsTimer = setTimeout(sweetCarrotsMaker, 4500);
        numOfItems.innerHTML = "corn: " + corn + " wheat: " + wheat + " rice: " + rice + " sugar: " + sugar + " carrots: " + carrots + " potatoes: " + potatoes + " bread: " + bread + " cake: " + cake + " corn bread: " + cornBread + " carrot cake: " + carrotCake + " corn chips: " + cornChips + " sweet potatoes: " + sweetPotatoes + " sweet carrots: " + sweetCarrots;
    }

    function sweetCarrotsMaker() {
        sweetCarrots += 1;
        sweetCarrotsButton.style.backgroundColor = "#b5b56a";
        sweetCarrotsButton.innerHTML = "make sweet carrots";
        numOfItems.innerHTML = "corn: " + corn + " wheat: " + wheat + " rice: " + rice + " sugar: " + sugar + " carrots: " + carrots + " potatoes: " + potatoes + " bread: " + bread + " cake: " + cake + " corn bread: " + cornBread + " carrot cake: " + carrotCake + " corn chips: " + cornChips + " sweet potatoes: " + sweetPotatoes + " sweet carrots: " + sweetCarrots;
    }
};
//Market Market Market Market Market Market Market Market Market Market Market Market Market Market Market Market Market Market Market//
var sellWheat = function () {
    if (wheat >= 1) {
        wheat -= 1;
        money += 2.5;
        farmTitle.innerHTML = "This is your farm. you have " + money + " moneys.";
        numOfItems.innerHTML = "corn: " + corn + " wheat: " + wheat + " rice: " + rice + " sugar: " + sugar + " carrots: " + carrots + " potatoes: " + potatoes + " bread: " + bread + " cake: " + cake + " corn bread: " + cornBread + " carrot cake: " + carrotCake + " corn chips: " + cornChips + " sweet potatoes: " + sweetPotatoes + " sweet carrots: " + sweetCarrots;
    }
};
var sellCorn = function () {
    if (corn >= 1) {
        corn -= 1;
        money += 2;
        farmTitle.innerHTML = "This is your farm. you have " + money + " moneys.";
        numOfItems.innerHTML = "corn: " + corn + " wheat: " + wheat + " rice: " + rice + " sugar: " + sugar + " carrots: " + carrots + " potatoes: " + potatoes + " bread: " + bread + " cake: " + cake + " corn bread: " + cornBread + " carrot cake: " + carrotCake + " corn chips: " + cornChips + " sweet potatoes: " + sweetPotatoes + " sweet carrots: " + sweetCarrots;
    }
};
var sellRice = function () {
    if (rice >= 1) {
        rice -= 1;
        money += 3.5;
        farmTitle.innerHTML = "This is your farm. you have " + money + " moneys.";
        numOfItems.innerHTML = "corn: " + corn + " wheat: " + wheat + " rice: " + rice + " sugar: " + sugar + " carrots: " + carrots + " potatoes: " + potatoes + " bread: " + bread + " cake: " + cake + " corn bread: " + cornBread + " carrot cake: " + carrotCake + " corn chips: " + cornChips + " sweet potatoes: " + sweetPotatoes + " sweet carrots: " + sweetCarrots;
    }
};
var sellSugar = function () {
    if (sugar >= 1) {
        sugar -= 1;
        money += 2;
        farmTitle.innerHTML = "This is your farm. you have " + money + " moneys.";
        numOfItems.innerHTML = "corn: " + corn + " wheat: " + wheat + " rice: " + rice + " sugar: " + sugar + " carrots: " + carrots + " potatoes: " + potatoes + " bread: " + bread + " cake: " + cake + " corn bread: " + cornBread + " carrot cake: " + carrotCake + " corn chips: " + cornChips + " sweet potatoes: " + sweetPotatoes + " sweet carrots: " + sweetCarrots;
    }
};
var sellCarrot = function () {
    if (carrots >= 1) {
        carrots -= 1;
        money += 5;
        farmTitle.innerHTML = "This is your farm. you have " + money + " moneys.";
        numOfItems.innerHTML = "corn: " + corn + " wheat: " + wheat + " rice: " + rice + " sugar: " + sugar + " carrots: " + carrots + " potatoes: " + potatoes + " bread: " + bread + " cake: " + cake + " corn bread: " + cornBread + " carrot cake: " + carrotCake + " corn chips: " + cornChips + " sweet potatoes: " + sweetPotatoes + " sweet carrots: " + sweetCarrots;
    }
};
var sellPotato = function () {
    if (potatoes >= 1) {
        potatoes -= 1;
        money += 2.5;
        farmTitle.innerHTML = "This is your farm. you have " + money + " moneys.";
        numOfItems.innerHTML = "corn: " + corn + " wheat: " + wheat + " rice: " + rice + " sugar: " + sugar + " carrots: " + carrots + " potatoes: " + potatoes + " bread: " + bread + " cake: " + cake + " corn bread: " + cornBread + " carrot cake: " + carrotCake + " corn chips: " + cornChips + " sweet potatoes: " + sweetPotatoes + " sweet carrots: " + sweetCarrots;
    }
};
var sellBread = function () {
    if (bread >= 1) {
        bread -= 1;
        money += 7;
        farmTitle.innerHTML = "This is your farm. you have " + money + " moneys.";
        numOfItems.innerHTML = "corn: " + corn + " wheat: " + wheat + " rice: " + rice + " sugar: " + sugar + " carrots: " + carrots + " potatoes: " + potatoes + " bread: " + bread + " cake: " + cake + " corn bread: " + cornBread + " carrot cake: " + carrotCake + " corn chips: " + cornChips + " sweet potatoes: " + sweetPotatoes + " sweet carrots: " + sweetCarrots;
    }
};
var sellCake = function () {
    if (cake >= 1) {
        cake -= 1;
        money += 9.5;
        farmTitle.innerHTML = "This is your farm. you have " + money + " moneys.";
        numOfItems.innerHTML = "corn: " + corn + " wheat: " + wheat + " rice: " + rice + " sugar: " + sugar + " carrots: " + carrots + " potatoes: " + potatoes + " bread: " + bread + " cake: " + cake + " corn bread: " + cornBread + " carrot cake: " + carrotCake + " corn chips: " + cornChips + " sweet potatoes: " + sweetPotatoes + " sweet carrots: " + sweetCarrots;
    }
};
var sellCornBread = function () {
    if (cornBread >= 1) {
        cornBread -= 1;
        money += 12.5;
        farmTitle.innerHTML = "This is your farm. you have " + money + " moneys.";
        numOfItems.innerHTML = "corn: " + corn + " wheat: " + wheat + " rice: " + rice + " sugar: " + sugar + " carrots: " + carrots + " potatoes: " + potatoes + " bread: " + bread + " cake: " + cake + " corn bread: " + cornBread + " carrot cake: " + carrotCake + " corn chips: " + cornChips + " sweet potatoes: " + sweetPotatoes + " sweet carrots: " + sweetCarrots;
    }
};
var sellCarrotCake = function () {
    if (carrotCake >= 1) {
        carrotCake -= 1;
        money += 22.5;
        farmTitle.innerHTML = "This is your farm. you have " + money + " moneys.";
        numOfItems.innerHTML = "corn: " + corn + " wheat: " + wheat + " rice: " + rice + " sugar: " + sugar + " carrots: " + carrots + " potatoes: " + potatoes + " bread: " + bread + " cake: " + cake + " corn bread: " + cornBread + " carrot cake: " + carrotCake + " corn chips: " + cornChips + " sweet potatoes: " + sweetPotatoes + " sweet carrots: " + sweetCarrots;
    }
};
var sellCornChips = function () {
    if (cornChips >= 1) {
        cornChips -= 1;
        money += 5.5;
        farmTitle.innerHTML = "This is your farm. you have " + money + " moneys.";
        numOfItems.innerHTML = "corn: " + corn + " wheat: " + wheat + " rice: " + rice + " sugar: " + sugar + " carrots: " + carrots + " potatoes: " + potatoes + " bread: " + bread + " cake: " + cake + " corn bread: " + cornBread + " carrot cake: " + carrotCake + " corn chips: " + cornChips + " sweet potatoes: " + sweetPotatoes + " sweet carrots: " + sweetCarrots;
    }
};
var sellSweetPotatoes = function () {
    if (sweetPotatoes >= 1) {
        sweetPotatoes -= 1;
        money += 5.5;
        farmTitle.innerHTML = "This is your farm. you have " + money + " moneys.";
        numOfItems.innerHTML = "corn: " + corn + " wheat: " + wheat + " rice: " + rice + " sugar: " + sugar + " carrots: " + carrots + " potatoes: " + potatoes + " bread: " + bread + " cake: " + cake + " corn bread: " + cornBread + " carrot cake: " + carrotCake + " corn chips: " + cornChips + " sweet potatoes: " + sweetPotatoes + " sweet carrots: " + sweetCarrots;
    }
};
var sellSweetCarrots = function () {
    if (sweetCarrots >= 1) {
        sweetCarrots -= 1;
        money += 10;
        farmTitle.innerHTML = "This is your farm. you have " + money + " moneys.";
        numOfItems.innerHTML = "corn: " + corn + " wheat: " + wheat + " rice: " + rice + " sugar: " + sugar + " carrots: " + carrots + " potatoes: " + potatoes + " bread: " + bread + " cake: " + cake + " corn bread: " + cornBread + " carrot cake: " + carrotCake + " corn chips: " + cornChips + " sweet potatoes: " + sweetPotatoes + " sweet carrots: " + sweetCarrots;
    }
};
/*
crops:
    corn
    wheat
    rice
    sugar
    carrot
    potato
    bread
    cake
    cornBread
    carrotCake
    cornChips
    sweetPotatoes
    sweetCarrots
*/
