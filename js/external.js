"use strict";

console.log("Hello from external JavaScript");

alert("Welcome to my Website!");

// var response = prompt("What is your favorite color?");
//
// alert("Great, " + response.toLowerCase() + " is my favorite color, too!");
//
// var movieNumber = prompt("How many movies are you renting?");
//
// var movieDays = prompt("How many days are you renting for?");
//
// var totalCost = (movieNumber*movieDays)*3;
//
// alert("The total amount due is $" + totalCost + ".");

var googlePay = prompt("How much is Google paying you per hour?");
var gHours = prompt("How many hours did you work at Google?");
var amazonPay = prompt("How much is Amazon paying you per hour?");
var aHours = prompt("How many hours did you work at Amazon?");
var facebookPay = prompt("How much is Facebook paying you per hour?");
var fHours = prompt("How many hours did you work at Facebook?");


// add plus (+) to turn string into a #
var classVacancy = confirm("Is the class full?");

var conflict = confirm("Does the class schedule conflict with your current schedule?");

var enroll = ((classVacancy === false) && (conflict === false));

var doNotEnroll = ((classVacancy === true) && (conflict === true)) || ((classVacancy === false) && (conflict === true)) || ((classVacancy === true) && (conflict === false));

enroll = alert("Go ahead and enroll!");

doNotEnroll = alert("Sorry, you cannot enroll at this time.");