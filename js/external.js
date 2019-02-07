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

// var rentalPriceInDollars = prompt("How much is the cost of a single rental, in dollars?");
// var littleMermaidRental = prompt("How many days would you like to rent The Little Mermaid?");
// var brotherBearRental = prompt("How many days would you like to rent Brother Bear?");
// var herculesRental = prompt("How many days would you like to rent Hercules?");
// var costOfMovieRentals = alert("You owe $" + (+littleMermaidRental + +brotherBearRental + +herculesRental)*(+rentalPriceInDollars) + ".")

// var googlePay = prompt("How much is Google paying you per hour?");
// var googleHours = prompt("How many hours did you work at Google this week?");
// var amazonPay = prompt("How much is Amazon paying you per hour?");
// var amazonHours = prompt("How many hours did you work at Amazon this week?");
// var facebookPay = prompt("How much is Facebook paying you per hour?");
// var facebookHours = prompt("How many hours did you work at Facebook this week?");
// var weeklyContractorSalary = alert("Your salary for the week is $" + ((+googlePay*+googleHours) + (+amazonPay*+amazonHours) + (+facebookPay*+facebookHours)) + ".");


// add plus (+) to turn string into a #


var classNotVacant = confirm("Is the class full?");

var scheduleConflict = confirm("Does the class schedule conflict with your current schedule?");

var enrollStudent = !classNotVacant && !scheduleConflict;

enrollStudent = alert("Go ahead and enroll!");

// var doNotEnroll = ((classVacancy === true) && (conflict === true)) || ((classVacancy === false) && (conflict === true)) || ((classVacancy === true) && (conflict === false));

// doNotEnroll = alert("Sorry, you cannot enroll at this time.");


var amountPurchased = prompt("How many items were purchased by the customer?");
var offerNotExpired = confirm("Is offer still valid? [Offer valid until March 2019]");
var premiumMembershipVerified = confirm("Is customer a premium member?");
var applyProductOffer = (amountPurchased > 2 && offerNotExpired) || premiumMembershipVerified