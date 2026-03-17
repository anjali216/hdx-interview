const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  manager: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  employees: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  deadline: Date,
  status: { type: String, enum: ['Active', 'Completed', 'On Hold'], default: 'Active' }
}, { timestamps: true });

module.exports = mongoose.model('Project', projectSchema);