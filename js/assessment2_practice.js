
"use strict";


// *****************************************************
// ***************  Instructor's solution **************
// *****************************************************
//
// ------------- PRACTICE 1
// Write a function, filterNumbers() that takes in an array of mixed data types and returns an array of only the numbers type in ascending order.
//     Example input: ["fred", true, 5, 3]
// Example output: [3, 5]
var arr = ["fred", true, 5, 3];

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

// *****************************************************
// ***************  Instructor's solution **************
// *****************************************************
//
// Instructor's solution
// ------------- PRACTICE 2
//
// Write a function, getOlder() that takes in array of dog objects and increases the value of the age properties by 1.
//
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

function getOlder(dogs) {
    dogs.forEach(function(dog) {
        dog.age += 1;
    });
}

getOlder(dogs);

// to test the change
dogs.forEach(function(dog) {
    console.log(dog.age);
});


// My mess
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


// *****************************************************
// ***************  Instructor's solution **************
// *****************************************************
//
// ------------- PRACTICE 3
//
// Write a function, washCars() that takes in a array of car objects and sets the boolean properties of isDirty to false
//
var cars = [
    {
        make: 'Volvo',
        color: 'red',
        year: 1996,
        isDirty: true
    },
    {
        make: 'Toyota',
        color: 'black',
        year: 2004,
        isDirty: false
    },
    {
        make: 'Ford',
        color: 'white',
        year: 2007,
        isDirty: true
    }
];

function washCars(cars) {
    cars.forEach(function(car) {
        car.isDirty = false;
    });
}

washCars(cars);

// to test the change
cars.forEach(function(car) {
    console.log(car.isDirty);
});

// Example output:
//     [
//         {
//             make: 'Volvo',
//             color: 'red',
//             year: 1996,
//             isDirty: false // changed to false
//         },
//         {
//             make: 'Toyota',
//             color: 'black',
//             year: 2004,
//             isDirty: false // stays the same
//         },
//         {
//             make: 'Ford',
//             color: 'white',
//             year: 2007,
//             isDirty: false // changed to false
//         }
//     ]



// My mess
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


// *****************************************************
// ***************  Instructor's solution **************
// *****************************************************
//
// ------------- PRACTICE 4
//
// Write a function, adminList() that takes in an array of user objects and returns a count of all admins based on the isAdmin property. Refactor to return an array of admin-only user emails. Refactor again to return an array of user objects that are admins.
//
//     Example Input: [
//     {
//         isAdmin: true,
//         email: 'user1@email.com'
//     },
//     {
//         isAdmin: true,
//         email: 'user2@email.com'
//     }
//     {
//         isAdmin: false,
//         email: 'user3@email.com'
//     }
// ];


// version 1

function adminList(users) {
    var output = 0;
    users.forEach(function(user) {
        if (user.isAdmin) {
            output += 1;
        }
    });
    return output;
}

// version 2

function adminList(users) {
    var output = [];
    users.forEach(function(user) {
        if (user.isAdmin) {
            output.push();
        }
    });
    return output;
}

// version 3


function adminList(users) {
    var output = [];
    users.forEach(function(user) {
        if (user.isAdmin) {
            output.push(user);
        }
    });
    return output;
}


// Example Output (before refactor): 2
//
// Example Output (after 1st refactor): [
//     'user1@email.com',
//     'user2@email.com'
// ]
//
// Example Output (after 2nd refactor): [
//     {
//         isAdmin: true,
//         email: 'user1@email.com'
//     },
//     {
//         isAdmin: true,
//         email: 'user2@email.com'
//     }
// ]


// My mess
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

// *****************************************************
// ***************  Instructor's solution **************
// *****************************************************
//
// ------------- PRACTICE 5
//
// Create a function, makeSandwhichObjects() that takes in two array of strings, breads and fillings and returns an array of sandwhichObjects that contain properties for bread and filling and values correspond to the same order of the two passed in arrays. Assume the two array inputs are the same length.
//
//     Example Input:
//
var breads  = [
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

// makeSandwichObjects(breads, fillings) // example call to the function

var testOutput = [
    {
        bread: "white",
        filling: "pb&j"
    },
    {
        bread: "wheat",
        filling: "ham"
    },
    {
        bread: "rye",
        filling: "cheese steak"
    },
    {
        bread: "white",
        filling: "tuna"
    }
];

function makeSandwichObjects(breads, fillings) {
    var sandwiches = [];
    breads.forEach(function(bread, index) {
        sandwiches.push({
            bread: bread,
            filling: fillings[index]
        });
    });
    return sandwiches;
}


console.log(makeSandwichObjects(breads, fillings));


// Mindy Tillman's solution

// var breads = [
//     "white",
//     "wheat",
//     "rye",
//     "white"
// ];
//
// var fillings = [
//     "pb&j",
//     "ham",
//     "cheese steak",
//     "tuna"
// ];
//
// function makeSandwichObjects(breads, fillings) {
//     var sandwichObjects = [];
//
//
//     for (var i = 0; i < breads.length; i++) {
//         var newSandwich = {};
//         newSandwich.bread = breads[i];
//         newSandwich.filling = fillings[i];
//         sandwichObjects.push(newSandwich);
//     }
//
//     return sandwichObjects;
// }
//
// console.log(makeSandwichObjects(breads, fillings));


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