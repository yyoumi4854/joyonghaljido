const { Schema, model } = require("mongoose");

const GuSchema = new Schema({
  name: {
    tyep: String,
    required: true,
  },
  location: {
    type: {
      type: String,
      enum: ["Polygon", "MultiPolygon"],
      required: true,
    },
    coordinates: {
      type: [[[Number]]],
      required: true,
    },
  },
});
