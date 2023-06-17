/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Print out the time it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function waitOneSecond() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 1000);
  });
}

function waitTwoSecond() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(2), 2000);
  });
}

function waitThreeSecond() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(3), 3000);
  });
}

function calculateTime() {
  let startTime = Date.now();
  let promise1 = waitOneSecond();
  promise1.then((data1) => {
    let promise2 = waitTwoSecond();
    promise2.then((data2) => {
      let promise3 = waitThreeSecond();
      promise3.then((data3) => {
        console.log(data1, data2, data3, Date.now() - startTime);
      });
    });
  });
}
calculateTime();
