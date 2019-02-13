// (function()
"use strict";

// Break & Continue Loops: Problem 2 & 3 (Completed)
// do {
//     var r = prompt("Please enter an ODD number between 1 and 50.");
// } while(+r % 2 === 0 || +r > 50);
//
// console.log("Number to skip is: " + r);
//
// for (var x = 1; x <= 50; x += 2) {
//     if (x == r) {
//         console.log("Yikes! Skipping number: " + x);
//         continue;
//     } console.log(x);
// }

// Instructor example

// var input;
// while(true){
//     input = prompt("Please enter an odd number from 1 - 50");
//     if(isNaN(input)){
//         alert("That is not a number. Please try again");
//         continue;
//     }
//     if(input < 1 || input > 50){
//         alert("Number is out of range. Please try again");
//         continue;
//     }
//     if(input % 2 === 0){
//         alert("Please enter an odd number.");
//     } else{
//         break;
//     }
// }
// console.log(input);
// for(var w = 1; w <= 50; w++){
//     if(w % 2 === 0){
//         continue;
//     }
//     if(w == input){
//         console.log("Yikes! Skipping number: " + w);
//     }else{
//         console.log("Here is an odd number: " + w);
//     }
// }
// //  prompt user for input.
// //  isNaN
// //  out of range
// //  even number

// )();