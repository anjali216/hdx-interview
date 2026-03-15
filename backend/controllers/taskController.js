const Task = require("../models/Task");


exports.getTasks = async (req, res) => {
  try {

    const tasks = await Task.find();

    res.json(tasks);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


exports.getTaskById = async (req, res) => {
  try {

    const task = await Task.findById(req.params.id);

    res.json(task);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


exports.createTask = async (req, res) => {
  try {

    const task = new Task(req.body);

    await task.save();

    res.status(201).json({
      message: "Task created successfully",
      task
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


exports.updateTask = async (req, res) => {
  try {

    const task = await Task.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json({
      message: "Task updated",
      task
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


exports.deleteTask = async (req, res) => {
  try {

    await Task.findByIdAndDelete(req.params.id);

    res.json({
      message: "Task deleted"
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};