function two() {
    var isValid; // undefined
}

function one() {
    var isValid = true; // local environment
    two(); // new execution context created
}

var isValid = false;
one();

// two() -- undefined --pop off
// one() -- true -- pop off
// global() -- false -- pop off