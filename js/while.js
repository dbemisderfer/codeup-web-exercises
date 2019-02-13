// (function()
"use strict";

// While Loops: Problem 2 (Completed)
// var x = 1;
// while (x <= 16) {
//     console.log(Math.pow(2, x))
//     x++;
// }
// Instructor example
// var x = 2;
// while(x <= 65536) {
//     console.log(x);
//     x += x;
// }


// While Loops: Problem 3
// // Generates random number between 50 and 100
// var allCones = Math.floor(Math.random() * 50) + 50;
// //
// // console.log("Amount of cones to sell: " + allCones);
// //
// // // Generates random number between 1 and 5
// // var conesBought = Math.floor(Math.random() * 5) + 1;
// //
// // console.log("Cones being bought: " + conesBought);
// //
// //
// //
// do {
//     console.log(conesBought + " cones sold...");
//
//     allCones = allCones - conesBought;
//
//     // var amountLeft = allCones - conesBought;
//     // do {
//     //     console.log("I cannot sell you " + conesBought + " cones, I only have " + amountLeft + "...");
//     // } while (conesBought > allCones);
//     //
//     // var amountLeft = allCones - conesBought;
//     // if (conesBought > amountLeft) {
//     //     console.log("I cannot sell you " + conesBought + " cones, I only have " + amountLeft + "...");
//     // } else if (amountLeft > 0) {
//     //     console.log("I have " + amountLeft + " cones left!");
//     // } else {
//     //     console.log("Yay! I sold them all!");
//     // }
//
// } while (allCones > 0 && conesBought > allCones);

// Instructor example
// //generates a random number btwn 50-100
// var allCones = Math.floor(Math.random() * 50) + 50;
//
// //ice cream cone loop simulator
// //log out how many cones i have
// console.log("I have " + allCones + " cones.");
// do {
//     //generates random number between 1 and 5
//     var cones = Math.floor(Math.random() * 5) + 1;
//
//     console.log(cones + " cone/s sold...")
//     //subtract cones sold from total
//     allCones -= cones
//     //log new total
//     console.log(allCones + " cone/s left.")
//
//     if (allCones === 0) {
//         console.log("Yayy! I sold all my cones!");
//     }
//
//     if ((cones > allCones) && (allCones !== 0)) {
//         console.log("Can't sell you " + cones + " cones, I only have " + allCones);
//         console.log("Did you want to buy my last " + allCones + " cone/s?")
//         console.log(allCones + " more cones sold..");
//         allCones -= allCones
//         console.log("Yayy! I sold all my cones!");
//     }
//
// } while ((allCones - cones >= 0));




//IN CLASS WHILE LOOP EXERCISE
// // log all even numbers from 1 - 50
// var x = 1;
// while (x <= 50) {
//     if (x % 2 === 0) {
//         console.log(x);
//     }
//     x++;
// }

// create a function that returns the square of a number
// function squareNum(x) {
//     return x * x;
// }
//
// //use function in a loop to log squares from  1 - 10
//
// var x = 1;
// while (x <= 10) {
//     console.log("The square of " + x + " is: " + squareNum(x));
//     x++;
// }



//DO WHILE EXERCISES
// *** log "the number is x" from all numbers from 1 - 25 ***
// var count = 1;
// do {
//     console.log("The number is: " + count);
//     count++;
// } while (count <= 25);

// *** count backwards by 10 from 100 until you reach -50 ***
// var start = 100
//
// do {
//     console.log(start)
//     start -= 10;
// } while (start >= -50);

// Inefficient method
// var x = 110;
//
// do {
//     if (x % 10 === 0) {
//         console.log(x - 10);
//     }
//     x--;
// } while (x > -50)

// Morning warmup: As While Loop
// var x = 50;
//
// while (x >= 1) {
//     console.log(x);
//     x--;
// }

// As Do-While Loop
// do {
//     console.log(x);
//     x--;
// } while(x >= 1);

//As For Loop
// for (x; x >=1; x--) {
//     console.log(x);
// }

// Classroom example of loops within functions
// function cubed(x) {
//     for(var a = 0; a <= x; a++) {
//         if(a % 2 === 0) {
//             continue;
//         }
//         if(a === x) {
//             break;
//         }
//         console.log("The cube of " + a + " is " + a*a*a);
//     }
//
// }
//
// cubed(11);

// var y = 0;
//
// while (true) {
//     y++;
//     if (y === 100) {
//         console.log("End of loop!");
//         break;
//     }
//     if (y % 5 === 0) {
//         continue;
//     }
//     console.log(y);
// }




// )();