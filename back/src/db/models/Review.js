const { ReviewModel } = require("..");

class Review {
  //create review
  static async create(newReview) {
    const review = new ReviewModel(newReview);
    await review.save();

    return review;
  }

  //get reviews by gu
  static async getListByGu(guId, skip, limit, noiseLevel) {
    const reviews = await ReviewModel.aggregate([
      {
        $match: { guId, ...(noiseLevel && { noiseLevel }) },
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
        $skip: skip * limit,
      },
      {
        $limit: limit,
      },
    ]);

    return reviews;
  }

  //get reviews by dong
  static async getListByDong(dongId, skip, limit, noiseLevel) {
    const reviews = await ReviewModel.aggregate([
      {
        $match: { dongId, ...(noiseLevel && { noiseLevel }) },
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
        $skip: skip * limit,
      },
      {
        $limit: limit,
      },
    ]);

    return reviews;
  }

  //get review by review id
  static async getByReviewId(reviewId) {
    const review = await ReviewModel.findById({ _id: reviewId });

    return review;
  }

  //get review count
  static async getCount(guId, dongId) {
    const reviewCount = await ReviewModel.aggregate([
      {
        $match: (dongId && { dongId }) || { guId },
      },
      {
        $count: "totalReview",
      },
    ]);

    const noiseLevelCount = await ReviewModel.aggregate([
      {
        $match: (dongId && { dongId }) || { guId },
      },
      {
        $group: {
          _id: "$noiseLevel",
          total: {
            $count: {},
          },
        },
      },
    ]);

    return { reviewCount, noiseLevelCount };
  }

  //update review
  static async update(reviewId, toUpdate) {
    const updatedReview = await ReviewModel.findOneAndUpdate(
      reviewId,
      toUpdate,
      { returnDocument: "after" }
    );

    return updatedReview;
  }

  //delete review
  static async delete(reviewId) {
    const deletedReview = await ReviewModel.findOneAndDelete({ _id: reviewId });

    return deletedReview;
  }
}

module.exports = Review;
