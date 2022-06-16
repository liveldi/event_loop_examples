const bar = () => console.log('bar');

const baz = () => console.log('baz');

const foo = () => {
    console.log('foo');
    setTimeout(bar, 0);
    baz();
   
}

foo();

setTimeout(bar, 100);
const id = setInterval(bar, 1000);
clearInterval(id);

// call stack 



// message queue (macrotasks queue)


// foo baz bar