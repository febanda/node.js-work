const fs = require("fs");

//Synchronous Will block all other code
// const readMe = fs.readFileSync("readme.txt", "utf8");

// const writeMe = fs.writeFileSync("writeMe.txt", readMe);

//Asynchronous
// fs.readFile("readme.txt", "utf8", function(err, data) {
//   fs.writeFile("writeMe.txt", data);
// });

//Delete Files
fs.unlink("readme.txt");
