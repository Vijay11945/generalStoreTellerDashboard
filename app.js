// Importing the Express.js framework
const express = require("express");

// Middleware for parsing request bodies in JSON format
const bodyParser = require("body-parser");

// Middleware for handling Cross-Origin Resource Sharing (CORS)
const cors = require("cors");

// Importing the Sequelize instance for database interaction
const sequelize = require("./backend/util/database");

// Creating an Express application
const app = express();

// Using CORS middleware to handle cross-origin requests
app.use(cors());

// Importing routes for players
const playerRoutes = require("./backend/routes/playerRoutes");

// Using the body-parser middleware to parse incoming JSON requests
app.use(bodyParser.json());

// Using the playerRoutes for handling player-related routes
app.use(playerRoutes);

// Synchronizing data models with the database, creating tables and relations
sequelize
  .sync()
  .then((result) => {
    // Starting the server on port 3000 after successful synchronization
    app.listen(3000, () => {
      // console.log("Server running");
    });
  })
  .catch((err) => {
    // Handling errors that occur during synchronization
    console.log(err);
  });
