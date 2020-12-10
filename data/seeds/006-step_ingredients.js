
exports.seed = function(knex) {
  return knex('step_ingredients').insert([
    {step_id: 1, ingredient_id: 1, quantity: 3, unit_id: 1},
    {step_id: 2, ingredient_id: 3, quantity: 1, unit_id: 3},
    {step_id: 4, ingredient_id: 2, quantity: 3, unit_id: 1},
    {step_id: 5, ingredient_id: 3, quantity: 1, unit_id: 3}
  ]);
};
