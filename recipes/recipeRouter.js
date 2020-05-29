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
    .then((recipes) => {
      res.status(200).json(recipes);
    })
    .catch((error) => {
      res.status(500).json(error.message);
    });
});

server.get("/:id", (req, res) => {
  // get all species from the database
  const { id } = req.params;

  console.log("we in here,");
  db.getRecipes(id)
    .then((recipes) => {
      res.status(200).json(recipes);
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
    .then((instructions) => {
      res.status(200).json(instructions);
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
    .then((list) => {
      res.status(200).json(list);
    })
    .catch((error) => {
      res.status(500).json(error.message);
    });
});

server.get("/recipes/ingredients/:id", (req, res) => {
  // get all species from the database
  const { id } = req.params;
  console.log("we over there,");
  db.getIngredientList(id)
    .then((list) => {
      res.status(200).json(list);
    })
    .catch((error) => {
      res.status(500).json(error.message);
    });
});

module.exports = server;
