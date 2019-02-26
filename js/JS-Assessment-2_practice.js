"use strict";

var inputs = ["fred", true, 5, 3];
// function filterNumbers() {
    var newArray = [];
    console.log(newArray);
    inputs.forEach(function(element, i, array) {
        if (inputs[i] === !isNaN) {
            newArray += newArray.push(input[i]);

        });

        console.log(newArray);

        // return newArray;

    // })

    // filterNumbers();

    // newArray.sort(function(a, b){return a - b});
};

var dogs = [
    {
        name: "Chompers",
        breed: "Pug",
        age: 7
    },
    {
        name: "Freddy",
        breed: "Lab",
        age: 4
    },
    {
        name: "Mr. Pig",
        breed: "Mastif",
        age: 10
    }
];

function getOlder(dog) {
    dogs.forEach(function(element, index, array){
        element.age = element.age + 1;
    });
}

(getOlder());
console.log(dogs);

// function getOlder(dog) {
//     dogs.forEach( function(dog) {
//         dog.age = dog.age + 1;
//     });
//
// }
//
// getOlder();
// console.log(dogs);


