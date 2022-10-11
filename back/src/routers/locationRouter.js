const { Router } = require("express");
const guModel = require("../db/schemas/gu");
const dongModel = require("../db/schemas/dong");

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
    const dongData = { _id: dong._id, name: dong.name };
    dongs.push(dongData);
  });

  const foundGuData = { _id: guId, name: foundGu.name, dongs };

  res.status(200).json(foundGuData);
});

locationRouter.get("/gus/:guId/dongs", async (req, res) => {
  const { guId } = req.params;
  const dongsData = await dongModel.find({ guId });
  const dongs = [];
  dongsData.map((dong) => {
    const dongData = { _id: dong._id, name: dong.name };
    dongs.push(dongData);
  });

  console.log(dongs);

  res.status(200).json(dongs);
});

module.exports = locationRouter;
