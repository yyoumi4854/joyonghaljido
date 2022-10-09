const { Schema, model } = require("mongoose");

const MarkerSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  longitude: {
    type: Number,
    required: true,
  },
  latitude: {
    type: Number,
    required: true,
  },
  // guId: {
  //   type: String,
  //   required: true,
  //   ref: "Gu",
  // },
  // reviewId: {
  //   type: String,
  //   required: true,
  //   ref: "Review",
  // },
});

const MarkerModel = model("Marker", MarkerSchema);

module.exports = MarkerModel;
