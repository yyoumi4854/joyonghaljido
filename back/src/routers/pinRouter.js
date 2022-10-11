const { Router } = require("express");
const pinModel = require("../db/schemas/pin");

const pinRouter = Router();

pinRouter.get("/:pinId", async (req, res) => {
  const { pinId } = req.params;
  const foundPin = await pinModel.findOne({ _id: pinId });
  res.status(200).json(foundPin);
});

module.exports = pinRouter;
