// (function(){
    "use strict";

// ******** BONUS Exercises *********

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
        return boolean;
    }

    console.log("isTrue: " + isTrue(true));

    function isFalse(boolean) {
        return boolean;
    }

    console.log("isFalse: " + isFalse(false));

    function isTruthy(input) {
        return input === false;
    }

    console.log("isTruthy: " + isTruthy("go"));

    function isFalsy(input) {
        return input === true;
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
// })();