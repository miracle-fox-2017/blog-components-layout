const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
require('dotenv').config()
const app = express()
const articles = require('./routers/articles')
const users = require('./routers/users');

const mongoose = require('mongoose')
mongoose.connection.openUri(process.env.MONGO_URL, (err) => {
  if(err) console.log(err);

    console.log('connect');

  })



app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.use('/api', articles)
app.use('/api', users)



app.listen(3000, () => {
  console.log("server jalan di port 3000...");
})

module.exports = app;
