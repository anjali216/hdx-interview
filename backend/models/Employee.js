const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  role: { type: String, required: true },
  department: { type: String, default: 'Engineering' },
  status: { type: String, enum: ['Active', 'On Leave', 'Terminated'], default: 'Active' }
}, { timestamps: true });

module.exports = mongoose.model('Employee', EmployeeSchema);