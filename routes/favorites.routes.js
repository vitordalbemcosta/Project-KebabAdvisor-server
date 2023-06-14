const router = require("express").Router();
const mongoose = require("mongoose");

const User = require("../models/User.model");
const Restaurant = require("../models/Restaurant.model");
const Reviews = require("../models/Reviews.model");

router.post("/favorites", (req, res, next) => {
  const { userId, restaurantId } = req.body;
});
