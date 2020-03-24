const express = require('express')
const recipeController = require('../controllers/recipeController')
const router = express.Router()
// const {authenticate}  = require('../middleware')

router.get('/', recipeController.getAllRecipes)

// router.get('/:id', authenticate, recipeController.getUserById)

// router.post('/', authenticate, recipeController.createUser)

// router.put('/:id', authenticate, recipeController.updateUserById)

// router.delete('/:first_name', recipeController.deleteUserByFirstName)

module.exports = router