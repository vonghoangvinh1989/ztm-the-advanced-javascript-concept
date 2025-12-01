// Function Expression
// this function is defined at run time
var canada = () => {
    console.log('cold');
}

// Function Declaration
// this function is defined at parse time
// when compiler looks at the code, start hoisting and allocating memory
function india() {
    console.log('warm');
}

// Function Invocation/Call/Execution --> tell Javascript run the function

// create execution context
canada();
india();

function marry(person1, person2) {
    console.log('arguments', arguments);
    return `${person1} is now married to ${person2}`;
}

marry('Tim', 'Tina');

// arguments available to us when create new execution context
