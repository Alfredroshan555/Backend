const express = require("express");
const { getAllProducts } = require("../functions/products");
const { customModule } = require("../functions/module");
const { createUser } = require("../functions/createUser");
const { testUser } = require("../functions/testUser");

const router = express.Router();

router.get("/", customModule);

router.get("/products", getAllProducts);

router.post("/user", testUser);

// Sign Up ==> Create a new user
router.post("/signup", createUser);

module.exports = router;
