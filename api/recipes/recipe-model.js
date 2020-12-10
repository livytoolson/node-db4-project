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
// select 
//     ingredients.ingredients,
//     step_ingredients.quantity,
//     units.unit_type 
// from recipes 
// join steps 
//    on steps.recipe_id = recipes.recipe_id
// join step_ingredients 
//    on step_ingredients.step_id = steps.step_id
// join ingredients 
//    on step_ingredients.ingredient_id = ingredients.ingredient_id
// join units
//    on units.unit_id = step_ingredients.unit_id
// where recipes.recipe_id = 1;
    return db('recipes')
    .select('ingredients.ingredients', 'step_ingredients.quantity', 'units.unit_type')
    .join('steps', 'steps.recipe_id', 'recipes.recipe_id')
    .join('step_ingredients', 'step_ingredients.step_id', 'steps.step_id')
    .join('ingredients', 'step_ingredients.ingredient_id', 'ingredients.ingredient_id')
    .join('units', 'units.unit_id', 'step_ingredients.unit_id')
    .where('recipes.recipe_id', id)
}

function getInstructions(id) {
// select 
//     r.name,
//     s.instruction,
//     s.step_number
// from recipes r
// join steps s
//     on s.recipe_id = r.recipe_id
// where r.recipe_id = 1;
    return db('recipes')
    .select('recipes.name', 'steps.instruction', 'steps.step_number')
    .join('steps', 'steps.recipe_id', 'recipes.recipe_id')
    .where('recipes.recipe_id', id)
}