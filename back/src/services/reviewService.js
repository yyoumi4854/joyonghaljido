const bcrypt = require("bcrypt");
const Review = require("../db/models/Review");
const { GuTestModel, DongTestModel } = require("../db");


class reviewService {
  static async addReview({ gu, dong, title, description, password, noiseLevel }) {
    const hashedPassword = await bcrypt.hash(password, 8);
    const guData = await GuTestModel.findOne({ name: gu });
    const dongData = await DongTestModel.findOne({ name: dong });

    const newReview = {
      guId: guData._id,
      dongId: dongData._id,
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

  static async getReviewsByGu(guId) {
    const reviews = await Review.getReviewsByGu(guId);

    if (reviews) {
      reviews.errorMessage = null;
    } else {
      reviews.errorMessage = "리뷰를 불러오는데 실패했습니다.";
    }

    return reviews;
  }

  static async getReviewsByDong(dongId) {
    const reviews = await Review.getReviewsByDong(dongId);

    if (reviews) {
      reviews.errorMessage = null;
    } else {
      reviews.errorMessage = "리뷰를 불러오는데 실패했습니다.";
    }

    return reviews;
  }


  static async updateReview(reviewId, toUpdate) {
    const updates = Object.keys(toUpdate);

    if (toUpdate.gu) {
      const guData = await GuTestModel.findOne({ name: toUpdate.gu });
      const idx = updates.indexOf("gu");
      updates.splice(idx, 1, "guId");
      toUpdate.guId = guData._id;
    }

    if (toUpdate.dong) {
      const dongData = await DongTestModel.findOne({ name: toUpdate.dong });
      const idx = updates.indexOf("dong");
      updates.splice(idx, 1, "dongId");
      toUpdate.dongId = dongData._id;
    }
    
    //password hashing
    if (toUpdate.password) {
      const hashedPassword = await bcrypt.hash(toUpdate.password, 8);
      toUpdate.password = hashedPassword;
    }
    
    updates.forEach(async (update) => {
      await Review.updateReview({ _id: reviewId }, { [update]: toUpdate[update] });
    })

    const updatedReview = await Review.findByReviewId(reviewId);

    return updatedReview;
  }

  static async deleteReview(reviewId) {
    const deletedReview = await Review.deleteReview(reviewId);

    return deletedReview;
  }
}

module.exports = reviewService;
