const express = require('express');
const router = express.Router();
const employeeController = require('../controllers/employeeController');
const auth = require('../middleware/auth');

router.get('/reviews', auth, employeeController.getAssignedReviews);
router.post('/reviews/:id/feedback', auth, employeeController.submitFeedback);

module.exports = router;
