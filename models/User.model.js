const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const userSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      match: [/^\S+@\S+\.\S+$/, "Please use a valid email address."],
    },
    favourite: [{ type: Schema.Types.ObjectId, ref: "Restaurant" }],

    passwordHash: {
      type: String,
      required: true,
    },
    name: {
      type: String,
    },
    reviews: [
      {
        type: Schema.Types.ObjectId, ref: "Reviews",
      }
    ]
  },
  {
    timestamps: true,
  }
);

const User = model("User", userSchema);

module.exports = User;
