const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const articleSchema = new Schema({
	author : String,
	title : String,
	desc : String,
	year : Number,
	link : String
})


const articleModel = mongoose.model('article',articleSchema);

module.exports = articleModel
