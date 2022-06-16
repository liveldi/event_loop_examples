console.log('console-start');

const timerId = setInterval(() => {
    console.log('my-interval');
}, 100);

const promise = new Promise((resolve) => {
    console.log('promise-1');
    resolve('resolve-promise-1');
});
  
setTimeout(() => {
    console.log('set-timeout-1')
    promise
        .then((value) => {
            console.log(value);

            setTimeout(() => {
                console.log('set-timeout-3');
                clearInterval(timerId);
            }, 100);
        });
    console.log('set-timeout-2')
}, 100);

console.log('console-last');

// API

// call stack

// nextTick queue

// job queue (microtasks queue)

// message queue (macrotasks queue)


// Print
// console-start promise-1 console-last my-interval set-timeout-1  set-timeout-2 resolve-promise-1 my-interval set-timeout-3