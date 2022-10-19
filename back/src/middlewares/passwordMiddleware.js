const reviewService = require("../services/reviewService");

const passwordMiddleware = async (req, res, next) => {
  const reviewId = req.params.reviewId;
  const currentPassword = req.body.currentPassword;

  try {
    const isMatched = await reviewService.checkPassword(
      reviewId,
      currentPassword
    );

    if (!isMatched) {
      throw new Error("비밀번호가 일치하지 않습니다.");
    }
  } catch (error) {
    next(error);
  }

  next();
};

module.exports = passwordMiddleware;
