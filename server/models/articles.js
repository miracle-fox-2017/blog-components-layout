const mongoose = require('mongoose')
const Schema = mongoose.Schema

var articleSchema = new Schema({
  title: { type: String, required: true },
  description: {type: String, required: true},
  urlimg: {type: String, required: true},
  createdAt: {type: Date, default: Date.now},
  updatedAt: {type: Date, default: Date.now}  
})

var article = mongoose.model('articles', articleSchema)

module.exports = article;
