"use strict";

// # Map, Filter, and Reduce

// Use the code below to complete the following problems


const fruits = ["cantaloupe", "orange", "date", "elderberry", "ugli fruit", "pineapple"];

const customers = [
    {
        name: "Fred",
        age: 58,
        occupation: "Police Officer",
        noOfPurchases: 4
    },
    {
        name: "Samantha",
        age: 54,
        occupation: "Teacher",
        noOfPurchases: 18
    },
    {
        name: "Charles",
        age: 38,
        occupation: "Librarian",
        noOfPurchases: 9
    }
];

const pets = [
    {
        name: 'Bud',
        age: 2,
        breed: 'Pug'
    },
    {
        name: 'Gabby',
        age: 10,
        breed: 'Retriever'
    },
    {
        name: 'Fred',
        age: 1,
        breed: 'Lab'
    },
    {
        name: 'Bowser',
        age: 2,
        breed: 'Pug'
    }
];

const family = [
       {
           name: "Pam",
           gender: "female",
           age: 29,
       },
           {
           name: "Amelie",
           gender: "female",
           age: 10,
       },
           {
           name: "Justin",
           gender: "male",
           age: 32,
       },
   ];


// Use map, filter, and reduce to:
//
// 1. Create an array of the first letters of each fruit

// let firstLetters = fruits.reduce((list, fruit) => {
//     for (let fruit of fruits) {
//         // console.log(fruit[0]);
//         list.add(fruit[0]);
//     }
//
//     return list;
//
// }, new Set);
// // console.log(firstLetters);
//
// firstLetters = Array.from(firstLetters);
//
// // console.log(firstLetters);
//
// /////////////////////////////////////////
// // Alternate (more efficient) solution //
// /////////////////////////////////////////
// let codeup = fruits.map((fruit) => {
//     return fruit[0];
// })
//
// console.log(codeup);

//
// 1. Create array of user objects based on the customers array of objects (each
// user object should just have name and age properties)

// let nameAge = customers.reduce((total, currentCustomer) => {
//     let customerNames = currentCustomer.name;
//     for (let customer of customers) {
//         total.add(customerNames);
//         // console.log(customer.name);
//     }
//
//     return total;
// }, new Set);
//
// nameAge = Array.from(nameAge);
// console.log(nameAge);

//
// 1. Create an array of civil servant customers (teachers and police officers)
// containing the same properties as the objects on the customers objects
//
// SKIP THIS ONE
//
// 1. Determine the average age of all the customers
// let customerAge = customers.reduce((total, customer) => {
//     // console.log(customer.age);
//     return total + customer.age
//
//
// }, 0);
//
// // console.log(averageAge);
//
// let averageAge = customerAge / customers.length;
//
// console.log(`The average age of all of the customers is: ${averageAge}`);


              ////////////////////////
//////////////////    UPLOADED    /////////////////
              ////////////////////////
// 1. Create a function `makeSuperPet()` that takes in the pets array as input and
// returns a single pet object with the following shape...


// ```js
//     {
//         name: ALL_PET_NAMES_CONCATENATED_INTO_A_SINGLE_STRING,
//         age: THE_TOTAL_OF_ALL_PET_AGES,
//         breed: THE_FIRST_LETTERS_OF_ALL_PET_BREEDS_CONCATENATATED_INTO_A_SINGLE_STRING
//     }
//     ```
//
// const makeSuperPet = function(array) {
//     const petNames = array.reduce((total, pet) => {
//         // console.log(pet.name);
//         return total + pet.name;
//     }, '');
//
// // console.log(petNames);
//
//     const petAges = array.reduce((total, pet) => {
//         // console.log(pet.age);
//         return total + pet.age;
//     }, 0);
//
// // console.log(petAges);
//
//     const firstLetters = array.reduce((total, pet) => {
//         // console.log(pet.breed[0]);
//         return total + pet.breed[0];
//     }, '');
//
// // console.log(firstLetters);
//
//     let returnObj = function(name, age, breed){
//         return {
//             name: name,
//             age: age,
//             breed: breed,
//         }
//     }
//
//     return returnObj(petNames, petAges, firstLetters);
//
// }
//
// console.log(makeSuperPet(pets));

             ////////////////////////
//////////////////    UPLOADED    /////////////////
             ////////////////////////
// 1. Create a function that takes in an array of pets and returns an array of the
// length of first names for pugs only. Your output for the given input should
// be [3, 6] for 'Bud' and 'Bowser'
//

// const nameLengthArray = (array) => {
//     const petBreed = array.filter((pet) => {
//         return pet.breed === 'Pug';
//     });
//
//
//     // let nameLength = petBreed.reduce((total, dog) => {
//     //     let dogNames = dog.name.length;
//     //     for (let pug of petBreed) {
//     //         total.add(dogNames);
//     //     }
//     //     return total;
//     // }, new Set);
//     //
//     // nameLength = Array.from(nameLength);
//     //
//     // return nameLength
// }

// console.log(nameLengthArray(pets));


//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!//
///////////////////////////////////////////////////
////////////////// NEED TO UPLOAD /////////////////
///////////////////////////////////////////////////
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!//
// 1. Create a function `getFemaleFamilyMembers()` that when given the family
// variable as an argument, returns an array of female family member names
//
// const getFemaleFamilyMembers = (array) => {
//     const femaleMembers = array.filter((female) => {
//         return female.gender === 'female';
//     });
//     // console.log(femaleMembers);
//
//     // femaleMembers.forEach(function(femaleMember) {
//     //     console.log(femaleMember.name);
//     // })
//     let newArray = [];
//     for (let femaleMember of femaleMembers) {
//         // console.log(femaleMember.name);
//         newArray.push(femaleMember.name);
//     }
//
//
//
//
//
//     return newArray;
//
// }
//
// console.log(getFemaleFamilyMembers(family));




