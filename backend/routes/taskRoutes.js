const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/authMiddleware');
const authorize = require('../middleware/roleMiddleware');
const { createTask, updateTaskStatus } = require('../controllers/taskController');

// Admins and Managers can create tasks 
router.post('/', protect, authorize('Admin', 'Manager'), createTask);

// Employees can update their own assigned tasks [cite: 24]
router.put('/:id/status', protect, updateTaskStatus);

module.exports = router;