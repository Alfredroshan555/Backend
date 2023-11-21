const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { v4: uuidv4 } = require("uuid");
const secretKey = "your_secret_key"; // Move to env file

const createUser = async (req, res) => {
  const newUserID = uuidv4();
  const { name, email, password } = req.body;
  const salt = 10;
  const accessToken = jwt.sign(req.body, secretKey);

  const users = [];

  const hashedPassword = await bcrypt.hash(password, salt); //Password hasshing using bcrypt
  const user = {
    name: name,
    email: email,
    id: newUserID, // add a unique id to each user
    password: hashedPassword,
    accessToken: accessToken,
  };

  // Push the new user with the hashed password to the dB here
  users.push(user);

  const response = {
    name: name,
    accessToken: accessToken,
  };
  res.status(200).send(response);

  // const refreshToken = jwt.sign(payload, secretKey + "_refresh", {
  //   expiresIn: "5s",
  // });

  // res.send({ accessToken: accessToken, refreshToken: refreshToken });
};

module.exports = { createUser };
