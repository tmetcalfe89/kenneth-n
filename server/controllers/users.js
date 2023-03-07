const userModel = require("../models/user");

async function signUp(req, res) {
  const { username, password } = req.body;
  try {
    const newUser = await userModel.create({ username, password });
    res.sendStatus(200);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
}

module.exports = {
  signUp,
};
