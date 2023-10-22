const http = require("http");
const express = require("express");
const { customModule } = require("./module"); // Custom function import within the project
const { getAllProducts } = require("./products");

const port = 3000;

// Express App
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
