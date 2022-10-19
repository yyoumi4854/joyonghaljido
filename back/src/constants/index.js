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
