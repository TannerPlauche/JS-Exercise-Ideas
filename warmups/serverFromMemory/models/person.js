var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var addressSchema = new Schema({
  street: String,
  city: String,
  state: String,
  zip: number
})

car personSchems = new Schema({
  name: String,
  gender: String,
  age: Number,
  emailAddress: [String],
  address: addressSchema
})

var Person = mongoose.model("Person", personSchema);

var newPerson = new Person({});

newPerson.name = "Tanner",
  newPerson.gender = "male",
  newPerson.age = "31",
  newPerson.emailAddress = "TannerPlauche@gmail.com",
  newPerson.address = {
    street: "123 Example St",
    city: "Elk Ridge",
    state: "Utah",
    zip: 84651
  }