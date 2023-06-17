// <!-- Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
// clock that shows you the current machine time?

// Can you make it so that it updates every second, and shows time in the following formats -

//  - HH:MM::SS (Eg. 13:45:23)

//  - HH:MM::SS AM/PM (Eg 01:45:23 PM) -->

//Starts from 0
const Clock = (format12HR = false) => {
  let sec = 0;
  let min = 0;
  let hr = 10;

  let clock = setInterval(() => {
    console.clear();
    if (format12HR) {
      if (hr > 12) {
        console.log(`${hr - 12}:${min}::${sec} ${hr >= 12 ? "PM" : "AM"}`);
      } else console.log(`${hr}:${min}::${sec} ${hr >= 12 ? "PM" : "AM"}`);
    } else console.log(`${hr}:${min}::${sec}`);

    if (sec === 59) {
      min += (sec + 1) / 60;
      if (min === 60) {
        hr += min / 60;
        if (hr >= 24) {
          clearInterval(clock);
        }
        min = 0;
      }
      sec = -1;
    }
    sec++;
  }, 1000);
};

// Clock(true);

//using date api
const Clock2 = () => {
  setInterval(() => {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");

    const timeString = `${hours}:${minutes}:${seconds}`;
    console.log("Time:", timeString);
  }, 1000);
};

Clock2();
