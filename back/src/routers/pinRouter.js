const { Router } = require("express");
const PinModel = require("../db/schemas/pin");

const pinRouter = Router();

pinRouter.get("/pins/:name", async (req, res) => {
  console.log(req.params.name);
  const decodedName = decodeURIComponent(req.params.name);

  const foundPin = await PinModel.find({ name: decodedName });
  return res.status(200).json(foundPin);
});

module.exports = pinRouter;
