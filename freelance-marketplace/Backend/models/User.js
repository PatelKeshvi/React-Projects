const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  role: { type: String, enum: ["freelancer", "client"], default: "freelancer" },
});

module.exports = mongoose.model("User", UserSchema);
