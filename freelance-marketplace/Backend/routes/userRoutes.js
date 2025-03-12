const express = require("express");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const router = express.Router();

// Get all users
router.get("/", async (req, res) => {
  const users = await User.find();
  res.json({ totalUsers: users.length, users });
});

// Create a user (Automatically generates a JWT token)
router.post("/", async (req, res) => {
  const { name, email, role } = req.body;
  const newUser = new User({ name, email, role });
  await newUser.save();

  // Generate JWT token
  const token = jwt.sign({ id: newUser._id, role: newUser.role }, "secret_key", { expiresIn: "1d" });

  res.json({ message: "User added successfully", token });
});

module.exports = router;
