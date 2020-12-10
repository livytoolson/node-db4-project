
exports.seed = function(knex) {
  return knex('steps').insert([
    {instruction: 'Place peanuts in food processor for 4-5 minutes.', step_number: '1', recipe_id: 1},
    {instruction: 'Stir in honey.', step_number: '2', recipe_id: 1},
    {instruction: 'Store in air tight container in refridgerator.', step_number: '3', recipe_id: 1},
    {instruction: 'Toast the alomnds on a baking sheet at 350 degrees for 10 minutes. Let the almonds cool', step_number: '1', recipe_id: 2},
    {instruction: 'Place almonds into food processor, blend until creamy.', step_number: '2', recipe_id: 2},
    {instruction: 'Stir in honey.', step_number: '3', recipe_id: 2},
    {instruction: 'Let almond butter cool at room temp. Transfer to air tight container and store in refrigerator.', step_number: '4', recipe_id: 2}
  ]);
};
