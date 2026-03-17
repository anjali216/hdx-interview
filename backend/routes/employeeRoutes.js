const express = require('express');
const router = express.Router();
const { getEmployees, deleteEmployee } = require('../controllers/employeeController');
const { protect } = require('../middleware/authMiddleware');
const authorize = require('../middleware/roleMiddleware');

router.route('/')
  .get(protect, getEmployees); // Admin/Manager view

router.route('/:id')
  .delete(protect, authorize('Admin'), deleteEmployee);

module.exports = router;