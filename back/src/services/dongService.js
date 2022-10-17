const Dong = require("../db/models/Dong");

class dongService {
  static async getDongById(dongId) {
    const foundDong = await Dong.getDongById(dongId);
    return foundDong;
  }
}

module.exports = dongService;
