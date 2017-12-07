const express = require('express');
const app = express()
const bodyParser = require('body-parser')
const morgan = require('morgan')
const verify = require('./helpers/verify')
const mongoose = require('mongoose')
const cors = require('cors')



app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
app.use(morgan('dev'))
app.use(cors())

// mongoose connect
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/blogTdd')
.then(() =>  console.log('db connection succesful to blog-tdd'))
.catch((err) => console.error(err));



const api = require('./routes/api')
app.use('/api', api)

app.listen(4000, function(){
  console.log(`i'm alive 4000`);
});


module.exports = app;
