// (function() {
    "use strict";

    // create a circle object
    var circle = {
        radius: 3,

        getArea: function () {
            // TODO: complete this method
            // hint: area = pi * radius^2
            var area = (Math.PI * Math.pow(this.radius, 2));

            return area; // TODO: return the proper value
        },

        logInfo: function (doRounding) {
            // TODO: complete this method.

            if (doRounding) {
                var rounded = Math.round(this.getArea());
                console.log("Area of a circle with radius: " + this.radius + ", is: " + rounded);
            } else {
                var notRounded = this.getArea();
                console.log("Area of a circle with radius: " + this.radius + ", is: " + notRounded);
            };
            // If doRounding is true, round the result to the nearest integer.
            // Otherwise, output the complete value
        }
    };


// log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);

    console.log("=======================================================");
    // TODO: Change the radius of the circle to 5.
    circle.radius = 5;
    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);

    // For a bonus, create a MyMath object, add some of the properties and methods from
    // the Math object to it, and also add some of your own, like MyMath.FAVORITE as your
    // favorite number. Also create a MyMath.roundPi(digits) which returns PI rounded to
    // a given number of digits.

    // Add a MyMath.randomCircle() method which picks a random radius and writes output
    // similar to “A circle of radius 47 has an area of 6939.77”

// })();
