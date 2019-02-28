$(document).ready(function() {
    "use strict";

    // var codes = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65, 13];

    // var codes = "3838404037393739666513";


        // var codes = "38384013";
        //
        // var enterCode = "";
        // $(document).keyup(function(event) {
        //
        //     enterCode += ("" + event.keyCode);
        //     // console.log(enterCode);
        //     if (enterCode === codes) {
        //         alert('Good Job!');
        //     }
        //     // console.log(codes.indexOf(enterCode))
        //     if (!codes.indexOf(enterCode)) return;
        //     // console.log(enterCode);
        //     enterCode = "";
        //     console.log(enterCode);


        var codes = "38384040";

        var enterCode = "";

        $(document).keyup(function(event) {

            enterCode += event.keyCode;
            console.log(enterCode);
            if (enterCode === codes) {
                alert('Good Job!');
            } else if (!codes.indexOf(enterCode)) {
                return;
            }
            enterCode = "";
            // // console.log(enterCode);





        // if (event.keyCode === 13 || 37 || 38 || 39 || 40 || 65 || 66){
        //     enterCode.push(event.keyCode);
        //     console.log(enterCode);
        // }

        // console.log(event.keyCode);
        // if (event.keyCode !== 13 || 37 || 38 || 39 || 40 || 65 || 66) {
        //     enterCode = [];
        //     console.log(enterCode);
        // }


    });

    // $('#textfield').keydown(function(event) {
    //     var enterCode = [];
    //     // console.log(event.keyCode);
    //     if (event.keyCode === 66) {
    //         alert("You pushed RETURN!")
    //     }
    // });

});