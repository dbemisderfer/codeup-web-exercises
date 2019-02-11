// (function(){
    "use strict";

    // WORK IN PROGRESS...
    function makeJustinMessage(inputJustin) {
        var inputJustin = inputJustin.toLowerCase();
        if (!isNaN(inputJustin) || inputJustin.trim() === "") {
            console.log("INVALID INPUT");
        } else if (inputJustin === "justin") {
            console.log("It's Justin!");
        } else {
            console.log("It's not Justin.");
        }
        return inputJustin;

    }

    makeJustinMessage("justin22");

// Using switch statement

function stopLight(lightColor) {
    var lightColor = lightColor.toLowerCase();
    switch(lightColor) {
        case "red":
            console.log("STOP!");
            break;
        case "yellow":
            console.log("SLOW DOWN!");
            break;
        case "green":
            console.log("GO!");
            break;
        default:
            console.log("That's not a valid option.");
        return lightColor;
    }
}

stopLight("yellow");

// Using if/else if/else

function stopLight(lightColor) {
    var lightColor = lightColor.toLowerCase();
    if (lightColor === "red") {
        console.log("STOP!");
    } else if (lightColor === "yellow") {
        console.log("SLOW DOWN!");
    } else if (lightColor === "green") {
        console.log("GO!");
    } else {
        console.log("That is not a valid input.");
    }
    return lightColor;
}

console.log(stopLight("GrEeN"));










































// })();