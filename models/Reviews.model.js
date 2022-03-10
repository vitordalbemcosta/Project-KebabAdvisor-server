const { Schema, model } = require("mongoose");

const reviewsSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  img: {
    type: String,
    default: "imgURL"
  },
},
{
  timestamps: true,
}
);

const Reviews = model("Reviews", reviewsSchema);

module.exports = Reviews;