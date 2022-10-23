const Dong = require("../db/models/Dong");

class dongService {
  static async getDongById(dongId) {
    return Dong.getDongById(dongId);
  }
}

module.exports = dongService;
