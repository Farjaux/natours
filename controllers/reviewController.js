// const catchAsync = require('./../utils/catchAsync');
const Review = require('./../models/reviewModel');
const factory = require('./handlerFactory');

/////////////////////////////
//////Create Review

//Middleware added to review routes
exports.setTourUserIds = (req, res, next) => {
  // Allow nested routes
  if (!req.body.tour) req.body.tour = req.params.tourId;
  if (!req.body.user) req.body.user = req.user.id;
  //
  next();
};

/////////////////////////////
//////Get All Reviews
exports.getAllReviews = factory.getAll(Review);

/////////////////////////////
//////Create Review
exports.createReview = factory.createOne(Review);

/////////////////////////////
//////Delete Review
exports.deleteReview = factory.deleteOne(Review);

/////////////////////////////
//////Update Review
exports.updateReview = factory.updateOne(Review);

/////////////////////////////
//////Get Single Review
exports.getReview = factory.getOne(Review);
