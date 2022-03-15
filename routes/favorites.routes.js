const router = require("express").Router();
const mongoose = require("mongoose");

const User = require("../models/User.model");
const Restaurant = require("../models/Restaurant.model");
const Reviews = require("../models/Reviews.model");

router.post("/favorites", (req, res, next) => {
    const { userId, restaurantId } = req.body;
    
    // user.create()  vou ter que fazer um modify e $push no favorite do usuario... 
    



//   Restaurant.create({ name, address, description, rating, image })
//     .then((createRestaurant) => {
//       res.json(createRestaurant);
//     })
//     .catch((err) => next(err));
});
