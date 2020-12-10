const express = require('express');

const Recipes = require('./recipe-model');

const router = express.Router();

router.get('/', (req, res) => {
    Recipes.getRecipes()
    .then(recipes => {
        res.json(recipes);
    })
    .catch(error => {
        res.status(500).json({ message: error.message })
    });
});

router.get('/:id/shoppingList', (req, res) => {
    const { id } = req.params
    Recipes.getShoppingList(id)
    .then(shoppingList => {
        res.json(shoppingList);
    })
    .catch(error => {
        res.status(500).json({ message: error.message })
    });
});

router.get('/:id/instructions', (req, res) => {
    const { id } = req.params
    Recipes.getInstructions(id)
    .then(instructions => {
        res.json(instructions);
    })
    .catch(error => {
        res.status(500).json({ message: error.message })
    });
});

router.get('/:id/recipes', (req, res) => {

})

module.exports = router;