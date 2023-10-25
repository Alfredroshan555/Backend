const jwt = require("jsonwebtoken");
const secretKey = "your_secret_key";

const loginUser = (req, res) => {
  const payload = req.body;
  const token = jwt.sign(payload, secretKey);

  res.send({ accessToken: token });
};

module.exports = { loginUser };
