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
        return input === 5;
    }

    console.log(isFive(5));

    function addFive(input) {
        return input + 5;
    }

    console.log(addFive(4));

    function isMultipleOfFive(input) {
        return input % 5 === 0;
    }

    console.log(isMultipleOfFive(20));

    function isThree(input) {
        return input === 3;
    }

    console.log(isThree(3));

    function isMultipleofThree(input) {
        return input % 3 === 0;
    }

    console.log(isMultipleofThree(81));

    function isMultipleOfThreeAndFive(input) {
        return input % 3 === 0 && input % 5 === 0;
    }

    console.log(isMultipleOfThreeAndFive(30));

    function isMultipleOf(target, n) {
        return target % n === 0
    }

    console.log(isMultipleOf(45, 9));

    function isTrue(boolean) {
        return boolean;
    }

    console.log(isTrue());

// })();