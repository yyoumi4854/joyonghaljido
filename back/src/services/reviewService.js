const bcrypt = require("bcrypt");
const Review = require("../db/models/Review");
const { SALT_ROUND, NOISE_LEVEL_DEFAULT_VALUES } = require("../constants");

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
    const hashedPassword = await bcrypt.hash(password, SALT_ROUND);

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
    let count = await Review.getCount(guId, dongId);
    const noiseLevelDefault = NOISE_LEVEL_DEFAULT_VALUES.slice();

    if (count.reviewCount.length === 0) {
      count.reviewCount[0] = { totalReveiw: 0 };
    } else if (count.noiseLevelCount.length < 3) {
      count.noiseLevelCount.forEach((levelCount) => {
        noiseLevelDefault.splice(levelCount._id - 1, 1, levelCount);
      });
      count.noiseLevelCount = noiseLevelDefault;
    }

    return count;
  }

  //check password
  static async checkPassword(reviewId, password) {
    const review = await Review.getByReviewId(reviewId);

    if (!review) {
      throw new Error("해당 리뷰는 존재하지 않습니다.");
    }

    const isMatched = await bcrypt.compare(password, review.password);

    return isMatched;
  }

  //update review
  static async update(reviewId, toUpdate) {
    const review = await Review.getByReviewId(reviewId);

    if (!review) {
      throw new Error("해당 리뷰는 존재하지 않습니다.");
    }

    const updatedReview = await Review.update(reviewId, toUpdate);

    return updatedReview;
  }

  //delete review
  static async delete(reviewId) {
    const deletedReview = await Review.delete(reviewId);

    return deletedReview;
  }
}

module.exports = reviewService;
