const router = require("express").Router();
const Employee = require("../models/Employee");

router.get("/", async (req, res) => {
  const employees = await Employee.find();
  res.json(employees);
});

router.post("/", async (req, res) => {
  const employee = new Employee(req.body);
  await employee.save();
  res.json("Employee Added");
});

router.delete("/:id", async (req, res) => {
  await Employee.findByIdAndDelete(req.params.id);
  res.json("Employee Deleted");
});

module.exports = router;