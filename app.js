const express = require('express');
const connectDB = require('./config/db');
const authRoutes = require('./routes/auth');
const adminRoutes = require('./routes/admin');
const employeeRoutes = require('./routes/employee');
const errorHandler = require('./utils/errorHandler');

const app = express();

connectDB();

app.use(express.json());

app.use('/auth', authRoutes);
app.use('/admin', adminRoutes);
app.use('/employee', employeeRoutes);

app.use(errorHandler);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
