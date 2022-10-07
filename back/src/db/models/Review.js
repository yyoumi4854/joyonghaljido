const ReviewModel = require("../schemas/review");

class Review {
  static async create(newReview) {
    const review = new ReviewModel(newReview);
    await review.save();

    return review;
  }

  static async getReviewsByGu(gu) {
    const reviews = await ReviewModel.find({ gu })

    return reviews;
  }

  static async findByReviewId(reviewId) {
    const review = await ReviewModel.findById({ _id: reviewId });

    return review;
  }
}

module.exports = Review;
