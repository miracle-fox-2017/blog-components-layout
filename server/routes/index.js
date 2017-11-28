const express = require('express');
const router = express.Router();
const Article = require('../models/article.js')
const Controller = require('../controllers/article.js')

router.post('/add', Controller.create);
router.get('/article', Controller.findAll);
router.get('/article/:articleId', Controller.find);
router.delete('/article/:articleId', Controller.remove);
router.put('/edit/:articleId', Controller.update);


module.exports = router;
