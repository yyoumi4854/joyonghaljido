const Gu = require("../db/models/Gu");

class guService {
  static async getGuGeoById(guId) {
    return Gu.getGuGeoById(guId);
  }
}

module.exports = guService;
