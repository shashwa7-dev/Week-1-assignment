/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 */

function sleep(seconds) {
  const start_time = Date.now();
  while (Date.now() - start_time < seconds * 1000) {
    //thread is sleeping
  }
}

console.log("Hello");
sleep(3);
console.log("Finnally after 3S!");