// ## Reading the contents of a file

// Write code to read contents of a file and print it to the console.
// You can use the fs library to as a black box, the goal is to understand async tasks.
// Try to do an expensive operation below the file read and see how it affects the output.
// Make the expensive operation more and more expensive and see how it affects the output.

const fs = require("fs");

function add(operands) {
  const total = operands.reduce((a, b) => a + b, 0);
  return total;
}
fs.readFile("./read.txt", "utf-8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  const operands = data.split(",").map(Number);
  if (operands.length !== 2) {
    console.error("File should contain exactly two operands.");
    return;
  }
  let total = add(operands);
  console.log("Total:", total);
});
