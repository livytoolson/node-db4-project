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

})

router.get('/:id/instructions', (req, res) => {

})

router.get('/:id/recipes', (req, res) => {

})

module.exports = router;