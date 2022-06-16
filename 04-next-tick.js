const baz = () => console.log('baz');
const foo = () => {
    console.log('foo');
    process.nextTick(foo2);

}
const foo2 = () => console.log('foo-2');
const zoo = () => console.log('zoo');

const start = () => {
  console.log('start');
  setTimeout(baz, 0);

  new Promise((resolve, reject) => {
    resolve('bar');
  }).then((resolve) => {
    console.log(resolve);
    process.nextTick(zoo);
  });

  process.nextTick(foo);
};

start();



// call stack

// nextTick queue

// job queue (microtasks queue)

// message queue (macrotasks queue)


// Print
// start foo foo-2 bar zoo baz