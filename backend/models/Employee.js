const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema(
{
  name: {
    type: String,
    required: true,
    trim: true
  },

  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },

  phone: {
    type: String,
    required: true
  },

  department: {
    type: String,
    required: true
  },

  role: {
    type: String,
    enum: ["Admin", "Manager", "Employee"],
    default: "Employee"
  },

  salary: {
    type: Number,
    required: true
  },

  dateOfJoining: {
    type: Date,
    required: true
  },

  profileImage: {
    type: String,
    default: ""
  }
},
{
  timestamps: true
}
);

module.exports = mongoose.model("Employee", employeeSchema);