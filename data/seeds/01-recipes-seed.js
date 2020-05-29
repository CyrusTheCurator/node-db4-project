exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("recipes")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("recipes").insert([
        {
          recipe_title: "Hot bowl of soup ouch",
          instructions:
            "heat up soup in a microwave. Remember, this is your right.",
        },
        {
          recipe_title: "Apple stew",
          instructions:
            "place one granny smith apple in boiling water, simmer for 12 hours. Eat hot.",
        },
        {
          recipe_title: "Chef's special",
          instructions: "the secret ingredient is garbage",
        },
      ]);
    });
};
