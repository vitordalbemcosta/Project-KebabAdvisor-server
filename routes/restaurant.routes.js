const router = require("express").Router();
const mongoose = require("mongoose");


const User = require("../models/User.model");
const Restaurant = require("../models/Restaurant.model")
const Reviews = require("../models/Reviews.model")

router.post('/restaurants', (req, res, next) => {
    const { name, address, description, rating, image } = req.body;

    Restaurant.create({ name, address, description, rating, image })
        .then((createRestaurant) => {
            res.json(createRestaurant);
        }).catch((err) => next(err));
});
router.get("/restaurants", (req, res, next) => {
  Restaurant.find()
    .then((response) => res.json(response))
    .catch((err) => res.json(err));
});

router.get("/restaurants/:restaurantId", (req, res, next) => {
  const { restaurantId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(restaurantId)) {
    res.status(400).json({ message: "Specified Id is not valid" });
    return;
  }

  Restaurant.findById(restaurantId)
    .populate("tasks")
    .then((response) => res.json(response))
    .catch((err) => res.json(err));
});


router.put("/restaurants/:restaurantId", (req, res, next) => {
  const { restaurantId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(restaurantId)) {
    res.status(400).json({ message: "Specified Id is not valid" });
    return;
  }

  Restaurant.findByIdAndUpdate(restaurantId, req.body, { new: true })
    .then((response) => res.json(response))
    .catch((err) => res.json(err));
});

router.delete("/restaurants/:restaurantId", (req, res, next) => {
  const { restaurantId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(restaurantId)) {
    res.status(400).json({ message: "Specified Id is not valid" });
    return;
  }
  Restaurant.findByIdAndRemove(restaurantId)
    .then(() =>
      res.json({
        message: `restaurant with ${restaurantId} was removed successfully`,
      })
    )
    .catch((err) => res.json(err));
});









// aqui vou usar o POST (used to create a new characted for the api)
//not sure if I will need POST 


// tambem preciso do REMOVE para remover restaurante do user's profile



module.exports = router;

