const mongoose = require("mongoose");
const { MONGODB_URL } = require("../constants");
const ReviewModel = require("./schemas/review");
const GuModel = require("./schemas/gu");
const DongModel = require("./schemas/dong");
const PinModel = require("./schemas/pin");

const DB_URL = MONGODB_URL || "MongoDB 서버 주소가 설정되지 않았습니다.";

mongoose.connect(DB_URL);
const db = mongoose.connection;

db.on("connected", () => {
  console.log("✅ 정상적으로 MongoDB 서버에 연결되었습니다.");
});

db.on("error", (error) => {
  console.log("✅ MongoDB 연결에 실패하였습니다..\n" + error);
});

module.exports = {
  ReviewModel,
  GuModel,
  DongModel,
  PinModel,
};
