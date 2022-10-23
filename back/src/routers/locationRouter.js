const { Router } = require("express");
const locationService = require("../services/locationService");

const locationRouter = Router();

locationRouter.get("/gus", async (req, res, next) => {
  try {
    const guNameAndIdList = await locationService.getGuNameAndIdList();
    res.status(200).json(guNameAndIdList);
  } catch (error) {
    next(error);
  }
});

locationRouter.get("/gus/:guId", async (req, res, next) => {
  try {
    const { guId } = req.params;
    const dongsAndPins = await locationService.getDongsAndPins(guId);
    res.status(200).json(dongsAndPins);
  } catch (error) {
    next(error);
  }
});

locationRouter.get("/gus/:guId/dongs", async (req, res) => {
  const { guId } = req.params;
  const dongs = await locationService.getDongsByGuId(guId);
  res.status(200).json(dongs);
});

module.exports = locationRouter;
