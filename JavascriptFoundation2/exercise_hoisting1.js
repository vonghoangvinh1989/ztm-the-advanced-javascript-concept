// one = undefined;
// var one = 1;
// var one = 2;

// console.log(one);

// variable will be partially hoisted

function a() {
    console.log('hi');
}

a();

function a() {
    console.log('bye');
}

// function will be fully hoisted
// function when hoisting will be override each other, the
// second function replaces the first
// so it will print 'bye'

