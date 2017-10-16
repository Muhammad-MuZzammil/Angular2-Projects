var express = require("express");

var authRouter = express.Router()
var controller = require("./controller")

authRouter.post("/login", controller.login_user);

module.exports = authRouter;