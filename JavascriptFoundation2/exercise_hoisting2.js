// var favouriteFood = 'grapes';

// var foodThoughts = function() {
//     console.log("Original favourite food: " + favouriteFood);

//     var favouriteFood = "sushi";

//     console.log("New favourite food: " + favouriteFood);
// };

// foodThoughts();

// every time the new function run, it will create a new running context inside
// so when run the foodThought function, var favouriteFood will be defined 'undefined' again in the top inside the function with line 'var favouriteFood = "sushi"'

// so avoid hoisting, not using the keyword var, use the 'const' and 'let'


const favouriteFood = 'grapes';

const foodThoughts = function() {
    console.log("Original favourite food: " + favouriteFood);

    // const favouriteFood = "sushi";

    console.log("New favourite food: " + favouriteFood);
};

foodThoughts();

// var -> hoisted + initialized
// let, const -> hoisted but unitialized