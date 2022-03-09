const { Schema, model } = require("mongoose");

const restaurantSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        address: {
            type: String,
            required: true

        },
        rating: {
            type: String,
            required: true

        },
        image: {
            type: String
        }
    },
    {
        timestamps: true
    }
);

const Restaurant = model('Restaurant', restaurantSchema);

module.exports = Restaurant;