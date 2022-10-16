const { Schema, model } = require("mongoose");

const PinSchema = new Schema({
  _id: {
    type: String,
    required: true,
  },
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
  guId: {
    type: String,
    required: true,
  },
  dongId: {
    type: String,
    required: true,
  },
  timeDecibels: {
    type: [Number],
    required: true,
  },
});

const PinModel = model("Pin", PinSchema);

module.exports = PinModel;
