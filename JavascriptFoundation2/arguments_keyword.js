
function marry(person1, person2) {
    console.log('arguments', arguments);

    // create an array from whatever we give it
    console.log(Array.from(arguments));
    return `${person1} is now married to ${person2}`;
}

marry('Tim', 'Tina');


function marry2(...args) {
    console.log('arguments', args);

    // create an array from whatever we give it
    console.log(Array.from(arguments));
    return `${args[0]} is now married to ${args[1]}`;
}

marry2('Tim', 'Tina');

// each execution context, we create new arguments object 

// avoid arguments, using Array.from or using args
