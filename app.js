// ℹ️ Gets access to environment variables/settings
// https://www.npmjs.com/package/dotenv
require("dotenv/config");

// ℹ️ Connects to the database

require("./db"); 

// Handles http requests (express is node js framework)
// https://www.npmjs.com/package/express
const express = require("express");

const app = express();

// ℹ️ This function is getting exported from the config folder. It runs most pieces of middleware
require("./config")(app);

// 👇 Start handling routes here
// Contrary to the views version, all routes are controlled from the routes/index.js

const allRoutes = require("./routes/index.routes");
app.use("/", allRoutes);

const authRoutes = require("./routes/auth.routes");
app.use("/auth", authRoutes);

const addRestaurantRoutes = require("./routes/restaurant.routes");
app.use("/", addRestaurantRoutes);

// const bestRatedRoutes = require("./routes/bestRated.routes");
// app.use("/", bestRatedRoutes);

// const detailsRestaurantRoutes = require("./routes/detailsRestaurant.routes");
// app.use("/", detailsRestaurantRoutes);

// const randomRestaurantRoutes = require("./routes/randomRestaurant.routes");
// app.use("/", randomRestaurantRoutes);

// // const removeRestaurantRoutes = require("./routes/removeRestaurant.routes");
// // app.use("/", removeRestaurantRoutes);

// const userProfileRoutes = require("./routes/userProfile.routes");
// app.use("/", userProfileRoutes);

// const userReviewsRoutes = require("./routes/userReviews.routes");
// app.use("/", userReviewsRoutes);



// ❗ To handle errors. Routes that don't exist or errors that you handle in specific routes
require("./error-handling")(app);

module.exports = app;
