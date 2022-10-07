// (미완) GeoJSON 이해가 부족하여 아직 작업중 입니다.

const { Schema, model } = require("mongoose");

const PolygonSchema = new Schema({
  type: {
    type: String,
    enum: ["Polygon"], // "Multipolygon"
    required: true,
  },
  coordinates: {
    type: [[[Number]]],
    required: true,
  },
});
