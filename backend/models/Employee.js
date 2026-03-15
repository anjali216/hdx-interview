const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  department: String,
  role: String,
  salary: Number,
  dateOfJoining: Date,
  profileImage: String,
});

module.exports = mongoose.model("Employee", employeeSchema);