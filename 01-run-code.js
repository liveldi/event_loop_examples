const bar = () => console.log('bar');

const baz = () => console.log('baz');

const foo = () => {
    for(let i = 0; i < 10; i++) {
        console.log(i)
    }

    console.log('foo');
    bar();
    baz();
}

foo();

console.log('me')

/**
 * Execution context is defined as the enviroment in which
 * the JavaScript code is executed. Enviroment: this, variables, objects
 * and function JavaScript code has access to at a particual rime.
 */

// Call Stack
// 01-run-code()


// Print

