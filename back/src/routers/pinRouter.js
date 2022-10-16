const { Router } = require("express");
const pinService = require("../services/pinService");

const pinRouter = Router();

pinRouter.get("/:pinId", async (req, res, next) => {
  try {
    const { pinId } = req.params;
    const foundPin = await pinService.getPinById(pinId);
    res.status(200).json(foundPin);
  } catch (error) {
    next(error);
  }
});

module.exports = pinRouter;
