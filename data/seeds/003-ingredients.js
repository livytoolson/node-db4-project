
exports.seed = function(knex) {
      return knex('ingredients').insert([
        {ingredients: 'Dry Roasted Peanuts'},
        {ingredients: 'Almonds'},
        {ingredients: 'Honey'}
      ]);
};
