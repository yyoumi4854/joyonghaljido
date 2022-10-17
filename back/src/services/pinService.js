const Pin = require("../db/models/Pin");

class pinService {
  static async getPinById(pinId) {
    const foundPin = await Pin.getPinById(pinId);
    return foundPin;
  }
}

module.exports = pinService;
