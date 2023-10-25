const { v4: uuidv4 } = require("uuid");

const createUser = (req, res) => {
  const newUserID = uuidv4();
  console.log("body", req.body);
  const requestBody = req.body;

  const newUserDetails = { ...req.body, id: newUserID };
  console.log(newUserDetails);

  if (requestBody.name && requestBody.age) {
    return res.json(newUserDetails);
  } else {
    return res.status(403).json({ error: "Name and age are required." });
  }
};

module.exports = { createUser };
