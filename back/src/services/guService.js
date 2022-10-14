const Gu = require("../db/models/Gu");

class guService {
  static async getGuGeoById(guId) {
    const foundGuGeoJSON = await Gu.getGuGeoById(guId);
    return foundGuGeoJSON;
  }
}

module.exports = guService;
