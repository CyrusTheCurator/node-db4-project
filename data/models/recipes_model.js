const db = require("../db-config");

module.exports = {
  getRecipes,
  getShoppingList,
  getInstructions,
  getIngredients,
  getIngredientList,
};
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
  return db("ingredient_recipes as ir")
    .where({ recipe_id })
    .join("ingredients as i", "i.id", "ir.ingr edient_id")
    .select("i.ingredient");
}

function getIngredients(id) {
  if (id) {
    return db("ingredients").where({ id });
  } else {
    return db("ingredients");
  }
}

function getIngredientList(ingredient_id) {
  return db("ingredient_recipes as ir")
    .where({ ingredient_id })
    .join("recipes as r", "r.id", "ir.recipe_id")
    .select("r.recipe_title");
}
