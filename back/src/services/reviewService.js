const bcrypt = require("bcrypt");
const Review = require("../db/models/Review");

class reviewService {
  static async addReview({ gu, dong, title, description, password, noiseLevel }) {
    const hashedPassword = await bcrypt.hash(password, 8);
    const newReview = {
      gu,
      dong,
      title,
      description,
      password: hashedPassword,
      noiseLevel,
    };

      const createdReview = await Review.create(newReview);
      
      if (createdReview) {
        createdReview.errorMessage = null;
      } else {
        createdReview.errorMessage = "리뷰 등록에 실패하였습니다.";
      }

    return createdReview;
  }

  static async getReviewsByGu(gu) {
    const reviews = await Review.getReviewsByGu(gu);

    if (reviews) {
      reviews.errorMessage = null;
    } else {
      reviews.errorMessage = "리뷰를 불러오는데 실패했습니다.";
    }

    return reviews;
  }

  static async identifyPassword(reviewId, password) {
    const review = await Review.findByReviewId(reviewId);
    console.log(review);

    if (!review) {
      throw new Error("해당 리뷰는 존재하지 않습니다.");
    }

    const isMatched = await bcrypt.compare(password, review.password);
    console.log(isMatched);

    if (!isMatched) {
        throw new Error("비밀번호가 일치하지 않습니다.");
    }

    return isMatched;
  }

  // static async updateReview(review, toUpdate) {
  //   const updatedReview = await Review.updateReview(review, toUpdate)
  // }
}

module.exports = reviewService;
