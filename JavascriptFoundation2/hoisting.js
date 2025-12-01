console.log('1-----------------');
console.log(teddy);
console.log(sing2());
var teddy = 'bear';

// function expression
var sing2 = function() {
    console.log('uhhh la la la');
}

// function declaration
function sing() {
    console.log('ohhh la la la');
}


// in Javascript, we cal call a function before it declaration because of hoisting
// every time Javascript engine see the 'var' keyword and the 'function' keyword
// it will provide the memory for them and move in the top
// with var variable, it will give the default undefined, we call it partially hoisting

// console.log('1-----------------');
// var teddy = undefined;
// function sing() {
//     console.log('ohhh la la la');
// }

// console.log(teddy);
// console.log(sing());
// var teddy = 'bear';

// what if we declare function like this
// (function sing() {
//     console.log('ohhh la la la');
// })
// it's gonna create error since javascript engine no longer see function keyword

// let and const also hoisting but put in temporal dead zone, only 'var' and 'function'

// javascript engine not actually move the code under the hood but as doing on pass over the code and reserve memory or assign memory for the code
