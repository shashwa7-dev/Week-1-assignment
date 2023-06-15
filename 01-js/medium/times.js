/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
*/

function calculateTime(n) {
  let total = 0;
  let preLoopExcTime = Date.now();
  let preLoopAPIExcTime = performance.now();
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  let postLoopExcTime = Date.now() - preLoopExcTime;
  return {
    custom_api: postLoopExcTime + "ms",
    web_api: performance.now() - preLoopAPIExcTime + "ms",
  };
}

module.exports = {
  calculateTime,
};
