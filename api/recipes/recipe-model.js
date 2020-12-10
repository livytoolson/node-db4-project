const db = require('../../data/dbConfig');

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions
}

function getRecipes() {
    return db('recipes')
}

function getShoppingList(id) {
    return db('recipes')
    .select('ingredients.ingredients', 'step_ingredients.quantity', 'units.unit_type')
    .join('steps', 'steps.recipe_id', 'recipes.recipe_id')
    .join('step_ingredients', 'step_ingredients.step_id', 'steps.step_id')
    .join('ingredients', 'step_ingredients.ingredient_id', 'ingredients.ingredient_id')
    .join('units', 'units.unit_id', 'step_ingredients.unit_id')
    .where('recipes.recipe_id', id)
}

function getInstructions(id) {
    return db('recipes')
    .select('recipes.name', 'steps.instruction', 'steps.step_number')
    .join('steps', 'steps.recipe_id', 'recipes.recipe_id')
    .where('recipes.recipe_id', id)
}