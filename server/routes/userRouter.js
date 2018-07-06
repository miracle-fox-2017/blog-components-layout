const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController.js')
const loginController = require('../controllers/loginController.js')

// Find all users
router.get('/', loginController.verifyAdmin, userController.findAllUsers)

// Find user by id
router.get('/:id', loginController.verifyById, userController.findUserById)

// Adding new user
router.post('/', loginController.verifyAdmin, userController.addNewUser)

// Delete user
router.delete('/:id', loginController.verifyById, userController.removeUser)

// Update user
router.put('/:id', loginController.verifyById, userController.updateUser)

module.exports = router
