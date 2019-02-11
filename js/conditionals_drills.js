// (function(){
    "use strict";

    // WORK IN PROGRESS...
    // function makeJustinMessage(inputJustin) {
    //     switch(inputJustin) {
    //     case "justin":
    //         console.log("It's Justin!");
    //         break;
    //     case inputJustin === inputJustin.includes(!isNaN(+inputJustin)):
    //         console.log("INVALID INPUT");
    //         break;
    //     default:
    //         console.log("It's not Justin.");
    //         break;
    //     }
    //     return inputJustin;
    // }
    //
    // makeJustinMessage("d1ustin");

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