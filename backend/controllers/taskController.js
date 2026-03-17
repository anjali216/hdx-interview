const Task = require('../models/Task');

exports.createTask = async (req, res) => {
  const { title, description, project, assignedTo, priority, dueDate } = req.body;
  const task = await Task.create({
    title, description, project, assignedTo, priority, dueDate
  });
  res.status(201).json(task);
};

exports.updateTaskStatus = async (req, res) => {
  const task = await Task.findById(req.params.id);
  if (task) {
    // Check if Employee is assigned to this task [cite: 24]
    if (req.user.role === 'Employee' && task.assignedTo.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: 'Not authorized to update this task' });
    }
    task.status = req.body.status || task.status;
    const updatedTask = await task.save();
    res.json(updatedTask);
  } else {
    res.status(404).json({ message: 'Task not found' });
  }
};