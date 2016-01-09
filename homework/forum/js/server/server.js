var express = require("express");
var appServer = express();

var port = process.env.PORT || 9000;

var mongoose = require('mongoose');
var bodyParser = require('body-parser')
var morgan = require("morgan");
var cors = require("cors");
var poemRouter = require("./routes/poemRoute");
var Poem = require("./models/poem")
var db = mongoose.connect("mongodb://localhost/poemsDB");


appServer.use(bodyParser.json());
appServer.use(morgan("dev"));
appServer.use(cors());
appServer.use("/poems", poemRouter);

//var newPoem = new Poem({
//  title: "The Toy Eater",
//  author: "Shell Silverstein",
//  body: "You don’t have to pick up your toys, okay?\
//You can leave ‘em right there on the floor,\
//So tonight when the Terrible Toy-Eatin’ Tookle\
//Comes tiptoeing’ in through the crack in the door,\
//He’ll crunch all your soldiers, he’ll munch on your trucks,\
//He’ll chew your poor puppets to shreds,\
//He’ll swallow your Big Wheel and slurp up your paints\
//And bite off your dear dollies’ heads.\
//Then he’ll wipe off his lips with the sails of your ship,\
//And making a bur pity noise,\
//He’ll slither away-- but hey, that’s okay,\
//You don’t have to pick up your toys."
//})

//newPoem.save(function (err, poem) {
//  if (err) console.log(err);
//  console.log("saved: " + poem);
//});

appServer.listen(port, function () {
  console.log("You got served on port " + port + "!");
})