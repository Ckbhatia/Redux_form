const express = require("express");
const router = express.Router();
const User = require("../models/User");

// Post register
router.post("/register", async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.json({ user, status: "success" });
  } catch (error) {
    res.json({ message: "There's an error", status: "failed" });
  }
});

// Get
router.get("/", async (req, res) => {
  try {
    const users = await User.find({});
    if (!users) res.json({ message: "No users found", status: "failed" });
    res.json({ users, status: "failed" });
  } catch (error) {
    res.json({ message: "There's an error", status: "failed" });
  }
});

module.exports = router;
