var express = require("express");
var poemRouter = express.Router();
var Poem = require("../models/poem");

poemRouter.route("/")
  .get(function (req, res) {
    Poem.find(function (err, poems) {
      if (err) res.status(500).send(err);
      res.send(poems)
    });
  })
  .post(function (req, res) {
    var newPoem = new Poem(req.body);
    newPoem.save(function (err, poem) {
      if (err) res.status(500).send(err);
      res.status(201).send(poem);
    });
  })

module.exports = poemRouter;