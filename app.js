var http = require("http");
var fs = require("fs");
var express = require("express");
var bodyParser = require("body-parser");

//How to serve up HTML page to the client

//create the server with the req and res object
// var server = http.createServer(function(req, res) {
//     //write response header and what you will be reading
//   res.writeHead(200, { "Content-Type": "text/html" });
//     //create a read stream and reads the contents of the file
//   var myReadStream = fs.createReadStream(__dirname + "/index.html", "utf8");
//     //take the contents of the readStream and pipe it to the user
//   myReadStream.pipe(res);
// });

// server.listen(3000, "127.0.0.1");

//Serve JSON Data to the client

// var server = http.createServer(function(req, res) {
//   res.writeHead(200, { "Content-Type": "application/json" });
//   var myObj = {
//     name: "Frankie",
//     job: "Ninja",
//     age: 29
//   };
//   res.end(JSON.stringify(myObj));
// });

// server.listen(3000, "127.0.0.1");

//Routing

// var server = http.createServer(function(req, res) {
//   if (req.url === "/home" || req.url === "/") {
//     res.writeHead(200, { "Content-Type": "text/html" });
//     fs.createReadStream(__dirname + "/index.html").pipe(res);
//   } else if (req.url === "/contact") {
//     res.writeHead(200, { "Content-Type": "text/html" });
//     fs.createReadStream(__dirname + "/contact.html").pipe(res);
//   } else if (req.url === "/api/ninjas") {
//     var ninjas = [{ name: "ryu", age: 29 }, { name: "yoshi", age: 32 }];
//     res.writeHead(200, { "Content-Type": "application/json" });
//     //.end expects a string or buffer
//     res.end(JSON.stringify(ninjas));
//   } else {
//     res.writeHead(404, { "Content-Type": "text/html" });
//     fs.createReadStream(__dirname + "/404.html").pipe(res);
//   }
// });

// server.listen(3000, "127.0.0.1");

//Set up express app

const app = express();
var urlencodeParser = bodyParser.urlencoded({ extended: false });
app.set("view engine", "ejs");
app.use("/assets", express.static("assets"));

app.listen(3000);

//render a ejs view
app.get("/", function(req, res) {
  res.render("index");
});

app.get("/contact", function(req, res) {
  res.render("contact", { qs: req.query });
});

app.post("/contact", urlencodeParser, function(req, res) {
  console.log(req.body);
  res.render("contact-success", { data: req.body });
});

app.get("/profile/:name", function(req, res) {
  var data = { age: 28, job: "ninja", hobbies: ["eating", "fishing"] };
  res.render("profile", { person: req.params.name, data: data });
});
