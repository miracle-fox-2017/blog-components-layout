const mongoose = require('mongoose')
const Schema = mongoose.Schema

var userSchema = new Schema({
  _id: Schema.Types.ObjectId,
  username: {type: String, required: true},
  email: {type: String, required: true},
  password: {type: String, required: true},
  createdAt: {type: Date, default: Date.now},
  updatedAt: {type: Date, default: Date.now}  
})

var user = mongoose.model('users', userSchema)

module.exports = user
