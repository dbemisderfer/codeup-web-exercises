"use strict";
function gooseFilter (birds) {
    var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
    // var birds = [];
    // var output = [];
    for (String bird : birds) {
        for (String goose : geese) {
            if (!bird === goose) {
                output.add(bird);
            }
        }

    }
    return output;
    // return an array containing all of the strings in the input array except those that match strings in geese


    /////////////////////////////////
    /////////// L1:SetAlarm /////////
    /////////////////////////////////
    // Write a function named setAlarm which receives two parameters.
    // The first parameter, employed, is true whenever you are employed
    // and the second parameter, vacation is true whenever you are on
    // vacation. The function should return true if you are employed
    // and not on vacation (because these are the circumstances under
    // which you need to set an alarm). It should return false otherwise.

    function setAlarm(employed, vacation) {
        return employed === true && vacation === false;
    }

    ////// Alternate solutions /////////////////
    // const setAlarm = (employed, vacation) => employed && !vacation;

    ////// or... //////////////////
    // const setAlarm = (employed, vacation) => employed > vacation; // true(1) > false(0)

    console.log(setAlarm(true, true)); //false
    console.log(setAlarm(false, true)); //false
    console.log(setAlarm(false, false)); //false
    console.log(setAlarm(true, false)); //true

};