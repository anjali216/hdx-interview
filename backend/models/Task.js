const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  project: { type: mongoose.Schema.Types.ObjectId, ref: 'Project', required: true },
  assignedTo: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  priority: { type: String, enum: ['High', 'Medium', 'Low'], default: 'Medium' },
  status: { type: String, enum: ['To Do', 'In Progress', 'Completed'], default: 'To Do' },
  dueDate: Date,
  comments: [{ user: String, text: String, date: { type: Date, default: Date.now } }]
}, { timestamps: true });

module.exports = mongoose.model('Task', taskSchema);