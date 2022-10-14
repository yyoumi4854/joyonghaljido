const { Router } = require("express");
const pinModel = require("../db/schemas/pin");

const pinRouter = Router();

pinRouter.get("/:pinId", async (req, res) => {
  const { pinId } = req.params;

  const foundPin = await pinModel.aggregate([
    {
      $match: {
        _id: pinId,
      },
    },
    {
      $lookup: {
        from: "dongs",
        localField: "dongId",
        foreignField: "_id",
        as: "dongName",
      },
    },
    {
      $set: {
        dongName: {
          $arrayElemAt: ["$dongName", 0],
        },
      },
    },
    {
      $set: {
        dongName: "$dongName.name",
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
    {
      $project: {
        _id: 1,
        name: 1,
        guName: 1,
        dongName: 1,
        timeDecibels: 1,
      },
    },
  ]);

  const foundPinData = foundPin[0];

  res.status(200).json(foundPinData);
});

module.exports = pinRouter;
