const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  title: String,
  project: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Project",
  },
  assignedTo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Employee",
  },
  priority: {
    type: String,
    enum: ["High", "Medium", "Low"],
  },
  dueDate: Date,
  status: {
    type: String,
    enum: ["Pending", "Completed"],
    default: "Pending",
  },
});

module.exports = mongoose.model("Task", taskSchema);