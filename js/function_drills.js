// (function(){
    "use strict";

// ******** BONUS Exercises *********

    // function icyHot(temp1, temp2) {
    //     return (temp1 > 100 && temp2 < 0) || (temp1 < 0 && temp2 > 100);
    // }
    //
    // console.log("icyHot: " + icyHot(2, 120));

    // function sleepIn(weekday, vacation) {
    //     return (weekday === true && vacation === true) || (weekday === false && vacation === true) || (weekday === false && vacation === false);
    // }
    // console.log(sleepIn(true, false));

    // function monkeyTrouble(aSmile, bSmile) {
    //     return (aSmile && bSmile) || (!aSmile && !bSmile);
    // }
    //
    // console.log(monkeyTrouble(true, false));

    // function sumDouble(a, b) {
    //     if (a === b) {
    //         return ((a + b) * 2);
    //     } else {
    //         return (a + b);
    //     }
    // }
    //
    // console.log(sumDouble(2, 2));

    // function diff21(n) {
    //     if (n <= 21) {
    //         return 21 - n;
    //     } else {
    //         return 2 * (n - 21);
    //     }
    // }
    //
    // console.log(diff21(22));

    // function parrotTrouble(talking, hour) {
    //     return talking === true && (7 > hour || hour > 20);
    // }
    //
    // console.log(parrotTrouble(false, 6));


    // function makes10(a,b) {
    //     return a === 10 || b === 10 || a + b === 10;
    // }
    //
    // console.log(makes10(1, 9));

    // function nearHundred(n) {
    //     return (Math.abs(100 - n) <= 10) || (200 - n) <= 10;
    // }
    //
    // console.log("nearHundred: " + nearHundred(93));

    // function posNeg(a, b, negative) {
    //     if (a < 0 && b > 0 && negative === false) {
    //         return true;
    //     } else if (a > 0 && b < 0 && negative === false) {
    //         return true;
    //     } else if (a < 0 && b < 0 && negative === true) {
    //         return true;
    //     } else {
    //         return false;
    //     }
    // }
    //
    // console.log(("posNeg: " + posNeg(-4, -5, true)));

    function notString(str) {
        if (str === null || str === undefined || str.substring(0, 3) === 'not') {
            return str;
        }
        return 'not ' + str;
    }

    console.log("notString: " + notString("not bad"));




    function isOdd(number) {
        return number % 2 == 1;
    }

    console.log(isOdd(3));

    function isEven(number) {
        return number % 2 == 0;
    }

    console.log(isEven(4));

    function identity(input) {
        return input;
    }

    console.log(identity("hello"));

    function isFive(input) {
        return input == 5;
    }

    console.log("isFive: " + isFive("5"));

    function addFive(input) {
        return input + 5;
    }

    console.log(addFive(4));

    function isMultipleOfFive(input) {
        return input % 5 == 0;
    }

    console.log("isMultipleOfFive: " + isMultipleOfFive(20));

    function isThree(input) {
        return input == 3;
    }

    console.log(isThree(3));

    function isMultipleofThree(input) {
        return input % 3 == 0;
    }

    console.log(isMultipleofThree(81));

    function isMultipleOfThreeAndFive(input) {
        return input % 3 == 0 && input % 5 == 0;
    }

    console.log("isMultipleOfThreeAndFive: " + isMultipleOfThreeAndFive(30));

    function isMultipleOf(target, n) {
        return target % n == 0
    }

    console.log(isMultipleOf(45, 9));

    function isTrue(boolean) {
        return boolean === true || boolean !== true;
    }

    console.log("isTrue: " + isTrue(false));

    function isFalse(boolean) {
        return boolean === false && boolean !== false;
    }

    console.log("isFalse: " + isFalse(false));

    function isTruthy(input) {
        return input === true || input === false;
    }

    console.log("isTruthy: " + isTruthy("go"));

    function isFalsy(input) {
        return input === false && input === true;
    }

    console.log("isFalsy: " + isFalsy(false));


    function isVowel(letter) {
        return letter === "a" ||
            letter === "e" ||
            letter === "i" ||
            letter === "o" ||
            letter === "u" ||
            letter === "A" ||
            letter === "E" ||
            letter === "I" ||
            letter === "O" ||
            letter === "U";
    }


    console.log("isVowel: " + isVowel("U"));

    // This is NOT the most efficient method
    function isConsonant(letter) {
        return letter === "b" || letter === "c" || letter === "d" || letter === "f" ||
        letter === "g" || letter === "h" || letter === "j" || letter === "k" ||
        letter === "l" || letter === "m" || letter === "n" || letter === "p" ||
        letter === "q" || letter === "r" || letter === "s" || letter === "t" ||
        letter === "v" || letter === "w" || letter === "x" || letter === "y" ||
        letter === "z";
    }

    console.log("isConsonant: " + isConsonant("i"));

    // This is MUCH MORE efficient
    function isConsonant(letter) {
        return !(letter === "a") &&
            !(letter === "e") &&
            !(letter === "i") &&
            !(letter === "o") &&
            !(letter === "u") &&
            !(letter === "A") &&
            !(letter === "E") &&
            !(letter === "I") &&
            !(letter === "O") &&
            !(letter === "U");
    }

    console.log("isConsonant " + isConsonant("u"));

    // This is a prompt for future use...
    // var letterTest = prompt("Enter a letter.");

    function isCapital(letter) {
        return letter === letter.toUpperCase();
    }

    console.log("isCapital: " + isCapital("T"));

    // For use with above prompt...
    // console.log(letterTest + " isCapital: " + isCapital(letterTest));

    function notZero(input) {
        var input = input.toLowerCase()
        if (input === "zero") {
            return input === false;
        }
        return input != 0;
    }

    console.log("notZero: " + notZero("One"));
// })();