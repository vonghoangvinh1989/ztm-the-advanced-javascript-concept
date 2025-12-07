var b = {
  name: "Jay",
  say() {
    console.log(this);
  },
};

var c = {
  name: "Jay",
  say() {
    return function () {
      console.log(this);
    };
  },
};

var d = {
  name: "Jay",
  say() {
    return () => console.log(this);
  },
};

// b.say(); // b object --> called by b object b.say()
// c.say()(); // global object --> say function return function and run it, it does not call by c object, so it will be 'global'
d.say()(); // d object --> say function return a function, and the function will be arrow function and it captures (lexical binds) this from where it was written, here is 'd' object
