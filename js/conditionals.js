// (function(){

"use strict";

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 */

var initialResponse = confirm("Would you like to enter an number?");

if (initialResponse) {

    var num = prompt("Please enter a number:");

    if (!isNaN(+num)) {

        if (num % 2 === 0) {
            alert(num + " is an even number.");
        } else {
            alert(num + " is an odd number.");
        }

        var plusHundred = +num + 100;
        alert(num + " plus 100 is " + plusHundred + ".");

        if (num > 0) {
            alert(num + " is a positive number.");
        } else if (num < 0) {
            alert(num + " is a negative number.");
        } else {

        }

    } else {

        alert("I'm sorry, that isn't a number.")

    }

}

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined above, if the color passed is not
 * one of the ones defined above, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

function analyzeColor(colorInput) {


        if (colorInput === "blue") {
            alert("Blue is the color of the sky.");
        } else if (colorInput === "red") {
            alert("Red is the color of an apple.");
        } else if (colorInput === "yellow") {
            alert("Yellow is the color of a lemon.");
        } else if (colorInput === "orange") {
            alert("Orange is the color of an orange.");
        } else if (colorInput === "green") {
            alert("Green is the color of a lime.");
        } else if (colorInput === "indigo") {
            alert("Indigo is the color of a blueberry.");
        } else if (colorInput === "violet") {
            alert("Violet is the color of a violet flower.");
        } else {
            alert("I don't know anything about the color " + colorInput + ".");
        }

    return colorInput;
}

console.log(analyzeColor("blue"));

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color everytime the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message everytime you refresh the page
 */

function analyzeColor(colorInput) {


    if (colorInput === "blue") {
        alert("Blue is the color of the sky.");
    } else if (colorInput === "red") {
        alert("Red is the color of an apple.");
    } else if (colorInput === "yellow") {
        alert("Yellow is the color of a lemon.");
    } else if (colorInput === "orange") {
        alert("Orange is the color of an orange.");
    } else if (colorInput === "green") {
        alert("Green is the color of a lime.");
    } else if (colorInput === "indigo") {
        alert("Indigo is the color of a blueberry.");
    } else if (colorInput === "violet") {
        alert("Violet is the color of a violet flower.");
    } else {
        alert("I don't know anything about the color " + colorInput + ".")
    }

    return colorInput;
}

console.log(analyzeColor(randomColor));

/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */

function analyzeColor(colorInput) {

        switch(colorInput) {
            case "blue":
                alert("Blue is the color of the sky.");
                break;
            case "red":
                alert("Red is the color of an apple.");
                break;
            case "yellow":
                alert("Yellow is the color of a lemon.")
                break;
            case "orange":
                alert("Orange is the color of an orange.");
                break;
            case "green":
                alert("Green is the color of a lime.");
                break;
            case "indigo":
                alert("Indigo is the color of a blueberry.");
                break;
            case "violet":
                alert("Violet is the color of a violet flower.");
                break;
            default:
                alert("I'm not familiar with the color " + colorInput + ".")
        }
    return colorInput;

}

console.log(analyzeColor(randomColor));

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

var colorInput = prompt("Type in the name of a color.");

function analyzeColor(colorInput) {

    if (colorInput === "blue") {
        alert("Blue is the color of the sky.");
    } else if (colorInput === "red") {
        alert("Red is the color of an apple.");
    } else if (colorInput === "yellow") {
        alert("Yellow is the color of a lemon.")
    } else if (colorInput === "orange") {
        alert("Orange is the color of an orange.");
    } else if (colorInput === "green") {
        alert("Green is the color of a lime.");
    } else if (colorInput === "indigo") {
        alert("Indigo is the color of a blueberry.");
    } else if (colorInput === "violet") {
        alert("Violet is the color of a violet flower.");
    } else {
        alert("I don't know anything about the color " + colorInput + ".")
    }

    return colorInput;
}

console.log(analyzeColor(colorInput));


/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */


function calculateTotal(luckyNumber, totalAmount) {
    if (luckyNumber === 5) {
        alert("You are getting a 100% discount! Your price will be $" + (totalAmount * 0) + ".");
    } else if (luckyNumber === 4) {
        alert("You are getting a 50% discount! Your price will be $" + (totalAmount / 2) +  ".");
    } else if (luckyNumber === 3) {
        alert("You are getting a 35% discount! Your price will be $" + (totalAmount * .65) + ".");
    } else if (luckyNumber === 2) {
        alert("You are getting a 25% discount! Your price will be $" + (totalAmount * .75) + ".");
    } else if (luckyNumber === 1) {
        alert("You are getting a 10% discount! Your price will be $" + (totalAmount * .9) + ".");
    } else {
        alert("You are getting a 0% discount! Your price will be $" + (totalAmount) + ".");
    }

    return (luckyNumber, totalAmount);
}

calculateTotal(3, 100);

/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */

// Generate a random number between 0 and 6
var luckyNumber = Math.floor(Math.random() * 6);

var totalAmount = prompt("What is the total amount of your bill?");

function calculateTotal(luckyNumber, totalAmount) {
    if (luckyNumber === 5) {
        return (totalAmount * 0);
    } else if (luckyNumber === 4) {
        return (totalAmount / 2);
    } else if (luckyNumber === 3) {
        return (totalAmount * .65);
    } else if (luckyNumber === 2) {
        return (totalAmount * .75);
    } else if (luckyNumber === 1) {
        return (totalAmount * .9);
    } else {
        return (totalAmount);
    }

}

alert("Your lucky number is " + luckyNumber + "." + " You owed $" + totalAmount + ", but you are getting a discount! Your price will be $" + calculateTotal(luckyNumber, totalAmount).toFixed(2) + ".");




// })();