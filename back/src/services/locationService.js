const Gu = require("../db/models/Gu");
const Dong = require("../db/models/Dong");
const Pin = require("../db/models/Pin");

class locationService {
  static async getGuNameAndIdList() {
    const guNameAndIdList = await Gu.getGuNameAndIdList();
    return guNameAndIdList;
  }

  static async getDongsAndPins(guId) {
    const foundGu = await Gu.getGuById(guId);
    const foundDongs = await Dong.getDongListByGuId(guId);
    const foundPins = await Pin.getPinListByGuId(guId);

    const dongsAndPins = {
      ...foundGu.toObject(),
      dongs: foundDongs,
      pins: foundPins,
    };

    return dongsAndPins;
  }
}

module.exports = locationService;
