exports.PORT = process.env.PORT || 5001;
exports.MONGODB_URL = process.env.MONGODB_URL;
exports.SALT_ROUND = 8;
exports.GET_QUERY_DEFAULT_VALUES = {
  guId: null,
  dongId: null,
  skip: 0,
  limit: 10,
  noiseLevel: null,
};
exports.NOISE_LEVEL_DEFAULT_VALUES = [
  {
    _id: 1,
    total: 0,
  },
  {
    _id: 2,
    total: 0,
  },
  {
    _id: 3,
    total: 0,
  },
];
