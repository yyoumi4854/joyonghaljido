const { Schema, model, Types } = require("mongoose");

const ReviewSchema = Schema(
  {
    // _id: {
    //   type: String,
    //   required: true,
    //   default: String(new Types.ObjectId()),
    // },
    guId: {
      type: Types.ObjectId,
      required: true,
      ref: "GuTest",
    },
    dongId: {
      type: Types.ObjectId,
      required: true,
      ref: "DongTest",
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

//json으로 보낼 때 password 빼고 보냄
ReviewSchema.methods.toJSON = function () {
  const review = this;
  const reviewObject = review.toObject();

  delete reviewObject.password;

  return reviewObject;
};

const ReviewModel = model("Review", ReviewSchema);

module.exports = ReviewModel;
