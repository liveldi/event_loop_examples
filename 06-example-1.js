const fs = require('fs');

new Promise((resolve) => {
	console.log('my-promise-1');
	resolve();
})
.then(_ => console.log('then-1'))
.then(_ => console.log('then-2'));

fs.open('./text.txt', () => {
    console.log('text-open');
    new Promise((resolve) => {
        console.log('my-promise-2');
        resolve();
    }).then(_ => console.log('then-3'))

    console.log('open-finish')
});

process.nextTick(() => {
	console.log('nextTick-1');
    setTimeout(() => console.log('timer'), 0);
	process.nextTick(() => console.log('nextTick-2'));
});

console.log('last-console');

// call stack

// nextTick queue

// job queue (microtasks queue)

// message queue (macrotasks queue)


// Print
