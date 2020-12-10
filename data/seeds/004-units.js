
exports.seed = function(knex) {
      return knex('units').insert([
        {unit_type: 'Cups'},
        {unit_type: 'Teaspoons'},
        {unit_type: 'Tablespoons'}
      ]);
};
