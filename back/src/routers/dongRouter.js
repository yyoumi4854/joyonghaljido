const { Router } = require("express");
const { Types } = require("mongoose");
const dongModel = require("../db/schemas/dong");

const dongRouter = Router();

dongRouter.get("/:id", async (req, res) => {
  const { id } = req.params;
  const foundDong = await dongModel.find({ _id: Types.ObjectId(id) });
  res.status(200).json(foundDong);
});

module.exports = dongRouter;
