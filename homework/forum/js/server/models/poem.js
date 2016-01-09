var mongoose = require("mongoose");
var Schema = mongoose.Schema;

poemSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("poemsDB", poemSchema);