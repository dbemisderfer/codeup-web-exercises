
"use strict";
// Write a function, filterNumbers() that takes in an array of mixed data types and returns an array of only the numbers type in ascending order.
//     Example input: ["fred", true, 5, 3]
// Example output: [3, 5]
var arr = ["fred", true, 5, 3];

// Instructor solution

// function filterNumbers(arr) {
//     var output = [];
//     //
//     // !!!!!!!!!  FUNCTION TEMPLATE  !!!!!!!!!
//     //
//     return output;
// }

function filterNumbers(arr) {
    var output = [];

    // loop through array and delete non-numbers

    for (var i = 0; i < arr.length; i += 1) {
        console.log(arr[i]);
        if (typeof arr[i] === "number") {
            output.push(arr[i]);
        }

        // arrange number in chronological order
        output.sort();
    }

    return output;
}

console.log(filterNumbers(["fred", true, 5, 3]))


// My mess
// function filterNumbers() {
// var newArray = [];
// console.log(newArray);
// inputs.forEach(function(input, i) {
//     if (input[i] === !isNaN) {
//         newArray += newArray.push(input[i].value);
//
//     };
//     console.log(newArray);
// });


// return newArray;


// filterNumbers();
//
// newArray.sort(function(a, b){return a - b});
// };

// var dogs = [
//     {
//         name: "Chompers",
//         breed: "Pug",
//         age: 7
//     },
//     {
//         name: "Freddy",
//         breed: "Lab",
//         age: 4
//     },
//     {
//         name: "Mr. Pig",
//         breed: "Mastif",
//         age: 10
//     }
// ];
//
//
// function getOlder(dogs) {
//     dogs.forEach( function(dog) {
//         dog.age = dog.age + 1;
//     });
//
// }
//
// getOlder(dogs);
// console.log(dogs);

// var cars = [
//     {
//         make: 'Volvo',
//         color: 'red',
//         year: 1996,
//         isDirty: true
//     },
//     {
//         make: 'Toyota',
//         color: 'black',
//         year: 2004,
//         isDirty: false
//     },
//     {
//         make: 'Ford',
//         color: 'white',
//         year: 2007,
//         isDirty: true
//     }
// ]
//
// function washCars() {
//     cars.forEach(function(car) {
//         if (car.isDirty === true) {
//             return car.isDirty = false
//         }
//     });
// }
// washCars();
// console.log(cars);

// var users = [
//     {
//         isAdmin: true,
//         email: 'user1@email.com'
//     },
//     {
//         isAdmin: true,
//         email: 'user2@email.com'
//     },
//     {
//         isAdmin: false,
//         email: 'user3@email.com'
//     }
// ];



// function adminList() {
//     var admin = [];
//     var trueAdmins = [];
//     for (var i = 0; i < users.length; i++) {
//         if (users[i].isAdmin) {
//             // admin.unshift("true");
//             admin.push(users[i].email); //store in admin[]
//             trueAdmins.push(users[i]);//store in trueAdmins[]
//         }
//
//     }
//     console.log(admin)
//     console.log(trueAdmins)
// }
// adminList();

// function isAdmin(users) {
//     var admin = [];
//     var trueAdmins = [];
//     users.forEach(function(user) {
//         if (user.isAdmin === true) {
//             // console.log(user)
//             admin.push(user.email);
//             console.log(admin);
//             trueAdmins.push(user);
//             console.log(trueAdmins);
//         }
//     });
// }
//
// isAdmin(users);
// // console.log(users);

var breads = [
    "white",
    "wheat",
    "rye",
    "white"
];

var fillings = [
    "pb&j",
    "ham",
    "cheese steak",
    "tuna"
];

function makeSandwichObjects(breads, fillings) {
    var sandwichObjects = [];


    for (var i = 0; i < breads.length; i++) {
        var newSandwich = {};
        newSandwich.bread = breads[i];
        newSandwich.filling = fillings[i];
        sandwichObjects.push(newSandwich);
    }

    return sandwichObjects;
}

console.log(makeSandwichObjects(breads, fillings));


// // for vs. forEach
//
// names.forEach(function(name) {
//     console.log(name);
// });
//
// for (var i = 0; i < names.length; i += 1) {
//     console.log(names[i]);
// }
//
// // while - unknown number of iterations and the iteration is based on some condition
//
// do {
//     console.log(names[i]);
//     i += 1;
// } while (i < names.length) {
//
// }