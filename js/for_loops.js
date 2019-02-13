// (function()
"use strict";

// For Loops: Problem 2
// function showMultiplicationTable(y) {
//     return y;
// }
//
// for (var x = 1; x <= 10; x++) {
//     console.log(showMultiplicationTable(7) + " x " + x + " = " + showMultiplicationTable(7) * x);
// }

// For Loops: Problem 3
// var x = Math.floor(Math.random() * 200) + 20;
//
// for ( x; x <= 200; x++) {
//     if (x % 2 === 0) {
//         console.log(x + " is even")
//     } else {
//         console.log(x + " is odd")
//     }
// }

// For Loops: Problem 4

    // for (var i = 1; i <= 9; i++) {
    //     i = i.toString();
    //     var str = i.repeat(i);
    //
    //     console.log(str);
    // }

// For Loops: Problem 5

for (x = 100; x >= 5; x)


// FOR LOOP EXERCISES
//using a for loop log down all numbers from 1 - 100
// if divisible by 3: Fizz
//if divisible by 5: Buzz
//if divisible by both: FizzBuzz
//else log number

// Inefficient method
// for (var i = 1; i <= 100; i++) {
//     if ((i % 3 === 0) && (i % 5 === 0)) {
//         console.log("FizzBuzz");
//     } else if (i % 3 === 0) {
//         console.log("Fizz");
//     } else if (i % 5 === 0) {
//         console.log("Buzz");
//     } else {
//         console.log(i);
//     }
// }

// for (var x = 1; x <= 100; x++) {
//     if (x % 15 === 0) {
//         console.log("FizzBuzz");
//     } else if (x % 3 === 0) {
//         console.log("Fizz");
//     } else if (x % 5 === 0) {
//         console.log("Buzz");
//     } else {
//         console.log(x);
//     }
// }

// Most efficient method
// for (var i = 1; i <= 100; i++) {
//     if (i % 15 === 0) console.log("FizzBuzz");
//     else if (i % 5 === 0) console.log("Buzz");
//     else if (i % 3 === 0) console.log("Fizz");
//     else console.log(i);
// }
// )();