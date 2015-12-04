var express = require("express");
var app = express();

var cors = require('cors');
var port = process.env.PORT || 9000;
var bodyParser = require("body-parser");

var uuid = require("uuid");

var myListofBounties = [];
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(cors());
app.use(function (req, res, next) {
  if (req.headers.origin) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'X-Requested-With,Content-Type,Authorization');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,PATCH,POST,DELETE');
    if (req.method === 'OPTIONS') return res.send(200);
  }
  next();
});

app.post("/bounty", function (req, res) {
  console.log("The post was sent");
  var bountyObject = req.body;
  bountyObject._id = uuid.v1();
  myListofBounties.push(bountyObject);
  console.log(bountyObject);
  console.log(myListofBounties);
  res.send("This is the bounty post endpoint.");
});

app.get("/bounty", function (req, res) {
  console.log("You reached the server with your get request");
  res.send(myListofBounties);
});

app.delete("/bounty/:bounty_id", function (req, res) {
  console.log(req.body);
  for (var i = 0; i < myListofBounties.length; i++) {
    if (myListofBounties[i]._id === req.params.bounty_id) {
      myListofBounties.splice(i, 1);
    }
  }
  console.log("delete request received.")
})

function findByID(anArray, someID) {
  for (var i = 0; i < anArray.length; i++) {
    if (anArray[i]._id === someID) {
      return anArray[i];
    }
  }
}

app.put("/bounty/:bounty_id", function (req, res) {
  //    findByID(myListofBounties, req.params.id)
  for (var i = 0; i < myListofBounties.length; i++) {
    if (myListofBounties[i]._id === req.params.bounty_id) {
      var bounty = myListofBounties[i];
      bounty.firstName = req.body.firstName || bounty.firstName;
      bounty.lastName = req.body.lastName || bounty.lastName;
      bounty.image = req.body.image || bounty.image;
      bounty.status = req.body.living || bounty.living;
      bounty.amount = req.body.amount || bounty.amount;
      bounty.type = req.body.type || bounty.type;
    } else {
      res.status(404).send("Couldn't find a bounty with that ID");
    }
  }
});

app.listen(port, function () {
  console.log("You have reached port 9000")
});