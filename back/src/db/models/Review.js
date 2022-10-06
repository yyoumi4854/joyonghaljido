const ReviewModel = require("../schemas/review");

class Review {
  static async create(newReview) {
    const review = new ReviewModel(newReview);
    await review.save();

    return review;
  }
}

module.exports = Review;
