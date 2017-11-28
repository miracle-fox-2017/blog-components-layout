const router = require('express').Router()
      Post   = require('../controllers/postController')
      
router.get('/', Post.getAll)
router.get('/:id', Post.getById)
router.post('/', Post.create)
router.delete('/:id', Post.destroy)

module.exports = router;
