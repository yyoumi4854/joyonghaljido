const bcrypt = require("bcrypt");
const Review = require("../db/models/Review");

const passwordMiddleware = async (req, res, next) => {
  const reviewId = req.params.reviewId;
  const currentPassword = req.body.currentPassword;

  const review = await Review.getByReviewId(reviewId);

  if (!review) {
    throw new Error("해당 리뷰는 존재하지 않습니다.");
  }

  const isMatched = await bcrypt.compare(currentPassword, review.password);

  if (!isMatched) {
    throw new Error("비밀번호가 일치하지 않습니다.");
  }

  req.currentReview = review;
  next();
};

module.exports = passwordMiddleware;
