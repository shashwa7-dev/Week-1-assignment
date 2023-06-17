/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n, resolve) {
  setTimeout(() => {
    resolve(20);
  }, n);
}

const obj = new Promise((resolve, reject) => {
  setTimeout(() => wait(2000, resolve));
});
obj.then((data) => console.log("data + 10", data + 10));
