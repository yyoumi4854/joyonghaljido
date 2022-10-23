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
      {
        $project: {
          longitude: 0,
          latitude: 0,
          guId: 0,
        },
      },
    ]);

    const foundDong = foundDongArr[0];

    if (!foundDong) {
      throw new Error("해당 동을 찾을 수 없습니다.");
    }

    return foundDong;
  }

  static async getDongListByGuId(guId) {
    const dongList = await DongModel.find(
      { guId, name: /동$/ },
      "_id name longitude latitude"
    );

    if (!dongList) {
      throw new Error("해당하는 자치구의 동을 찾을 수 없습니다.");
    }

    return dongList;
  }
}

module.exports = Dong;
