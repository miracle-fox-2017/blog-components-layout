const express = require('express')
const router = express.Router()
const Article = require('../controllers/articleController')

router.post('/', Article.createArticle)
router.get('/', Article.findAllArticle)
router.get('/:id', Article.articleByid)
router.put('/:id', Article.updateArticle)
router.delete('/:id', Article.destroyArticle)

module.exports = router