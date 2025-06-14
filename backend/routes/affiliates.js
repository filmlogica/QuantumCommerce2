const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  // Retrieve affiliate details
  res.json({ message: "Affiliate details loaded!" });
});

module.exports = router;
