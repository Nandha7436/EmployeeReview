const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://snk1311999:1ytp6gK2B4dz0kEy@nandha.zbukeuz.mongodb.net/?retryWrites=true&w=majority&appName=Nandha/employee-feedback', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected');
  } catch (error) {
    console.error('Error connecting to MongoDB', error);
    process.exit(1);
  }
};

module.exports = connectDB;
