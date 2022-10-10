const { Schema, model } = require("mongoose");

const DongSchema = new Schema({
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

const DongModel = model("Dong", DongSchema);

module.exports = DongModel;
