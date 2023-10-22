const http = require("http");
const express = require("express");
const { customModule } = require("./module"); // Custom function import within the project
const { getAllProducts } = require("./products");

const port = 3000;

const app = express();

// Getting value/data from a custom module/function in node.js
const data = customModule();

const products = getAllProducts();

// Home route '/'
app.get("/", (req, res) => {
  res.send(data);
});

// Products Page
app.get("/products", (req, res) => {
  res.send(products);
});

app.listen(port, () => console.log("App is running on port " + " " + port));

// const server = http.createServer((req, res) => {
//   console.log("A change was made" + port);
//   res.write(string + " " + port);
//   res.end();
// });

// server.listen(port);

// TODO) ==>
/**
 * Add Express/Nest ==> any backend framework for Node js ===> Maybe try both   ==> DONE
 * Add Nodemon for live server compilation ==> DONE
 * Learn to Add Middlewares ==> Use multiple middlewares and learn how they work in the whole application ==>
 * Create first API using dummy data ==> DONE
 *
 * Add a middleware for some functionalities
 * Fetch data from a local database ==> maybe MongoDb or MySql or some other database
 * Configure Router for the app and seggregate the routes into different router files
 * Add Controllers for different types of functionalities of the application
 */
