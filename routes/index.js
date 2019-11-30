const express = require("express");
const router = express.Router();

// GET home route
router.get("/*", (req, res) => {
  res.render("index", { title: "react-redux-form" });
});

module.exports = router;
