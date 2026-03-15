const Employee = require("../models/Employee");

exports.getEmployees = async (req, res) => {
const employees = await Employee.find();
res.json(employees);
};

exports.addEmployee = async (req, res) => {
const employee = new Employee(req.body);
await employee.save();
res.json("Employee Added");
};

exports.deleteEmployee = async (req, res) => {
await Employee.findByIdAndDelete(req.params.id);
res.json("Employee Deleted");
};