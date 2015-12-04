var mongoose = require("mongoose");
var Schema = mongoose.Schema;


var carSchema = new Schema({
    make: {
        type: String,
        required: true,
    },
    model: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        min: 1870,
        max: 2016
    },
    engine: String,
    miles: Number
}, { timestamps: true });

module.exports = mongoose.model("Car", carSchema);