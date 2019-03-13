const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        let number = Math.random();

        console.log(`Our number is ${number}`);
        if (number > 0.5) {
            resolve();
        } else {
            reject();
        }
    }, 1500);
})
    .then(() => console.log('resolved!'))
    .catch(() => console.log('rejected!'))