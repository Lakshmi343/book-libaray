

const express = require("express");
const { registerUser, loginUser } = require("../controllers/userController");

const router = express.Router();

// Register Route
router.post("/registeruser", registerUser);

// Login Route
router.post("/loginuser", loginUser);

module.exports = router;
