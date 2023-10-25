const express = require("express");
const router = require("./routes/router");
const cors = require("cors");

const PORT = 3000;

// Express App
const app = express();

app.use(express.json());
app.use(cors({ origin: "http://localhost:3001", optionsSuccessStatus: 200 }));

// Express Router for routing
// const router = express.Router();

// Middleware to use express Router
app.use("/", router);

// Run the server Here ==> localhost:portnumber
app.listen(PORT, () => console.log("Server is running on port: " + "" + PORT));
