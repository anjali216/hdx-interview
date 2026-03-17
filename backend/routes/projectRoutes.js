const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/authMiddleware');
const authorize = require('../middleware/roleMiddleware');
const { createProject, getProjects } = require('../controllers/projectController');

// Admin and Manager can create; everyone can view [cite: 22, 23, 24]
router.route('/')
  .get(protect, getProjects)
  .post(protect, authorize('Admin', 'Manager'), createProject);

module.exports = router;