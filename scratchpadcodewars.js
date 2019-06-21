"use strict";
/////////////////////////////////////////////////////////////////////////////////////
///////////////// NOTE: To view output from this file, right-click and
///////////////// choose "Open in Terminal", then type 'node scratchpadcodewars.js'
/////////////////////////////////////////////////////////////////////////////////////
// function gooseFilter (birds) { /// WARNING: THIS ONE DOESN'T WORK ///
//     let geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
//     console.log(geese);
//     // var birds = [input];
//     // console.log(input);
//     // console.log(birds);
//     let output = [];
//     for (let bird of birds)
//     {
//         for (let goose of geese)
//         {
//             if (bird !== goose && output.indexOf(bird) < 0) {
//                 output.push(bird);
//             }
//         }
//
//     }
//     return output;
// }

// function gooseFilter (birds) {
//     var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
//     for (var i=0; i<birds.length; i++){
//         for (var j=0; j<geese.length; j++){
//             if (birds[i] === geese[j]){
//                 // console.log(birds);
//                 birds.splice(i, 1);
//                 i--; //this is necessary, because when an index is
//                 // removed after splicing, the next index will move down one
//             }
//         }
//     }
//     return birds
// };

///////////// Alternate method ///////////////////////
function gooseFilter (birds) {
    var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];

    birds = birds.filter(function(birdElement)
    {
        return !geese.includes(birdElement)
    })
    return birds
};

console.log(gooseFilter(["Mallard", "African", "Toulouse", "Robin", "Cardinal"]));

//     // return an array containing all of the strings in the input array except those that match strings in geese
//
//
//     /////////////////////////////////
//     /////////// L1:SetAlarm /////////
//     /////////////////////////////////
//     // Write a function named setAlarm which receives two parameters.
//     // The first parameter, employed, is true whenever you are employed
//     // and the second parameter, vacation is true whenever you are on
//     // vacation. The function should return true if you are employed
//     // and not on vacation (because these are the circumstances under
//     // which you need to set an alarm). It should return false otherwise.
//
//     function setAlarm(employed, vacation) {
//         return employed === true && vacation === false;
//     }
//
//     ////// Alternate solutions /////////////////
//     // const setAlarm = (employed, vacation) => employed && !vacation;
//
//     ////// or... //////////////////
//     // const setAlarm = (employed, vacation) => employed > vacation; // true(1) > false(0)
//
//     console.log(setAlarm(true, true)); //false
//     console.log(setAlarm(false, true)); //false
//     console.log(setAlarm(false, false)); //false
//     console.log(setAlarm(true, false)); //true
//
//
//     /////////////////////////////////
//     //////// You're a square! ///////
//     /////////////////////////////////
//     // Given an integral number, determine if it's a square number.
//
//     function isSquare(x) {
//         var a = Math.sqrt(x);
//         a = parseInt(a);
//         console.log("Square root of " + x + " = " + a);
//         return a * a === x;
//     }

    ////// Alternate solutions /////////////////
    // const isSquare = (x) => Math.sqrt(x) % 1 === 0;

    ////// or... //////////////////
    // const isSquare = (x) => Number.isInteger(Math.sqrt(x));

    // console.log(isSquare(-1));
    // console.log(isSquare(0));
    // console.log(isSquare(3));
    // console.log(isSquare(4));
    // console.log(isSquare(25));
    // console.log(isSquare(26));
    // console.log(isSquare(14));
