const { GuModel } = require("..");

class Gu {
  static async getGuGeoById(guId) {
    const foundGuGeoJSON = await GuModel.findOne({ _id: guId });
    if (!foundGuGeoJSON) {
      throw new Error("일치하는 GeoJSON을 찾을 수가 없습니다.");
    }
    return foundGuGeoJSON;
  }
}

module.exports = Gu;
