
exports.seed = function(knex) {
      return knex('recipes').insert([
        {name: 'Peanut Butter'},
        {name: 'Almond Butter'}
      ]);
};
