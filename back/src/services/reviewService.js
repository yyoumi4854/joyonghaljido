const bcrypt = require("bcrypt");
const { findByReviewId } = require("../db/models/Review");
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

      const createdReview = await Review.createReview(newReview);
      
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


  static async updateReview(review, toUpdate) {
    const updates = Object.keys(toUpdate);
    
    //password hashing
    if (toUpdate.password) {
      const hashedPassword = await bcrypt.hash(toUpdate.password, 8);
      toUpdate.password = hashedPassword;
    }
    
    updates.forEach(async (update) => {
      await Review.updateReview({ _id: review._id }, { [update]: toUpdate[update] });
    })

    const updatedReview = await Review.findByReviewId(review._id);

    return updatedReview;
  }
}

module.exports = reviewService;
