const User = require('../models/User');

exports.getEmployees = async (req, res) => {
  try {
    const { page = 1, limit = 10, search = '' } = req.query;
    const query = {
      role: 'Employee',
      $or: [
        { name: { $regex: search, $options: 'i' } },
        { email: { $regex: search, $options: 'i' } },
        { department: { $regex: search, $options: 'i' } }
      ]
    };

    const employees = await User.find(query)
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .sort({ createdAt: -1 });

    const count = await User.countDocuments(query);
    res.json({ employees, totalPages: Math.ceil(count / limit), currentPage: page });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deleteEmployee = async (req, res) => {
  const employee = await User.findById(req.params.id);
  if (employee) {
    await employee.deleteOne();
    res.json({ message: 'Employee removed' });
  } else {
    res.status(404).json({ message: 'Employee not found' });
  }
};