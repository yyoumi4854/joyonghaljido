const { Router } = require("express");
const { Types } = require("mongoose");
const PinModel = require("../db/schemas/pin");

const pinRouter = Router();

pinRouter.get("/:id", async (req, res) => {
  const { id } = req.params;
  const foundPin = await PinModel.find({ _id: Types.ObjectId(id) });
  res.status(200).json(foundPin);
});

module.exports = pinRouter;
