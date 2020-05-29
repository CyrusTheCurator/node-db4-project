const db = require("../db-config");

module.exports = { getRecipes, getShoppingList, getInstructions };
//helpers go here
function getRecipes(id) {
  if (id) {
    return db("recipes").where({ id });
  } else {
    return db("recipes");
  }
}

function getInstructions(id) {
  return db("recipes").where({ id }).select("instructions");
}

function getShoppingList(recipe_id) {
  return db("ingredient_recipes").where({ recipe_id }).join("ingredients as i", "i.id", "");
}
