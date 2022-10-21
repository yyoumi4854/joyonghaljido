const { Router } = require("express");
const guService = require("../services/guService");

const guRouter = Router();

guRouter.get("/:guId", async (req, res, next) => {
  try {
    const { guId } = req.params;
    const foundGuGeoJSON = await guService.getGuGeoById(guId);
    res
      .header("Access-Control-Allow-Origin", "*")
      .status(200)
      .json(foundGuGeoJSON);
  } catch (error) {
    next(error);
  }
});

module.exports = guRouter;
