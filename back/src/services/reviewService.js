const bcrypt = require("bcrypt");
const Review = require("../db/models/Review");

class reviewService {
  //create review
  static async create({
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

    const createdReview = await Review.create(newReview);

    if (!createdReview) {
      throw new Error("리뷰 등록에 실패했습니다.");
    }

    return createdReview;
  }

  //get reivews
  static async getList(guId, dongId, skip, limit, noiseLevel) {
    let reviews = [];

    if (!dongId) {
      reviews = await Review.getListByGu(guId, skip, limit, noiseLevel);
    } else {
      reviews = await Review.getListByDong(dongId, skip, limit, noiseLevel);
    }

    return reviews;
  }

  //get review count
  static async getCount(guId, dongId) {
    const count = await Review.getCount(guId, dongId);

    return count;
  }

  //check password
  static async checkPassword(reviewId, password) {
    const review = await Review.getByReviewId(reviewId);

    if (!review) {
      throw new Error("해당 리뷰는 존재하지 않습니다.");
    }

    const isMatched = await bcrypt.compare(password, review.password);

    if (!isMatched) {
      throw new Error("비밀번호가 일치하지 않습니다.");
    }

    return isMatched;
  }

  //update review
  static async update(reviewId, toUpdate) {
    const updates = Object.keys(toUpdate);

    updates.forEach(async (update) => {
      await Review.update({ _id: reviewId }, { [update]: toUpdate[update] });
    });

    const updatedReview = await Review.getByReviewId(reviewId);

    return updatedReview;
  }

  //delete review
  static async delete(reviewId) {
    const deletedReview = await Review.delete(reviewId);

    return deletedReview;
  }
}

module.exports = reviewService;
