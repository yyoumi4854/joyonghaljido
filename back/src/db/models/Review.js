const { ReviewModel } = require("..");

class Review {
  static async createReview(newReview) {
    const review = new ReviewModel(newReview);
    await review.save();

    return review;
  }

  static async getReviewsByGu(guId, skip, filter) {
    const reviews = await ReviewModel.aggregate([
      {
        $match: filter ? { guId, noiseLevel: parseInt(filter) } : { guId },
      },
      {
        $lookup: {
          from: "gus",
          localField: "guId",
          foreignField: "_id",
          as: "gu",
        },
      },
      {
        $unwind: {
          path: "$gu",
        },
      },
      {
        $project: {
          "gu._id": 0,
          "gu.type": 0,
          "gu.crs": 0,
          "gu.features": 0,
        },
      },
      {
        $skip: parseInt(skip) * 10,
      },
      {
        $limit: 10,
      },
    ]);

    return reviews;
  }

  static async getReviewsByDong(dongId, skip, filter) {
    const reviews = await ReviewModel.aggregate([
      {
        $match: filter ? { dongId, noiseLevel: parseInt(filter) } : { dongId },
      },
      {
        $lookup: {
          from: "dongs",
          localField: "dongId",
          foreignField: "_id",
          as: "dong",
        },
      },
      {
        $unwind: {
          path: "$dong",
        },
      },
      {
        $project: {
          "dong._id": 0,
          "dong.guId": 0,
        },
      },
      {
        $skip: parseInt(skip) * 10,
      },
      {
        $limit: 10,
      },
    ]);

    return reviews;
  }

  static async findByReviewId(reviewId) {
    const review = await ReviewModel.findById({ _id: reviewId });

    return review;
  }

  static async updateReview(reviewId, toUpdate) {
    const updatedReview = await ReviewModel.findOneAndUpdate(
      reviewId,
      toUpdate,
      { returnDocument: "after" }
    );

    return updatedReview;
  }

  static async deleteReview(reviewId) {
    const deletedReview = await ReviewModel.findOneAndDelete({ _id: reviewId });

    return deletedReview;
  }
}

module.exports = Review;
