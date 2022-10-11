const dongModel = require("../schemas/dong");

class Dong {
  static async getDongById(dongId) {
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

    if (!foundDongData) {
      throw new Error("동 데이터를 찾을 수 없습니다.");
    }

    return foundDongData;
  }
}

module.exports = Dong;
