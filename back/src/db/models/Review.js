const { ReviewModel } = require("..");

class Review {
  static async createReview(newReview) {
    const review = new ReviewModel(newReview);
    await review.save();

    return review;
  }

  static async getReviewsByGu(guId) {
    const reviews = await ReviewModel.find({ guId });

    return reviews;
  }

  static async getReviewsByDong(dongId) {
    const reviews = await ReviewModel.find({ dongId });

    return reviews;
  }

  static async findByReviewId(reviewId) {
    const review = await ReviewModel.findById({ _id: reviewId });

    return review;
  }

  static async updateReview(reviewId, toUpdate) {
    const updatedReview = await ReviewModel.findOneAndUpdate( reviewId, toUpdate, { returnDocument: 'after' });

    return updatedReview;
  }

  static async deleteReview(reviewId) {
    const deletedReview = await ReviewModel.findOneAndDelete({ _id: reviewId });

    return deletedReview;
  }
}

module.exports = Review;
