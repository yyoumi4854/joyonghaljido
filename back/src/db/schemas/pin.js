const { Schema, model } = require("mongoose");

const PinSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  address: String,
  gu: {
    type: String,
    required: true,
  },
  dong: {
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
});

const PinModel = model("Pin", PinSchema);

module.exports = PinModel;
