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
  guId: {
    type: ObjectId,
    required: true,
    ref: "Gu",
  },
  dongId: {
    type: ObjectId,
    required: true,
    ref: "Dong",
  },
});

const PinModel = model("Pin", PinSchema);

module.exports = PinModel;
