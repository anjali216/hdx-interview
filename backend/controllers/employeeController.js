const Employee = require("../models/Employee");


exports.getEmployees = async (req, res) => {
  try {

    const employees = await Employee.find();

    res.json(employees);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


exports.getEmployeeById = async (req, res) => {
  try {

    const employee = await Employee.findById(req.params.id);

    res.json(employee);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


exports.createEmployee = async (req, res) => {
  try {

    const employee = new Employee(req.body);

    await employee.save();

    res.status(201).json({
      message: "Employee created successfully",
      employee
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


exports.updateEmployee = async (req, res) => {
  try {

    const employee = await Employee.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json({
      message: "Employee updated",
      employee
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


exports.deleteEmployee = async (req, res) => {
  try {

    await Employee.findByIdAndDelete(req.params.id);

    res.json({
      message: "Employee deleted"
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};