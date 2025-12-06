// var x = "x";

// function findName() {
//   console.log(x);
//   var b = "b";
//   return printName();
// }

// function printName() {
//   console.log(x);
//   var c = "c";
//   return "Andrei Neagoie";
// }

// function sayMyName() {
//   var a = "a";
//   return findName();
// }

// sayMyName();

function sayMyName() {
  var a = "a";
  return function findName() {
    var b = "b";
    console.log(c);
    return function printName() {
      var c = "c";
      return "Andrei Neagoie";
    };
  };
}

sayMyName()()();
