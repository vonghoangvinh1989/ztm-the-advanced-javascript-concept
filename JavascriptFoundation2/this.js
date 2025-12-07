// this keyword
// this is the object that the function is a property of
// obj.someFunc(this) --> this refer to the 'obj' in this case

//1: gives methods access to their object
const obj = {
  name: "Veronica",
  sing() {
    // this is the object that function is a property of
    return "lalala " + this.name;
  },
  singAgain() {
    return this.sing() + "!";
  },
};

// this refers to anything in the left of the dot .
console.log(obj.sing());
console.log(obj.singAgain());

//2: execute same code for multiple objects
function importantPerson() {
  console.log(this.name + "!");
}

const name = "Sunny";

const obj1 = {
  name: "Cassy",
  importantPerson: importantPerson,
};

const obj2 = {
  name: "Jacob",
  importantPerson: importantPerson,
};

importantPerson();
