// ## Create a counter in JavaScript

// We have already covered this in the second lesson, but as an easy recap try to code a counter in Javascript
// It should go up as time goes by in intervals of 1 second

const Counter = () => {
  let time = 0;
  let timer = setInterval(() => {
    if (time === 10) {
      clearInterval(timer);
    }
    console.clear();
    console.log(time++);
  }, 1000);
};

Counter();
