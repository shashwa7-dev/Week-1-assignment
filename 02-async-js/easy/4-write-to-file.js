// ## Write to a file
// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.
var fs = require("fs");

// Sample.txt is an empty file
fs.writeFile(
  "./sample.txt",
  "Hello World",
  function (err) {
    if (err) {
      return console.error(err);
    }

    // Reading the file
    fs.readFile("./sample.txt", function (err, data) {
      if (err) {
        return console.error(err);
      }
      console.log("Reading written data : " + data.toString());
    });
  }
);
