// var express = require('express');
// var app = express();
// var path = require('path');

// // view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'ejs');

// app.use('/',express.static(__dirname+'/../client/dist'));

// app.get('/*', function (req, res) {
// res.sendFile(path.join(__dirname+'/../client/dist','index.html'))
// });

// app.use(function(req, res, next) {
// var err = new Error('Not Found');
// err.status = 404;
// next(err);
// });

// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');


const app = express();

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Point static path to dist this is all of public files view bt everyone
app.use(express.static(path.join(__dirname, 'dist')));

app.use('/',express.static(__dirname+'/../dist'));

app.get('/*', function (req, res) {
res.sendFile(path.join(__dirname+'/../dist','index.html'))
});

// Catch all other routes and return the index file
app.get('*', (req, res) => {
  //points to home directory
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.use(function (req, res, next) {
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
      res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PATCH, DELETE, OPTIONS');
      next();
  });

app.listen(3000, function () {
console.log('Example listening on port 3000!');
});

module.exports = app;
