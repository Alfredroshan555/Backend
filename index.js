const http = require("http");
const { customModule } = require("./module"); // Custom function import within the project

const port = 3000;

// Getting value/data from a custom module/function in node.js
const string = customModule();

const server = http.createServer((req, res) => {
  console.log("Server running on ::" + port);
  res.write(string + " " + port);
  res.end();
});

server.listen(port);

// TODO) ==>
/**
 * Add Express/Nest ==> any backend framework for Node js ===> Maybe try both
 * Add Nodemon for live server compilation
 * Learn to Add Middlewares ==> Use multiple middlewares and learn how they work in the whole application
 * Create first API using dummy data
 */
