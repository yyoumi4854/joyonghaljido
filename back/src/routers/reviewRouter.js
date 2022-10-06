const { Router } = require("express");
const reviewService = require("../services/reviewService");

const router = Router();

router.post("/reviews", async (req, res, next) => {
  try {
    const gu = req.body.gu;
    const dong = req.body.dong;
    const title = req.body.title;
    const description = req.body.description;
    const password = req.body.password;
    const noiseLevel = req.body.noiseLevel;

    const newReview = await reviewService.addReview({
      gu,
      dong,
      title,
      description,
      password,
      noiseLevel,
    });

    if (newReview.errorMessage) {
      throw new Error(newReview.errorMessage);
    }

    res.status(201).json(newReview);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
