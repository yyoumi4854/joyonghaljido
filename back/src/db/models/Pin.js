const { PinModel } = require("..");

class Pin {
  static async getPinListByGuId(guId) {
    const pinList = await PinModel.find(
      { guId },
      "_id name longitude latitude timeDecibels"
    );

    if (!pinList) {
      throw new Error("해당하는 자치구의 핀을 찾을 수 없습니다.");
    }

    const foundPins = [];
    const getAvg = (arr) => arr.reduce((a, b) => a + b, 0) / arr.length;
    pinList.map((pin) => {
      const pinData = {
        ...pin.toObject(),
        timeDeciblesAvg: getAvg(pin.timeDecibels),
      };
      foundPins.push(pinData);
    });

    return foundPins;
  }
}

module.exports = Pin;
