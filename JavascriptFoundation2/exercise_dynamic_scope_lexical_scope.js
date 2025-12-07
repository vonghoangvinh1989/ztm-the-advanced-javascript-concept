// same like: window.a(b(c.hi()))
const a = function () {
  console.log("a", this); // window
  const b = function () {
    console.log("b", this); // window
    const c = {
      hi: function () {
        console.log("c", this); // c
      },
    };
    c.hi();
  };
  b();
};

// a();

// this does not care about where it is written
// it just cares about how the function was called
const obj = {
  name: "Billy",
  sing() {
    console.log("a", this); // obj
    var anotherFunc = function () {
      console.log("b", this); // window
    };
    anotherFunc();
  },
};

// how to fix, es6 arrow function
// because arrow function does not create its own this
// it captures (lexical binds) this from where it was written
const obj2 = {
  name: "Billy",
  sing() {
    console.log("a", this); // obj
    var anotherFunc = () => {
      console.log("b", this); // obj
    };
    anotherFunc();
  },
};

// note: lexical --> nghia la vi tri trong code khi viet, khong phai luc no duoc run o dau

// but before es6, how we can fix it
const obj3 = {
  name: "Billy",
  sing() {
    console.log("a", this); // obj
    var anotherFunc = function () {
      console.log("b", this); // obj
    };
    return anotherFunc.bind(this);
  },
};

obj3.sing()();

// another way to fix this, in the past with jquery or something
const obj4 = {
  name: "Billy",
  sing() {
    console.log("a", this); // obj
    var self = this;
    var anotherFunc = function () {
      console.log("b", self); // obj
    };
    return anotherFunc;
  },
};

obj4.sing()();
