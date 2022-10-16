const { Router } = require("express");
const reviewService = require("../services/reviewService");
const passwordMiddleware = require("../middlewares/passwordMiddleware");
const postRequestLimiter = require("../middlewares/ipLimitMiddleware");

const router = Router();

//create review
router.post("/", postRequestLimiter, async (req, res, next) => {
  try {
    const guId = req.body.guId;
    const dongId = req.body.dongId;
    const title = req.body.title;
    const description = req.body.description;
    const password = req.body.password;
    const noiseLevel = req.body.noiseLevel;

    const newReview = await reviewService.create({
      guId,
      dongId,
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

//get reviews
router.get("/", async (req, res, next) => {
  try {
    const guId = req.query.guId ?? null;
    const dongId = req.query.dongId ?? null;
    const skip = req.query.skip ?? 0;
    const filter = req.query.filter ?? null;

    const reviews = await reviewService.getList(guId, dongId, skip, filter);

    if (reviews.errorMessage) {
      throw new Error(reviews.errorMessage);
    }

    res.status(200).json(reviews);
  } catch (error) {
    next(error);
  }
});

//update review
router.put("/:reviewId", passwordMiddleware, async (req, res, next) => {
  try {
    const reviewId = req.currentReview._id;
    const updates = [
      "guId",
      "dongId",
      "title",
      "description",
      "password",
      "noiseLevel",
    ];
    let toUpdate = {};

    updates.forEach((update) => {
      if (req.body[update]) {
        toUpdate[update] = req.body[update];
      }
    });

    const updatedReview = await reviewService.update(reviewId, toUpdate);

    res.status(200).json(updatedReview);
  } catch (error) {
    next(error);
  }
});

//delete review
router.delete("/:reviewId", passwordMiddleware, async (req, res, next) => {
  try {
    const reviewId = req.currentReview._id;

    const deletedReview = await reviewService.delete(reviewId);

    res.status(200).json(deletedReview);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
