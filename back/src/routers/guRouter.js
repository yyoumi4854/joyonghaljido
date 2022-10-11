const { Router } = require("express");
const guModel = require("../db/schemas/gu");

const guRouter = Router();

guRouter.get("/:id", async (req, res) => {
  const { id } = req.params;
  const foundGu = await guModel.find({ _id: id });
  res.status(200).json(foundGu);
});

module.exports = guRouter;
