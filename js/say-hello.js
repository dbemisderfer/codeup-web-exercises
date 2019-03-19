// [Import]
// const sayHello = (input) => input;

// Instructor solution [Import]
// export const sayHello = () => {
//     return "Nice message"
// }

// OR...
const sayHello = () => {
    return "Nice message"
}

export default {sayHello}










// [Require]
// export default sayHello;

// module.exports = sayHello;



const sayHello = () => {
    return "Nice message"
}
//
// // Instructor solution [Require]
module.exports.newBinding = sayHello;
