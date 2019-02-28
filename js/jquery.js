$(document).ready(function() {
    "use strict";

    var codes = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65, 13];

    // $(document).keyup(function(event){
    //     console.log(event.keyCode);
    // });
    var enterCode = [];
    $(document).keydown(function(event) {

        // console.log(event.keyCode);
        if (event.keyCode === 13 || 37 || 38 || 39 || 40 || 65 || 66) {
            enterCode.push(event.keyCode);
            console.log(enterCode);
        } else {
            enterCode.pop();
        }


    });

    // $('#textfield').keydown(function(event) {
    //     var enterCode = [];
    //     // console.log(event.keyCode);
    //     if (event.keyCode === 66) {
    //         alert("You pushed RETURN!")
    //     }
    // });



});