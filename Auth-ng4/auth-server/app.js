// Third paerty Module
var mongoose = require("mongoose");
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path")

var app = express();

// MongoDB connections
// var mongoDB = mongoose.connect('mongodb://localhost:27017/auth');
var mongoDB = mongoose.connect('mongodb://localhost/authDB', {
  useMongoClient: true,
  /* other options */
});

// Client server access control Middlewares

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST , PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,Authorization');
  next();
});

// View engine
app.set('views', path.join(__dirname, 'src/views'));
app.set('view engine', 'ejs');

// static files
app.use(express.static(path.join(__dirname, 'src')));

// bodyParser Middelwares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))


// Middlewares
// app.set('views', path.join(__dirname, '../Chart-App-client/dist'));
app.use(express.static(path.join(__dirname, '../auth-client/dist')));
app.use(express.static(path.join(__dirname, '../auth-client/node-modules')));



// Client Index.html
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../auth-client/dist/index.html'));
});

// Require MongoDB Model
var authModel = require('./src/authModule/model');
// Require auth Routes
var authRoute = require("./src/authModule/router");
// Server-Port

var port = process.env.PORT || 5000;

app.use("/api", authRoute)




app.listen(port, function (req, res) {
  console.log('Server is  running on PORT: ', port);
})