const { Schema, model } = require("mongoose");

const DongSchema = new Schema({
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
});

const DongModel = model("Dong", DongSchema);

module.exports = DongModel;
