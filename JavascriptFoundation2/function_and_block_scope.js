// function scope
// vs
// block scope

// not var ignores blocks {}
// var variable is hoisted to the top of the nearest function, not the nearest block
// let and const are block scope

if (5 > 4) {
  let secret = "12345";
}

secret;
