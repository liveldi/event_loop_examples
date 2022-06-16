const bar = () => console.log('bar');

const baz = () => console.log('baz');

const foo = () => {
    console.log('foo');
    bar();
    baz();
}

foo();

// for (let i = 0; i < Infinity; i++) {
//     console.log(111)
// }

// console.log('333')

// function f () {
//     console.log('f was called');
//     return f();
// }

// f();


// call stack

// foo bar baz


