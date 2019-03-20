"use strict";
// In class exercises
// // n is the value of each array element
// const numbers = [1, 2, 3, 4, 5];
// const newNumbers = numbers.map(n => n + numbers.indexOf(n));
// console.log(newNumbers);
//
//
// const binary = [1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0];
// const ones = binary.filter(n => (n == true));
// const zeroes = binary.filter(n => (n == false));
// console.log(ones);
// console.log(zeroes);
//
// // 0 is the default value and is, therefore, not required
// numbers.reduce((total, currentNumber => total + currentNumber), 0);

const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

// 2. Use .filter to create an array of user objects where each user object has at
// least 3 languages in the languages array.
const threeOrMore = users.filter(user => user.languages.length >= 3);
// console.log(threeOrMore);

// 3. Use .map to create an array of strings where each element is a user's email
// address.
const emails = users.map(user => user.email);
// console.log(emails);

// 4. Use reduce to get the total years of experience from the list of users. Once
// you get the total of years you can use the result to calculate the average.
const sumOfYears = (total, user) => total + user.yearsOfExperience;
const totalYears = users.reduce(sumOfYears, 0);
// console.log(totalYears);


const averageYears = totalYears / users.length;
// console.log(`Average number of years: ${averageYears}`);

// 5. Use reduce to get the longest email from the list of users.
const longestEmail = users.reduce(function(total, user) {
    if (user.email.length > total.length) {
        total = user.email;
    } return total
}, '');
// console.log(longestEmail);

// Instructor solution
// const findLongest = (prev, current) => {
//     let myString = current.email;
//     if (myString.length > prev.length) {
//         return myString;
//     } else {
//         return prev;
//     }
// };
// const theLongestEmail = users.reduce(findLongest, '');
// console.log(theLongestEmail);

// OR...
const theLongestEmail = users.reduce((prev, current) => {
    let myString = current.email;
    if (myString.length > prev.length) {
        return myString;
    } else {
        return prev;
    }
}, '');

// console.log(theLongestEmail);






// 6. Use reduce to get the list of user's names in a single string. Example: Your
// instructors are: ryan, luis, zach, fernando, justin.
const userNames = users.reduce((totalString, currentUser) => `${totalString} ${currentUser.name},`, '');
// console.log(userNames);
const names = userNames.trim().split(',').join('').split(' ').join(', ');
// console.log(names);


// Instructor solution (NOTE: All parameters included!!!)
const compileList = (list, user, index, all) => { // Like total, element, index, arrays
    let myList = user.name;
    // console.log(list);
    if (index < all.length) {
        return list + myList + ', ';
    }
}

const listOfNames = users.reduce(compileList, "Your instructors are: ");
// console.log(listOfNames)

/////////////////////////////////////////////////
///////// BONUS Map, Filter, and Reduce /////////
/////////////////////////////////////////////////
// 1. Use reduce to get the unique list of languages from the list of users.

function getLanguages(array) {
    const languageList = array.reduce(function(total, user) {
        // if (typeof total[user.languages] === 'undefined') {
        //     total[user.languages] = 1;
        // } else {
        //     total[user.languages] += 1;
        // }
        return `${total},${user.languages}`;
    }, '');
    return languageList;
}



function makeList(userString) {
    let userArray = [];
    userArray = userString.split(',');
    userArray.shift();

    return userArray;

}

// console.log(makeList(getLanguages(users)));

function unique(arr) {
    var hash = {}, result = [];
    for (var i = 0; i < arr.length; i++)
        if (!(arr[i] in hash)) { //it works with objects! in FF, at least
            hash[arr[i]] = true;
            result.push(arr[i]);
        }
    return result;
}

// console.log(unique(makeList(getLanguages(users))));


//////////////////////////////////////////////////////////
///////////// Cory Musick's solution /////////////////////
//////////////////////////////////////////////////////////

// users.forEach(function(user) {
//     console.log(user.languages.length);
// })


const langList = users.reduce((list, user) => {
    for (let i = 0; i < user.languages.length; i++){
        if (list.indexOf(user.languages[i]) < 0){
            list.push(user.languages[i])
        }
    }
    return list;
}, []);

// console.log(langList);


//////////////////////////////////////////////////////////
///////////// Instructor solution #1 /////////////////////
//////////////////////////////////////////////////////////

const linguages = users.reduce((list, user) => { // list = accumulators
    let langs = user.languages;
    // console.log(langs);
    for (let lang of langs) {
    // .add is like .push, but for math Sets
        list.add(lang);
    }

    // Same as a forEach loop
    // langs.forEach(function(lang) {
    //     list.push(lang); // Could use .push with [], but will not return all unique values
    // })                   // Instead, use .add and new Set

    return list;
}, new Set); // Set is used here instead of {}, because .add will only push to Set
console.log(linguages);
// console.log(Array.from(linguages).sort()); // Array.from turns Set objects into arrays


//////////////////////////////////////////////////////////
///////////// Instructor solution #2 /////////////////////
//////////////////////////////////////////////////////////
const listOfLanguages = (list, user) => {
    list.push(user.languages)
    return list;

};
// console.log(listOfLanguages);

let languages = users.reduce(listOfLanguages, []);
// console.log(languages);
//
// //flattens out Array of Arrays into an Array of Strings
languages = languages.flat();
// console.log(languages);
//
//
// // Takes in ALL values and creates a list object of only UNIQUE values!!!!!!!!
languages = new Set(languages);
// console.log(languages);
//
//
// // Turns Set object back into an Array
languages = Array.from(languages);
// console.log(languages);

// Sorts array list
languages = languages.sort();
// console.log(languages);


// function getLanguages(array) {
//     const languageList = array.reduce(function(total, user) {
//         if (typeof total[user.languages] === 'undefined') {
//             total[user.languages] = 1;
//         } else {
//             total[user.languages] += 1;
//         }
//         return total;
//     }, {});
//     return languageList;
// }
//
// console.log(getLanguages(users));



// console.log(total);
