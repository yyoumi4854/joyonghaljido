const { Router } = require("express");
const reviewService = require("../services/reviewService");

const router = Router();

//create review
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

//get review by gu
router.get("/reviews/:gu", async (req, res, next) => {
  try {
    const gu = req.params.gu;

    const reviews = await reviewService.getReviewsByGu(gu);

    if (reviews.errorMessage) {
      throw new Error(reviews.errorMessage);
    }

    res.status(200).json(reviews);
  } catch (error) {
    next(error);
  }
})

//identify password
router.get("/reviews/:id", async (req, res, next) => {
  try {
    console.log("지금 실행되고 있는거지?");
    const reviewId = req.params.id;
    const password = req.body.password;
    const result = await reviewService.identifyPassword(reviewId, password);
    console.log(result);

    if (result.errorMessage) {
      throw new Error(result.errorMessage);
    }
    
    res.status(205).send(result);
  } catch(error) {
    next(error);
  }
})


//update review
// router.put("/reviews/:id", async (req, res, next) => {
//   try {
//     const updates = [ "gu", "dong", "title", "description", "password", "noiseLevel" ];
//     // let toUpdate = {};
    
//     updates.forEach((update) => {
//       review[update] = req.body[update];
//     })

//     await review.save();

//     // const updatedreview = await reviewService.updateReview(review, toUpdate)

//     // if (updatedreview.errorMessage) {
//     //   throw new Error(updatedreview.errorMessage);
//     // }

//     res.status(200).json(review);
//   } catch(error) {
//     next(error);
//   }
// })


//delete review

module.exports = router;
