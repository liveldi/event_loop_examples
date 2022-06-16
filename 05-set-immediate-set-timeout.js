const fs = require('fs');

// setTimeout(() => {
//     console.log('timeout 1');
// }, 0);

// setImmediate(() => {
//     console.log('immediate 1');
// });

fs.readFile('./text.txt', () => { // I/O cycle
  setTimeout(() => {
    console.log('timeout 2');
  }, 0);
  setImmediate(() => {
    console.log('immediate 2');
  });
});