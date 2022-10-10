const { Schema, model } = require("mongoose");

const DongSchema = new Schema({
  guId: {
    type: ObjectId,
    required: true,
    ref: "Gu",
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
});

const DongModel = model("Dong", DongSchema);

module.exports = DongModel;
