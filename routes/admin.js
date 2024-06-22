const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');
const auth = require('../middleware/auth');

router.post('/employees', auth, adminController.addEmployee);
router.post('/reviews', auth, adminController.addReview);

// Other routes for updateEmployee, removeEmployee, updateReview, removeReview

module.exports = router;
