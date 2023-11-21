const express = require("express");
const router = require("./routes/router");
const cors = require("cors");
const mongoose = require("mongoose");
const { mongoDBURL, PORT } = require("./config");

// Express App
const app = express();

app.use(express.json());
app.use(cors({ origin: "http://localhost:3001", optionsSuccessStatus: 200 }));

// Express Router for routing
// const router = express.Router();

// Middleware to use express Router
app.use("/", router);

// MongoDb connection
mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("App connected to mongoDb");
    // Run the server Here ==> localhost:portnumber
    app.listen(PORT, () =>
      console.log("Server is running on port: " + "" + PORT)
    );
  })
  .catch((err) => {
    console.log("Database connection error");
  });
