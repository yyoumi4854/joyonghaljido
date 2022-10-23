const Gu = require("../db/models/Gu");
const Dong = require("../db/models/Dong");
const Pin = require("../db/models/Pin");

class locationService {
  static async getGuNameAndIdList() {
    return Gu.getGuNameAndIdList();
  }

  static async getDongsAndPins(guId) {
    const foundGu = await Gu.getGuById(guId);
    const foundDongs = await Dong.getDongListByGuId(guId);
    const foundPins = await Pin.getPinListByGuId(guId);

    const dongsAndPins = {
      ...foundGu,
      dongs: foundDongs,
      pins: foundPins,
    };

    return dongsAndPins;
  }

  static async getDongsByGuId(guId) {
    const foundGu = await Gu.getGuById(guId);
    const foundDongs = await Dong.getDongListByGuId(guId);

    const dongs = {
      ...foundGu,
      dongs: foundDongs,
    };

    return dongs;
  }
}

module.exports = locationService;
