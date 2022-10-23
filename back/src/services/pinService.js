const Pin = require("../db/models/Pin");

class pinService {
  static async getPinById(pinId) {
    return Pin.getPinById(pinId);
  }
}

module.exports = pinService;
