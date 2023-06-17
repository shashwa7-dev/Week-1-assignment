// ## Counter without setInterval

// Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.

function startTimer(duration) {
  let timer = duration;

  function tick() {
    console.log(timer);

    if (timer <= 0) {
      console.log("Timer has ended!");
    } else {
      timer--;
      setTimeout(tick, 1000); // Call tick function after 1 second (1000 milliseconds)
    }
  }

  return tick;
}

// Start the timer with a duration of 10 seconds
startTimer(10)();
// (Hint: setTimeout);
