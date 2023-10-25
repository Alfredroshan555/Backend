const express = require("express");
const { getAllProducts } = require("../functions/products");
const { customModule } = require("../functions/module");
const { createUser } = require("../functions/user");
const { loginUser } = require("../functions/loginUser");

const router = express.Router();

router.get("/", customModule);

router.get("/products", getAllProducts);

router.post("/user", createUser);

router.post("/login", loginUser);

module.exports = router;
