// Primitive: data only represents a single value
console.log(typeof 5)
console.log(typeof true)
console.log(typeof 'To be or not to be')
console.log(typeof undefined) 
console.log(typeof null)
console.log(typeof Symbol('just me'))

// Non-Primitive: does not contain any value directly
const obj1 = {
    a: 'Tom'
}

console.log(typeof {})
console.log(typeof [])
console.log(typeof function() {})

// this demonstrate function is object
// function a() {
//     return 5;
// }

// a.hi = 'hihihiihi';
// console.log(a.hi)

// difference between of 'undefined' and 'null'
// 'undefined' is the absence of a definition
// 'null' is the absence of value

console.log(true.toString());
console.log(typeof Math);
console.log(typeof Infinity)