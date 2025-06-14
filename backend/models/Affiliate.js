const mongoose = require("mongoose");

const AffiliateSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  referrals: Number,
});

module.exports = mongoose.model("Affiliate", AffiliateSchema);
