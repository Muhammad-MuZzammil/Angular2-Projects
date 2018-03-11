var express = require("express")
var authModel = require("./model")

function getUserByEmail(email) {
  return new Promise(function (resolve, reject) {
    authModel.findOne({ email: email }, function (err, user) {
      if (err) {
        console.log(err)
        reject(err)
      }
      else {
        resolve(user)
        return;
      }
    })
  })
}


var controller = {

  login_user: function (req, res) {
    // authModel.findOne({ email: req.body.email }, function (err, user) {
    //   console.log(user._doc)
    // })
    getUserByEmail(req.body.email)
      .then(user => {
        console.log(user.password)
        if (user.email === req.body.email && user.password === req.body.password) {
          res.send({
            status: 200,
            email: user.email,
          });
          return;
        }
      }, function (err) {
        res.status(400).send({
          status: 400,
          text: 'Incorrect Email or Password'
        });
      })
  }

}

module.exports = controller;