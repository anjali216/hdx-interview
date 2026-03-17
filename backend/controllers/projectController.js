const Project = require('../models/Project');

exports.createProject = async (req, res) => {
  const { name, description, manager, employees, deadline } = req.body;
  const project = await Project.create({ name, description, manager, employees, deadline });
  res.status(201).json(project);
};

exports.getProjects = async (req, res) => {
  // If Employee, only show projects they are part of; otherwise show all
  const query = req.user.role === 'Employee' ? { employees: req.user._id } : {};
  const projects = await Project.find(query).populate('manager employees', 'name email');
  res.json(projects);
};

exports.updateProject = async (req, res) => {
  const project = await Project.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(project);
};