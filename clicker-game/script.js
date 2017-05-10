//variables variables variables variables variables variables variables variables variables variables variables variables variables variables//
var clicks = 0; //number of clicks the user has
var superClicks = 0; //the number of super clicks the user has (these are gained by buying them with clicks per minute)
var clickValue = 1; //how many clicks you get everytime you click the button
var clicksPerSecond = 0; //how many clicks you get per second automatically
var perSecondClickCost = 100; //how much it costs to upgrade clicks per second
var perSecondClickScaler = 1; //how much your clicks per second goes up everytime you upgrade
var clicksPerMinute = 0; //how many clicks you get per minute automatically
var perMinutePerMinute = 0; //how many clicks per minute you get every minute
var upClickCost = 10; //cost of upgrading clickValue
var howManyClicks = document.getElementById("numberOfClicks"); //element that tell the user how many clicks they have
var clickUpgradeInfo = document.getElementById("item1Info"); //description of shop item that upgrades click value
var autoClickInfo = document.getElementById("item2Info"); //description of shop item that upgrades clicks per second
var superClicksNumber = document.getElementById("superClicksHeader");
howManyClicks.innerHTML = "you have " + clicks + " clicks"; //element that tell the user how many clicks they have
superClicksNumber.innerHTML = "you have " + superClicks + " super clicks"; //element that tell the user how many super clicks they have
//button that gives you more clicks button that gives you more clicks button that gives you more clicks button that gives you more clicks//
var clicker = function () {
   clicks += clickValue;
   console.log("works!");
   howManyClicks.innerHTML = "you have " + clicks + " clicks";
};
//shop items shop items shop items shop items shop items shop items shop items shop items shop items shop items shop items shop items//
//descriptions of shop items
clickUpgradeInfo.innerHTML = "this will make each of your clicks worth more! it costs " + upClickCost;
autoClickInfo.innerHTML = "this will give you more clicks per second automatically! it costs " + perSecondClickCost;
//click upgrader (upgrades how many clicks you get with each click)
var uppgadeClick = function () {
   if (clicks > upClickCost || clicks === upClickCost) {
      clickValue *= 2;
      clicks -= upClickCost;
      upClickCost *= 2;
      howManyClicks.innerHTML = "you have " + clicks + " clicks";
      clickUpgradeInfo.innerHTML = "this will make each of your clicks worth more! it costs " + upClickCost;
   }
};
//per second click upgrader (upgrades how many clicks you get per second)
var upgradeClicksPerSecond = function () {
   if (clicks > perSecondClickCost || clicks === perSecondClickCost) {
      clicksPerSecond += perSecondClickScaler;
      clicks -= perSecondClickCost;
      perSecondClickCost += 50;
      perSecondClickScaler += 1;
      howManyClicks.innerHTML = "you have " + clicks + " clicks";
      autoClickInfo.innerHTML = "this will give you more clicks per second automatically! it costs " + perSecondClickCost;
      console.log("works");
   }
};
//gambling items gambling items gambling items gambling items gambling items gambling items gambling items gambling items gambling items//
//the first gambling item you can buy. Price: 100 clicks, chance of winning: 50%, reward: 200 clicks, punishment: 20 window alerts.
var gamble1 = function () {
   if (clicks > 100 || clicks === 100) {
      clicks -= 100;
      var win = Math.random();
      howManyClicks.innerHTML = "you have " + clicks + " clicks";
      if (win > 0.5) {
         clicks += 200;
         alert("you win!!");
      }
      if (win < 0.5) {
         for (var i = 1; i < 20; i += 1) {
            alert("you lost now you must suffer the consequences");
         }
      }
   }
};
//the second gambling item you can buy. Price: 750 clicks, chance of winning: 40%, reward: 250 clicks per minute, punishment: 20 window alerts.
var gamble2 = function () {
   if (clicks > 750 || clicks === 750) {
      clicks -= 750;
      var win = Math.random();
      howManyClicks.innerHTML = "you have " + clicks + " clicks";
      if (win > 0.6) {
         clicksPerMinute += 250;
         alert("you win!!");
      }
      if (win < 0.6) {
         for (var i = 1; i < 20; i += 1) {
            alert("you lose now you must suffer the consequences");
         }
      }
   }
};
var superGamble1 = function () {
   if (superClicks >= 2 && clicks >= 1000000) {
      var win = Math.random();
      superClicks -= 2;
      howManyClicks.innerHTML = "you have " + clicks + " clicks";
      superClicksNumber.innerHTML = "you have " + superClicks + " super clicks";
      if (win > 0.65) {
         superClicks += 7;
         alert("you win!!");
      }
      if (win < 0.65) {
         clicks -= 1000000;
         alert("you lose");
      }
   }
};
var superGamble2 = function () {
   if (superClicks >= 5) {
      var win = Math.random();
      superClicks -= 5;
      howManyClicks.innerHTML = "you have " + clicks + " clicks";
      superClicksNumber.innerHTML = "you have " + superClicks + " super clicks";
      if (win > 0.5) {
         clicks += 500000000;
         alert("you win");
      }
      if (win < 0.5) {
         for (var i = 1; i < 20; i += 1) {
            alert("you lose now you must suffer the consequences");
         }
      }
   }
};
//super clicks super clicks super clicks super clicks super clicks super clicks super clicks super clicks super clicks super clicks//
//function for buying super clicks
var buySuperClicks = function () {
   if (clicksPerMinute >= 1000) {
      superClicks += 1;
      clicksPerMinute -= 1000;
      superClicksNumber.innerHTML = "you have " + superClicks + " super clicks";
   }
};
//function for selling super clicks
var superClicksToClicks = function () {
   if (superClicks >= 10) {
      clicks += 500000000;
      superClicks -= 10;
      howManyClicks.innerHTML = "you have " + clicks + " clicks";
      superClicksNumber.innerHTML = "you have " + superClicks + " super clicks";
   }
};
var perMinutePerMinuteBuyer = function () {
   if (superClicks >= 3) {
      superClicks -= 3;
      perMinutePerMinute += 150000;
      superClicksNumber.innerHTML = "you have " + superClicks + " super clicks";
   }
};
//auto clicks auto clicks auto clicks auto clicks auto clicks auto clicks auto clicks auto clicks auto clicks auto clicks auto clicks//
//The timer for clicks per second.
var perSecondClickRunner = setInterval(perSecondClickerFunction, 1000);
//The function that is run to give you clicks per second.
function perSecondClickerFunction() {
   clicks += clicksPerSecond;
   howManyClicks.innerHTML = "you have " + clicks + " clicks";
}
//The timer for clicks per minute.
var perMinuteClickRunner = setInterval(perMinuteClicker, 60000);
//The function that is run to give you clicks per minute.
function perMinuteClicker() {
   clicks += clicksPerMinute;
}
//the timer for clicks per minute per minute
var perMinutePerMinuteRunner = setInterval(perMinutePerMinuteFunction, 60000);
//the function that is run to give you clicks per minute per minute
function perMinutePerMinuteFunction() {
   clicksPerMinute += perMinutePerMinute;
   console.log(clicksPerMinute);
}
