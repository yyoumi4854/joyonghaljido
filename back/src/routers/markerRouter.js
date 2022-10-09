const { Router } = require("express");
const { Types } = require("mongoose");
const MarkerModel = require("../db/schemas/mareker");

const markerRouter = Router();

markerRouter.get("/:id", async (req, res) => {
  const { id } = req.params;
  const foundMarker = await MarkerModel.find({ _id: Types.ObjectId(id) });
  res.status(200).json(foundMarker);
});

module.exports = markerRouter;
