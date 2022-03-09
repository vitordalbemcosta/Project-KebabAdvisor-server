const { Schema, model } = require("mongoose");

const reviewsSchema = new Schema({
  name: {
    type: String,
    required: true
  },
    description: {
        type: String
    },
    img: {
        type: String,
        default: "imgURL"
    },
});