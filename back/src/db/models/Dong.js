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

  static async getDongListByGuId(guId) {
    const dongList = await DongModel.find(
      { guId },
      "_id name longitude latitude"
    );

    if (!dongList) {
      throw new Error("해당하는 자치구의 동을 찾을 수 없습니다.");
    }

    //"-동"으로 끝나는 dong name만 포함("-가"로 끝나는 것 제외)
    const filteredDongList = dongList.filter(
      (dong) => dong.name.slice(-1) === "동"
    );

    return filteredDongList;
  }
}

module.exports = Dong;
