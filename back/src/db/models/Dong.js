const { DongModel } = require("..");

class Dong {
  static async getDongById(dongId) {
    const foundDongArr = await DongModel.aggregate([
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
        $unwind: {
          path: "$guName",
        },
      },
      {
        $set: {
          guName: "$guName.name",
        },
      },
    ]);

    const foundDong = foundDongArr[0];

    if (!foundDong) {
      throw new Error("해당 동을 찾을 수 없습니다.");
    }

    return foundDong;
  }
}

module.exports = Dong;
