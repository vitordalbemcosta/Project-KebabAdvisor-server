const router = require("express").Router();
const mongoose = require("mongoose");


const User = require("../models/User.model");
const Restaurant = require("../models/Restaurant.model");
const Review = require("../models/Reviews.model");


router.post('/reviews', (req, res, next) => {
    const { name, description, img } = req.body;

    Review.create({ name, description, img })
        .then((newReview) => {
            return Restaurant.findByIdAndUpdate(restaurantId, { $push: { reviews: newReview._id } }, { new: true });
        })
        .then((response) => res.json(response))
        .catch((err) => next(err));
});

router.get('/reviews', (req, res, next) => {
    Review.find()
        .then((response) => res.json(response))
        .catch((err) => res.json(err));
    
});

router.get("/reviews/:reviewId", (req, res, next) => {
  const { reviewId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(reviewId)) {
    res.status(400).json({ message: "Specified Id is not valid" });
    return;
  }

  Review.findById(reviewId)
    .then((response) => res.json(response))
    .catch((err) => res.json(err));
});

router.put("/reviews/:reviewId", (req, res, next) => {
  const { reviewId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(reviewId)) {
    res.status(400).json({ message: "Specified Id is not valid" });
    return;
  }

  Review.findByIdAndUpdate(reviewId, req.body, { new: true })
    .then((response) => res.json(response))
    .catch((err) => res.json(err));
});

router.delete("/reviews/:reviewId", (req, res, next) => {
  const { reviewId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(reviewId)) {
    res.status(400).json({ message: "Specified Id is not valid" });
    return;
  }

  Review.findByIdAndRemove(reviewId)
    .then((deletedreview) => {
      return Project.findByIdAndUpdate(deletedreview.project, {
        $pull: { reviews: reviewId },
      }).then(() =>
        res.json({ message: `review with ${reviewId} was removed successfully` })
      );
    })
    .catch((err) => res.json(err));
});

module.exports = router;
