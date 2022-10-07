const { Router } = require("express");
const MarkerModel = require("../db/schemas/mareker");

const markerRouter = Router();

markerRouter.get("/markers/:dong", async (req, res) => {
  const decodedDong = decodeURIComponent(req.params.dong);
  const foundDong = await MarkerModel.find({ dong: decodedDong });
  res.status(200).json(foundDong);
});

module.exports = markerRouter;
