
exports.up = function(knex) {
    return knex.schema
      .createTable('recipes', table => {
          table.increments('recipe_id')
          table.string('name', 128).notNullable()
      })
      .createTable('ingredients', table => {
          table.increments('ingredient_id')
          table.string('ingredients', 128).notNullable()
      })
      .createTable('units', table => {
          table.increments('unit_id')
          table.string('unit_type')
      })
      .createTable('steps', table => {
          table.increments('step_id')
          table.string('instruction', 256).notNullable()
          table.string('step_number').notNullable()
          table.integer('recipe_id')
            .unsigned()
            .notNullable()
            .references('recipe_id').inTable('recipes')
            .onDelete('RESTRICT').onUpdate('RESTRICT')
      })
      .createTable('step_ingredients', table => {
          table.increments('step_ingredient_id')
          table.integer('step_id')
            .unsigned()
            .notNullable()
            .references('step_id').inTable('steps')
            .onDelete('RESTRICT').onUpdate('RESTRICT')
          table.integer('ingredient_id')
            .unsigned()
            .notNullable()
            .references('ingredient_id').inTable('ingredients')
            .onDelete('RESTRICT').onUpdate('RESTRICT')
          table.float('quantity').notNullable()
          table.integer('unit_id')
            .unsigned()
            .notNullable()
            .references('unit_id').inTable('units')
            .onDelete('RESTRICT').onUpdate('RESTRICT')
      })
  };
  
  exports.down = function(knex) {
    return knex.schema
      .dropTableIfExists('step_ingredients')
      .dropTableIfExists('steps')
      .dropTableIfExists('units')
      .dropTableIfExists('ingredients')
      .dropTableIfExists('recipes')
  };
