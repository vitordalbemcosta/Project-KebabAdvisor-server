const router = require("express").Router();
const mongoose = require("mongoose");


const User = require("../models/User.model");
const Restaurant = require("../models/Restaurant.model")

router.post('/restaurants', (req, res, next) => {
    const { name, address, description, rating, image } = req.body;

    Restaurant.create({ name, address, description, rating, image })
        .then((createRestaurant) => {
            res.json(createRestaurant);
        }).catch((err) => next(err));
});

router.put('/restaurant'), (req, res, next) => {
    const { name, address, description, rating, image } = req.body;
    
}






// aqui vou usar o POST (used to create a new characted for the api)
//not sure if I will need POST 


// tambem preciso do REMOVE para remover restaurante do user's profile



module.exports = router;

