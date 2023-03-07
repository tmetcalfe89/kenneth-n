const express = require("express");
const userControllers = require("../../../controllers/users");

const router = express.Router();

// POST http://localhost:3001/api/users/signup
router.post("/signup", userControllers.signUp);

module.exports = router;
