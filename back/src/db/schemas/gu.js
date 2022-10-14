const { Schema, model } = require("mongoose");

const GuSchema = new Schema({
  _id: {
    type: String,
    required: true,
  },
  type: String,
  name: {
    type: String,
    required: true,
  },
  crs: {
    type: {
      type: String,
    },
    properties: {
      name: String,
    },
  },
  center: {
    type: [Number],
    required: true,
  },
  features: {
    type: [
      {
        _id: false,
        type: {
          type: String,
        },
        properties: {
          EMD_CD: String,
          EMD_ENG_NM: String,
          name: String,
        },
        geometry: {
          type: {
            type: String,
            enum: ["Polygon", "MultiPolygon"],
            required: true,
          },
          coordinates: {
            type: [[[[Number]]]],
            required: true,
          },
        },
      },
    ],
    required: true,
  },
});

const GuModel = model("Gu", GuSchema);

module.exports = GuModel;
