const { Router } = require("express");
const guModel = require("../db/schemas/gu");
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

module.exports = locationRouter;
