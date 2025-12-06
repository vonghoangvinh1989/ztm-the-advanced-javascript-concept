function loop() {
  for (var i = 0; i < 5; i++) {
    console.log(i);
  }

  console.log("final", i);
}

loop();

// note: final: 5 if it is var

function loop2() {
  for (let i = 0; i < 5; i++) {
    console.log(i);
  }

  console.log("final", i);
}

loop2();
// note: error if it is let since let is block scope

// block scoping {}
