exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("ingredients")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("ingredients").insert([
        { ingredient: "lettuce" },
        { ingredient: "apple" },
        { ingredient: "potato" },
        { ingredient: "orange" },
        { ingredient: "garbage" },
      ]);
    });
};
