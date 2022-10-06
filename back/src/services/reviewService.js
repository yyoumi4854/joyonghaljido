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
    createdReview.errorMessage = null;

    return createdReview;
  }
}

module.exports = reviewService;
