const { Router } = require("express");
const dongModel = require("../db/schemas/dong");
const guModel = require("../db/schemas/gu");

const dongRouter = Router();

dongRouter.get("/:dongId", async (req, res) => {
  const { dongId } = req.params;

  const foundDong = await dongModel.aggregate([
    {
      $match: {
        _id: dongId,
      },
    },
    {
      $lookup: {
        from: "gus",
        localField: "guId",
        foreignField: "_id",
        as: "guName",
      },
    },
    {
      $set: {
        guName: {
          $arrayElemAt: ["$guName", 0],
        },
      },
    },
    {
      $set: {
        guName: "$guName.name",
      },
    },
  ]);

  const foundDongData = foundDong[0];

  res.status(200).json(foundDongData);
});

module.exports = dongRouter;
