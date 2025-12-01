// Execution Context

function printName() {
    return 'Vinh Vong';
}

function findName() {
    return printName();
}

function sayMyName() {
    return findName();
}

console.log(sayMyName());

// every time javascript see (), it will run
// a function and create an execution context
// push to call stack

// Call Stack
// return Vinh Vong
// printName
// findName()
// sayMyName()
// global()

// intially, Javascript create global execution context
// Note: What is inside Global Execution Context
// 1) Global Object
// 2) this

// in browser, global object is call 'window'
// this === window --> true
// global execution context has two phases
// creation phase such as create global object and this
// for example when we create a variable such as var a = 'teddy', a will be belong to window object
// execution phase will run our code
