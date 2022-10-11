const { Router } = require("express");
const dongModel = require("../db/schemas/dong");
const guModel = require("../db/schemas/gu");

const dongRouter = Router();

dongRouter.get("/:dongId", async (req, res) => {
  const { dongId } = req.params;

  const foundDong = await dongModel.findOne({ _id: dongId });

  const guData = await guModel.findOne({ _id: foundDong.guId });
  const guName = guData.name;

  res.status(200).json({ foundDong, guName });
});

module.exports = dongRouter;
