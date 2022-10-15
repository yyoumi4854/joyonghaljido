const { Router } = require("express");
const guModel = require("../db/schemas/gu");
const dongModel = require("../db/schemas/dong");
const pinModel = require("../db/schemas/pin");

const locationRouter = Router();

locationRouter.get("/gus", async (req, res) => {
  const guList = [];
  const gus = await guModel.find({});
  gus.map((gu) => {
    const guData = { _id: gu._id, name: gu.name };
    guList.push(guData);
  });

  res.status(200).json(guList);
});

locationRouter.get("/gus/:guId", async (req, res) => {
  const { guId } = req.params;
  const foundGu = await guModel.findOne({ _id: guId });

  const dongsData = await dongModel.find({ guId });
  const dongs = [];
  dongsData.map((dong) => {
    const dongData = {
      _id: dong._id,
      name: dong.name,
      longitude: dong.longitude,
      latitude: dong.latitude,
    };
    dongs.push(dongData);
  });

  const pinsData = await pinModel.find({ guId });
  const pins = [];
  pinsData.map((pin) => {
    const pinData = {
      _id: pin._id,
      name: pin.name,
      longitude: pin.longitude,
      latitude: pin.latitude,
      timeDeciblesAvg:
        pin.timeDecibels.reduce((a, b) => a + b, 0) / pin.timeDecibels.length,
    };
    pins.push(pinData);
  });

  const foundGuData = { _id: guId, name: foundGu.name, dongs, pins };

  res.status(200).json(foundGuData);
});

locationRouter.get("/gus/:guId/dongs", async (req, res) => {
  const { guId } = req.params;
  const foundGu = await guModel.findOne({ _id: guId });

  const dongsData = await dongModel.find({ guId });
  const dongs = [];
  dongsData.map((dong) => {
    const dongData = {
      _id: dong._id,
      name: dong.name,
      longitude: dong.longitude,
      latitude: dong.latitude,
    };
    dongs.push(dongData);
  });

  const foundGuData = { _id: guId, name: foundGu.name, dongs };

  res.status(200).json(foundGuData);
});

locationRouter.get("/gus/:guId/pins", async (req, res) => {
  const { guId } = req.params;
  const foundGu = await guModel.findOne({ _id: guId });

  const pinsData = await pinModel.find({ guId });
  const pins = [];
  pinsData.map((pin) => {
    const pinData = {
      _id: pin._id,
      name: pin.name,
      longitude: pin.longitude,
      latitude: pin.latitude,
    };
    pins.push(pinData);
  });

  const foundGuData = { _id: guId, name: foundGu.name, pins };

  res.status(200).json(foundGuData);
});

module.exports = locationRouter;
