var express = require("express");
var app = express();

var port = process.env.PORT || 9000;

var cors = require('cors');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var morgan = require('morgan');
app.use(morgan("dev"));
app.use(bodyParser.json());
var Car = require("models");
var db = mongoose.connect("mongodb://localhost/memory");




var newCar = new Car({
  make: "Toyota",
  model: "Camry",
  year: 2002,
  engine: "V4",
  miles: 190000
});

newCar.save(function (err, car) {
  if (err) {
    throw err
  };
  console.log(car);
});


app.listen(port, function () {
  console.log("You got served on port " + port + "!");
});