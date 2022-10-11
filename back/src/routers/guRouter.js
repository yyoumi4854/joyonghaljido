const { Router } = require("express");
const guModel = require("../db/schemas/gu");

const guRouter = Router();

guRouter.get("/:guId", async (req, res) => {
  const { guId } = req.params;
  const foundGu = await guModel.find({ _id: guId });
  res.status(200).json(foundGu);
});

module.exports = guRouter;
