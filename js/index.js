// [Import]
// import sayHello from './say-hello.js';

//Instructor solution [Import]
// import {sayHello} from './say-hello.js'
// console.log(sayHello());
// View in browser console

// OR...
import banana from './say-hello.js'
console.log(banana.sayHello());
// View in browser console











// [Require]
// const sayHello = require('./say-hello.js');

// console.log(sayHello('Hello there.'));

// Instructor solution [Require]
const message = require('./say-hello.js');
console.log(message.newBinding())