const express = require("express");
const helmet = require("helmet");
const db = require("../data/models/recipes_model");
const server = express();

server.use(helmet());
server.use(express.json());

server.get("/", (req, res) => {
  // get all species from the database
  console.log("we in here,");
  db.getRecipes()
    .then((species) => {
      res.status(200).json(species);
    })
    .catch((error) => {
      res.status(500).json(error.message);
    });
});

server.get("/:id/instructions", (req, res) => {
  // get all species from the database
  const { id } = req.params;
  console.log("we over there,");
  db.getInstructions(id)
    .then((species) => {
      res.status(200).json(species);
    })
    .catch((error) => {
      res.status(500).json(error.message);
    });
});

server.get("/:id/shoppinglist", (req, res) => {
  // get all species from the database
  const { id } = req.params;
  console.log("we over there,");
  db.getShoppingList(id)
    .then((species) => {
      res.status(200).json(species);
    })
    .catch((error) => {
      res.status(500).json(error.message);
    });
});

module.exports = server;
