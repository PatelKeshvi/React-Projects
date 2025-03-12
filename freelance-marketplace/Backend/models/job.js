const mongoose = require("mongoose");
const JobSchema = new mongoose.Schema({
  title: String,
  description: String,
  price: Number,
  category: String,
});
module.exports = mongoose.model("Job", JobSchema);
