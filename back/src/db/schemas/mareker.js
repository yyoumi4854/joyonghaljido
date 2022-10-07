const { Schema, model } = require("mongoose");

// (가능하다면) schema에 reviewCount 넣는 방향으로 고민중
const MarkerSchema = new Schema({
  dong: {
    type: String,
    required: true,
    unique: true,
  },
  gu: {
    type: String,
    required: true,
  },
  lng: {
    type: Number,
    required: true,
  },
  lat: {
    type: Number,
    required: true,
  },
  // reviews: {
  //   type: ObjectId,
  //   ref: "Review",
  // },
});

const MarkerModel = model("Marker", MarkerSchema);

module.exports = MarkerModel;
