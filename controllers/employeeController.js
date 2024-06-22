const Review = require('../models/Review');

exports.getAssignedReviews = async (req, res) => {
  const reviews = await Review.find({ assignedEmployees: req.employee.id });
  res.json(reviews);
};

exports.submitFeedback = async (req, res) => {
  const review = await Review.findById(req.params.id);
  review.feedbacks.push({ employee: req.employee.id, feedback: req.body.feedback });
  await review.save();
  res.send('Feedback submitted');
};
