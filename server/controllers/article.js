const Article = require('../models/article.js')


function create(req,res) {
  let article = new Article(req.body)
  article.save((err,result) => {
  	if(err){
  		res.status(500).send(err);
  	}
  	res.status(200).send(result);
  })	// body...
}


function find(req,res) {
	Article.find({
	  	_id : req.params.articleId
	  })
	  .then(result => {
	  	res.status(200).send(result)
	  })
	  .catch(err => {
	  	res.status(500).send(err);
	})	
}

function findAll(req,res) {
  console.log("masuk")
  Article.find()
    .then(result => {
      res.status(200).send(result)
    })
    .catch(err => {
      res.status(500).send(err);
  })  
}

function remove(req,res) {
  Article.findOne({
  	_id : req.params.articleId
  }).exec(function(err,data) {
  	Article.remove({
  		_id : req.params.articleId
  	}).exec(function(err2) {
  		if(err2){
  			res.status(500).send(err)
  		}
  		res.send(data)
  	})
  })	
}

function update(req,res) {
  console.log(req.body)
  Article.findOne({
    _id : req.params.articleId
  })
  .then(oldArticle => {
      Article.findById({
        _id : req.params.articleId
      })
      .then(article => {
        article.set({
          author : req.body.author || article.author,
          title :  req.body.title || article.title,
          desc :  req.body.desc || article.desc,
          year : req.body.year || article.year,
          link : req.body.link || article.link
        })
          article.save((err,newArticle) => {
            if(err){
              console.log(err)
            }
            
            res.send({ oldArticle : oldArticle, newArticle : newArticle })
          })
      })
  })
}  


module.exports = {
	remove,
	find,
	create,
  findAll,
  update
}