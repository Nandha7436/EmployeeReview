const Employee = require('../models/Employee');
const Review = require('../models/Review');
const bcrypt = require('bcryptjs');

exports.addEmployee = async (req, res) => {
  const { name, email, password, role } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const newEmployee = new Employee({ name, email, password: hashedPassword, role });
  await newEmployee.save();
  res.send('Employee added');
};

// Similar methods for updateEmployee, removeEmployee, viewEmployees

exports.addReview = async (req, res) => {
  const { title, description, assignedEmployees } = req.body;
  const newReview = new Review({ title, description, assignedEmployees });
  await newReview.save();
  res.send('Review added');
};

// Similar methods for updateReview, removeReview, viewReviews
