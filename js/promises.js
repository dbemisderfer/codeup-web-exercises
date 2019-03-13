// const makePromise = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             let number = Math.random();
//
//             console.log(`Our number is ${number}`);
//             if (number > 0.5) {
//                 resolve(`Our number is ${number}`);
//             } else {
//                 reject(`Our number is ${number}`);
//             }
//         }, 1500);
//     })
//         .then((data) => console.log('resolved!', data))
//         .catch((error) => console.log('rejected!', error));
//
// }
//
// makePromise();

// setTimeout(() => {
//     console.log(myPromise);
// }, 2000);

// fetch('https://api.github.com/users/dwightbemisderfer')
//     .then( data => {
//         let info = data.json();
//         console.log(info.login)
//     })
//     .catch(error => console.error(error));


// 2. Write a function named wait that accepts a number as a parameter, and returns
// a promise that resolves after the passed number of milliseconds.

// const wait = (milliseconds) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             // let number = Math.random();
//
//             resolve(`You'll see this after ${milliseconds/1000} second(s).`);
//             // if (number > 0.5) {
//             //     resolve(`Our number is ${number}`);
//             // } else {
//             //     reject(`Our number is ${number}`);
//             // }
//         }, milliseconds);
//     }).then((data) => console.log(data));
//         // .then((data) => console.log('resolved!', data))
//         // .catch((error) => console.log('rejected!', error));
//
// }
//
// wait(9000);


// 2. Create a function that accepts a github username, and returns a promise that
// resolves with the date of the last commit that user made. Reference the github
// api documentation to achieve this.

const lastCommit = (username) => {
    // return new Promise((resolve, reject) => {
    //     resolve(`Last commit made by ${username} was: `)
    // })

    return fetch(`https://api.github.com/users/${username}/events`, {headers: {'Authorization': `token ${GITHUB_TOKEN}`}})
        .then(data => {
            // console.log(data);
            return data.json();
        })
        .then((data) => {
            // console.log(data);
            return data.filter((event) => {
                return event.type === "PushEvent"
            })
        })
        .then((data) => {
            // console.log(data[0].created_at);
            return data[0].created_at;
        })
}


lastCommit('dbemisderfer').then((data) => console.log(data));

