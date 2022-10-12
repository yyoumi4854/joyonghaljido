const bcrypt = require("bcrypt");
const Review = require("../db/models/Review");

class reviewService {
  //create review
  static async addReview({
    guId,
    dongId,
    title,
    description,
    password,
    noiseLevel,
  }) {
    const hashedPassword = await bcrypt.hash(password, 8);

    const newReview = {
      guId,
      dongId,
      title,
      description,
      password: hashedPassword,
      noiseLevel,
    };

    const createdReview = await Review.createReview(newReview);

    if (createdReview) {
      createdReview.errorMessage = null;
    } else {
      createdReview.errorMessage = "리뷰 등록에 실패했습니다.";
    }

    return createdReview;
  }

  //get reivews
  static async getReviews(guId, dongId, skip, filter) {
    let reviews = [];

    if (!dongId) {
      reviews = await Review.getReviewsByGu(guId, skip, filter);
    } else {
      reviews = await Review.getReviewsByDong(dongId, skip, filter);
    }

    if (reviews.length === 0) {
      reviews.errorMessage = "리뷰가 존재하지 않습니다.";
    } else {
      reviews.errorMessage = null;
    }

    return reviews;
  }

  //update review
  static async updateReview(reviewId, toUpdate) {
    const updates = Object.keys(toUpdate);

    //password hashing before update
    if (toUpdate.password) {
      const hashedPassword = await bcrypt.hash(toUpdate.password, 8);
      toUpdate.password = hashedPassword;
    }

    updates.forEach(async (update) => {
      await Review.updateReview(
        { _id: reviewId },
        { [update]: toUpdate[update] }
      );
    });

    const updatedReview = await Review.findByReviewId(reviewId);

    return updatedReview;
  }

  //delete review
  static async deleteReview(reviewId) {
    const deletedReview = await Review.deleteReview(reviewId);

    return deletedReview;
  }
}

module.exports = reviewService;
