const Employee = require('../models/Employee');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.register = async (req, res) => {
  const { name, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const newEmployee = new Employee({ name, email, password: hashedPassword });
  await newEmployee.save();
  res.send('Employee registered');
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  const employee = await Employee.findOne({ email });
  if (!employee || !await bcrypt.compare(password, employee.password)) {
    return res.status(401).send('Invalid credentials');
  }
  const token = jwt.sign({ id: employee._id, role: employee.role }, 'your_jwt_secret');
  res.json({ token });
};
