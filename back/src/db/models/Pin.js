const { PinModel } = require("..");

class Pin {
  static async getPinListByGuId(guId) {
    const pinList = await PinModel.aggregate([
      {
        $match: {
          guId,
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
        $unwind: {
          path: "$dongName",
        },
      },
      {
        $set: {
          dongName: "$dongName.name",
          timeDecibelsAvg: { $avg: "$timeDecibels" },
        },
      },
      {
        $project: {
          guId: 0,
          dongId: 0,
        },
      },
    ]);

    if (!pinList) {
      throw new Error("해당하는 자치구의 핀을 찾을 수 없습니다.");
    }

    return pinList;
  }

  static async getPinById(pinId) {
    const foundPinArr = await PinModel.aggregate([
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
        $unwind: {
          path: "$dongName",
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
        $unwind: {
          path: "$guName",
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

    const foundPin = foundPinArr[0];

    if (!foundPin) {
      throw new Error("해당 핀을 찾을 수 없습니다.");
    }
    return foundPin;
  }
}

module.exports = Pin;
