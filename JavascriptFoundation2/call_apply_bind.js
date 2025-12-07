// call() apply() bind()

function a() {
    console.log('hi');
}

// under the hood, when call a function such as a()
// all functions have a property 'call' that allows to call a function
// short hand of a.call() is a()
// a.call();
a.apply(); // could do the same thing as call()

const wizard = {
    name: 'Merlin',
    health: 50,
    heal(num1, num2) {
        return this.health += num1 + num2;
    }
}

const archer = {
    name: 'Robin Hood',
    health: 30,
}

console.log('1', archer);

// borrow the function heal from wizard to call in archer
// wizard.heal.call(archer, 50, 30);

// difference between call and apply is apply recieve the array of parameters
// wizard.heal.apply(archer, [100, 30]);

// bind will do the same with apply and call, but it returns new function, not running it
const healArcher = wizard.heal.bind(archer, 100, 30);
healArcher();

console.log('2', archer);