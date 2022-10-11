const dongModel = require("../db/schemas/dong");
const Dong = require("../db/models/Dong");

class dongService {
  static async getDongById(dongId) {
    const dong = await Dong.getDongById(dongId);
    return dong;
  }
}

module.exports = dongService;
