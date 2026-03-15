const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  title: String,
  project: String,
  assignedTo: String,
  priority: String,
  status: String,
});

module.exports = mongoose.model("Task", taskSchema);