const express = require('express')
const recipeController = require('../controllers/recipeController')
const router = express.Router()
//const {authenticate}  = require('../middleware/index') //Look at your 311 projects, you might need to move the "index.js" file under middleware somewhere else.

router.get('/', recipeController.getAllRecipes)

// router.get('/:id', authenticate, recipeController.getUserById) NOT SURE IF NEEDED

router.post('/', recipeController.addRecipe)

//router.put('/', recipeController.updateRecipe)

// router.delete('/recipes/:first_name', recipeController.deleteUserByFirstName)

module.exports = router