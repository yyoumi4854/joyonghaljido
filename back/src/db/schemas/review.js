const { Schema, model, Types } = require("mongoose");

const ReviewSchema = Schema(
  {
    _id: {
      type: String,
      required: true,
      default: () => String(new Types.ObjectId()),
    },
    guId: {
      type: String,
      required: true,
    },
    dongId: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    noiseLevel: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

//send json without password
ReviewSchema.methods.toJSON = function () {
  const review = this;
  const reviewObject = review.toObject();

  delete reviewObject.password;

  return reviewObject;
};

const ReviewModel = model("Review", ReviewSchema);

module.exports = ReviewModel;
