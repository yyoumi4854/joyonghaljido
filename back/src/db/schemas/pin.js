const { Schema, model } = require("mongoose");

const PinSchema = new Schema({
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

const PinModel = model("Pin", PinSchema);

module.exports = PinModel;
