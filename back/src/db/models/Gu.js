const { GuModel } = require("..");

class Gu {
  static async getGuById(guId) {
    const foundGu = await GuModel.findOne({ _id: guId }, "_id name").lean();
    if (!foundGu) {
      throw new Error("해당하는 자치구를 찾을 수 없습니다.");
    }
    return foundGu;
  }

  static async getGuGeoById(guId) {
    const foundGuGeoJSON = await GuModel.findOne({ _id: guId });
    if (!foundGuGeoJSON) {
      throw new Error("해당하는 GeoJSON을 찾을 수 없습니다.");
    }
    return foundGuGeoJSON;
  }

  static async getGuNameAndIdList() {
    const gus = await GuModel.find({}, "_id name");
    if (!gus) {
      throw new Error("리스트를 불러올 수 없습니다. 다시 시도해주세요.");
    }
    return gus;
  }
}

module.exports = Gu;
