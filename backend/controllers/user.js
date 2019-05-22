const User = require('../models/User');
const bcrypt = require('bcrypt-nodejs');
const jwt = require('jsonwebtoken');

exports.createUser = (req, res, next) => {
  bcrypt.hash(req.body.password, bcrypt.genSaltSync(10), null, (err, hash) => {
      if (err) {
          console.log(err);
          return res.json({ message: 'There has been an error.', errorCode: 1});
      }

      const newUser = new User({
          name: req.body.name,
          email: req.body.email,
          password: hash,
          role: req.body.role
      });

      newUser.save((err, user) => {
          if (err) {
              console.log(err);
              return res.json({ message: 'User could not be added', errorCode: 1});
          }
          return res.json({ message: 'User added succesfully', errorCode: 0});
      });
  });
}

exports.login = (req, res, next) => {
  User.findOne({ email: req.body.email }, (err, user) => {
      if (err) {
          console.log(err);
          return res.json({ message: 'An error ocurred. User could not be found.', token: null, email: null, errorCode: 1 });
      }
      bcrypt.hash(req.body.password, bcrypt.genSaltSync(10), null, (err, hash) => {
          if (err) {
              console.log(err);
          } else{
              bcrypt.compare(user.password, hash, (err, result) => {
                  if (err) {
                      console.log(err);
                      return res.json({ message: 'An error ocurred. Incorrect email or password.', token: null, email: null, errorCode: 1 });
                  }
                  const token = jwt.sign({ email: user.email, uid: user._id }, 'MyAppIsAwesome', { expiresIn: "12h" });
                  return res.json({ message: 'Login successful', token: token, email: user.email, errorCode: 0 });
              });
          }
      });
  })
}
