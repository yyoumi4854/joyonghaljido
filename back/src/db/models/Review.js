const { ReviewModel, GuModel, DongModel } = require("..");
const { Types } = require("mongoose");

class Review {
  static async createReview(newReview) {
    const review = new ReviewModel(newReview);
    await review.save();

    return review;
  }

  static async getReviewsByGu(guId) {
    const reviews = await GuModel.aggregate([
      { $match: { _id: guId }},
      {
        $lookup: {
          from: "reviews",
          localField: "_id",
          foreignField: "guId",
          as: "reviews",
        }
      }, 
      { $unwind: "$reviews" },
      { 
        $project: {
          name: 1,
          "reviews._id": 1,
          "reviews.title": 1,
          "reviews.description": 1,
          "reviews.noiseLevel": 1,
          "reviews.createdAt": 1,
          "reviews.updatedAt": 1,
        }
    }]);

    return reviews;
  }

  static async getReviewsByDong(dongId) {
    const reviews = await DongModel.aggregate([
      { $match: { _id: dongId }},
      {
        $lookup: {
          from: "reviews",
          localField: "_id",
          foreignField: "dongId",
          as: "reviews",
        }
      }, 
      { $unwind: "$reviews" },
      { 
        $project: {
          name: 1,
          guId: 1,
          "reviews._id": 1,
          "reviews.title": 1,
          "reviews.description": 1,
          "reviews.noiseLevel": 1,
          "reviews.createdAt": 1,
          "reviews.updatedAt": 1,
        }
    }]);

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
