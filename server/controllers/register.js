const User = require('../models/user-schema')
const bcrypt  = require('bcrypt');
const saltRounds = 10;
const jwt = require('jsonwebtoken')
require('dotenv').config()
const secret = process.env.SECRET_KEY
console.log(secret);


const signin = (req, res) => {
  User.findOne({username : req.body.username})
  .then(user => {
    if (user) {
      bcrypt.compare(req.body.password, user.password, function(err, hash) {
        if (!err) {
          jwt.sign(
            {
              id       : user._id,
              username : user.username,
            }, 'foobar', {expiresIn : '1h'}, (err, token) => {
              if (err) {
                console.log(err);
              } else {
                console.log(token);
                res.send(token)
              }
            }
          )
        } else {
          res.status(404).send('Password or Email wrong')
        }
      })
    } else {
      res.status(404).send({ msg: 'Password or Email wrong'})
    }    
  })
}



const signup = (req, res) => {
  let password = req.body.password
  bcrypt.hash(password, saltRounds, function(err, hash) {
    if (!err) {
      console.log('hash of the password is ' + hash);
      storehash = hash;
      User.create(
        {
          username  : req.body.username,
          email     : req.body.email,
          password  : hash
        }
      )
      .then(user => {
        console.log(user);
        msg = 'succes create new user'
        res.status(201).send({user:user, message:msg})
      })
      .catch(err => {
        console.log(err);
        res.status(404).send(err)
      })
    }
  })
}


module.exports = {
  signin,
  signup
};
