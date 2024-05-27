const express = require('express');
const router = express.Router();
const apiController = require('../controllers/apiController');
const authMiddleware = require('../middlewares/authMiddleware');

// Public routes
router.get('/examples', apiController.getExample);

// Protected routes
router.post('/examples', authMiddleware, apiController.createExample);

module.exports = router;
