const mongoose = require('mongoose');

const ReviewSchema = new mongoose.Schema({
  title: String,
  description: String,
  assignedEmployees: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Employee' }],
  feedbacks: [{
    employee: { type: mongoose.Schema.Types.ObjectId, ref: 'Employee' },
    feedback: String,
  }],
});

module.exports = mongoose.model('Review', ReviewSchema);