//
// 1. Create a function `makeLongPetString()` that when given the variable of pets,
//     returns a string of all property values with dashes separating each property
// value

// // const makeLongPetString = (array) => {
//     const petNames = pets.map(pet => pet.name);
//     // console.log(petNames);
//
//     const petAges = pets.map(pet => pet.age);
//     // console.log(petAges);
//
//     const petBreeds = pets.map(pet => pet.breed);
//     // console.log(petBreeds);
//
//     let newArray = [petNames, petAges, petBreeds]
//     // console.log(newArray);
//
//     newArray = newArray.flat();
//     // console.log(newArray);
//
//     newArray = newArray.join('-');
//     console.log(newArray);
// // }


// const petOne = pets.filter();
//
// console.log(petOne);

// const threeOrMore = users.filter(user => user.languages.length >= 3);
// // console.log(threeOrMore);

// const petObjects = pets.reduce((list, currentPet) => {
//     let petList = list + currentPet.breed;
//     return petList;
// }, "");

// console.log(petObjects);

//
// 1. Create a function that when given an array of first names, returns an array
// of the same names with a last name of Smith

    // ```
    // // input = ['Sally', 'Fred', 'Steve']
    // // output = ['Sally Smith', 'Fred Smith', 'Steve']
    // ```


//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!//
///////////////////////////////////////////////////
////////////////// NEED TO UPLOAD /////////////////
///////////////////////////////////////////////////
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!//
// 1. Create a function that when given an array of numbers, return the sum of
// the even numbers

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const sumOfAllEvenNumbers = (array) => {
    const evenNumbers = array.filter(number => {
        return number % 2 === 0;
    })
    // console.log(evenNumbers);

    const sumOfEvens = evenNumbers.reduce((total, eachEven) => {
        return total + eachEven;
    }, 0);
    // console.log(sumOfEvens);

    return sumOfEvens;
};

console.log(sumOfAllEvenNumbers(numbers));

//
// 1. Create a function that when given an array of numbers, return the sum of all
// numbers evenly divisible by 10
//
// 1. Create a function that when given an array of names, return a string of all
// the first letters of each name
//
// 1. Create a function that when given an array of values, returns an array of
// only the truthy values
//
// 1. Create a function that when given an object, returns the property values as
// an array of elements
//
// 1. Create a function that when given an object, returns the property values as
// an array of elements
//
// 1. Create a function that when given three arguments: a min num, a max num, an
// array of nums will return the array of nums that are only between the min
// and max values, inclusive
//
// 1. Create a function that when given an array of strings, returns an array of
// objects with properties for the given string value and the length of the
// string and the string without vowels (not including y)
//
// ---
//
//     Given the following:


const users = [
  {
    id: 1,
    name: 'ryan',
    email: 'ryan@codeup.com',
    languages: ['clojure', 'javascript'],
  },
  {
    id: 2,
    name: 'luis',
    email: 'luis@codeup.com',
    languages: ['java', 'scala', 'php'],
  },
  {
    id: 3,
    name: 'zach',
    email: 'zach@codeup.com',
    languages: ['javascript', 'bash'],
  },
  {
    id: 4,
    name: 'fernando',
    email: 'fernando@codeup.com',
    languages: ['java', 'php', 'sql'],
  },
  {
    id: 5,
    name: 'justin',
    email: 'justin@codeup.com',
    languages: ['html', 'css', 'javascript', 'php'],
  },
];


// 1. Use `.reduce` to transform the array into an object where the object's keys
// are ids and the values are objects that represent each user
// 1. Use `.reduce` to get a unique list of the languages the codeup instructors
// know

const salesPeople = [
    {name: 'Jim Halpert', sales: 100},
    {name: 'Dwight Schrute', sales: 50},
    {name: 'Andy Bernard', sales: 150},
];



// function countWords(sentence) {
//     const words = sentence.split(' '); // transform a sentence into an array of words
//
//     const wordCountObject = words.reduce((wordCounts, word) => {
//         if (typeof wordCounts[word] === 'undefined') {
//             // if the word is not yet present in our object, set it's value to 1
//             wordCounts[word] = 1;
//         } else {
//             // otherwise increment the existing count
//             wordCounts[word] += 1;
//         }
//         return wordCounts;
//     }, {}); // start with an empty object
//
//     return wordCountObject;
// }
//
// const finalCount = countWords('Mary had a little lamb little lamb little lamb');
//
// console.log(finalCount);



//
// const myPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         if (Math.random() > 0.5) {
//             resolve();
//         } else {
//             reject();
//         }
//     }, 1500);
//
// }).then(() => console.log('resolved!')).catch(() => console.log('rejected!'));
// console.log(myPromise); // a pending promise



// // function makeRequest() {
// const request = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (Math.random() > 0.5) {
//                 resolve('Here is your data: ...');
//             } else {
//                 reject('Network Connection Error!');
//             }
//         }, 1500);
//     })
//         .then(data => console.log('Promise resolved!', data))
//         .catch(error => console.log('Promise rejected!', error));
//     console.log(request); // pending promise
// // }
//
// // const request = makeRequest();
//
//
// // if resolved, will log "Promise resolved!" and "Here is your data: ..."
//
// // if rejected, will log "Promise rejected!" and "Network Connection Error!"

// Promise.resolve('one').then((one) => {
//     console.log(one);
//     return 'two';
// }).then((two) => {
//     console.log(two);
//     return 'three';
// }).then((three) => {
//     console.log(three);
// });


