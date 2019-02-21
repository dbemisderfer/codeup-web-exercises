// (function() {

"use strict";

// =======================Loops and Array Bonuses=========================
// 1.  create an array of shapes
// – prompt the user to search for a specific shape
// – using a for loop, iterate through the array to log the shapes until the matching shape is found
// – once the shape is found, log a message (“Shape is found”) and use a break statement to exit loop.

// var response = prompt("Enter a shape and I'll see if I have it.")
//
// var shapes = ['square', 'circle', 'triangle', 'rectangle'];
//
// for (var i = 0; i < shapes.length; i++) {
//     if (shapes[i] === response.toLowerCase()) {
//         alert("Yes, I have a " + shapes[i] + ".");
//         break;
//     }
//     // alert("I'm sorry, I don't have that shape.");
// }


// 2.  Create a function that returns a random day of the week

// var daysOfTheWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
//
// function giveRandomDay() {
//     var randomDay = Math.floor(Math.random() * (daysOfTheWeek.length)) + 1;
//     for (var i = 0; i < daysOfTheWeek.length; i++) {
//         if (randomDay === i + 1) {
//             return(daysOfTheWeek[i]);
//         }
//     }
// }
//
// console.log(giveRandomDay());

// Instructor solution
// function randomDay(){
//     var days = ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'];
//     var random = (Math.floor(Math.random() * 7) + 1) - 1;
//     return days[random];
// }
//
// console.log(randomDay());



// 3.  Create a function that takes a single letter and returns what number the letter is in the alphabet. Ignore case.
// – someFunction("a") // returns 1
// – someFunction("z") // returns 26

// var response = prompt("Enter a letter of the alphabet.");
// response = response.toLowerCase();
// var letter = response.toUpperCase();
//
// function giveAlphabetNumber(x) {
//     var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
//     return alphabet.indexOf(x) + 1;
// }
//
// alert(letter + " is letter number " + giveAlphabetNumber(response) + " of the alphabet.");

// Alternate solution (Erik Behnke)
// var alphabet = ['', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
//
// var letter = prompt('Enter a letter').toLowerCase();
//
// function alpha() {
//     for (var i = 0; i < alphabet.length; i++) {
//         if (letter === alphabet[i]) {
//             return console.log(letter + " is the number " + i)
//         }
//     }
// }
//
// alpha();

// 4.  Create a function that returns the longest string in a given array of string elements.

var biblebooks = ['Genesis', 'Deuteronomy', 'Job', 'Isaiah', 'Ruth'];

var lengths = biblebooks.map(function(element){
    return element.length
})
console.log(lengths);

// lengths = lengths.join(',');
// console.log(lengths);

var longestString =  Math.max(lengths);
console.log(longestString);


// Alternate solution (Adrien VL)
// var testArray = ['hell6', 'hiii', 'b', 'goodbye121212'];
//
// function longestStringFunction(array){
//
//
//     var longestString = array[0].length;
//
//
//     for(var i = 1; i < array.length; i++){
//
//
//         if(array[i].length > longestString) {
//
//
//             longestString = array[i];
//             return longestString;
//
//         }
//
//     }
//
//     return array[0];
//
//
// }
//
// console.log(longestStringFunction(testArray));





// 5.   Create a function that takes in two arrays of elements, including numbers. If all numbers added together in the first array is equal to all the number inputs added in the second array, return true, otherwise, false. Only add together numeric elements but either array may contain non-numeric elements.
// – var arr1 = ['bob', 1, true, 1, 2];
// – var arr2 = [2, null, undefined, 0, 2, "apple"]
// – exampleFunction(arr1, arr2) // returns true

// USE .reduce METHOD


// ====================ARRAYS=====================-
// 6.	Write a function that returns the sum of an array of numbers




// 7.	Create a student roster management app. Using the user dialogue functions (alert, confirm, prompt), create an application that will prompt the user to choose from a menu with the following actions:
//     1) add a student
//     2) delete a student
//     3) view all students in alphabetical order
//     4) view all students in reverse alphabetical
// Collapse





// })();
