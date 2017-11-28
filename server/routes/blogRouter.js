const express = require('express')
const router = express.Router()
const blogController = require('../controllers/blogController.js')
const loginController = require('../controllers/loginController.js')

// Get all articles
router.get('/', blogController.findAllArticles)

// Get article by id
router.get('/:id', blogController.findById)

// Post new articles
router.post('/', blogController.postNewArticle)

// Delete article
router.delete('/:id', loginController.verifyById, blogController.removeArticle)

// Update article
router.put('/:id', loginController.verifyById, blogController.updateArticle)

module.exports = router
