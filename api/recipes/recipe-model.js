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
//     i.ingredients,
//     si.quantity,
//     u.unit_type 
// from recipes r
// join steps s 
//     on s.recipe_id = r.recipe_id
// join step_ingredients si 
//     on si.step_id = s.step_id
// join ingredients i 
//     on si.ingredient_id = i.ingredient_id
// join units u
//     on u.unit_id = si.unit_id
// where r.recipe_id = 1;
    return db('recipes')
    .select('ingredients.ingredients', 'step_ingredients.quantity', 'units.unit_type')
    .join('steps', 'steps.recipe_id', 'recipes.recipe.id')
    .join('step_ingredients', 'step_ingredients.step_id', 'steps.step_id')
    .join('ingredients', 'step_ingredients', 'ingredients.ingredient_id')
    .join('units', 'units.unit_id', 'step_ingredients.unit_id')
    .where({recipe_id: id})
}

function getInstructions(recipe_id) {
// select 
//     r.name,
//     s.instruction
// from recipes r
// join steps s 
//     on s.recipe_id = r.recipe_id
// join step_ingredients si 
//     on si.step_id = s.step_id
// where r.recipe_id = 1;
}