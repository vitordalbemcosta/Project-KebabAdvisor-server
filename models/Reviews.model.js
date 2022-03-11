const { Schema, model } = require("mongoose");

const reviewsSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId, ref: 'User',
    required: true
  },
  review: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
  },
  restaurant: {
    type: Schema.Types.ObjectId, ref: 'Restaurant'
  },
},
{
  timestamps: true,
}
);

const Reviews = model("Reviews", reviewsSchema);

module.exports = Reviews;