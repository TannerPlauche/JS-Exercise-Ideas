///////////////////////////////////////Object Constructor

var Enemy = function (type, hitPoints, defense) {
  this.type = type;
  this.hitPoints = hitPoints;
  this.defense = defense;
};

// x
// x
// xxx  random number


//Where to save new enemy object
var greatArrayOfEnemies = [];
//enemy number for where it will register in the enemy array
var enemyNumber = 0;
//increase enemy creation number
function incrementEnemyNumber (){
  enemyNumber ++;
}
//Get random number for type
function getRandomIntForType(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
  var randomTypeInt = getRandomIntForType(1,3);
//determine type that will be passed to object constructor
var typeOfEnemy = 'not set';
// if random --> type
if (randomTypeInt === 1) {
  typeOfEnemy = 'Ancient Dragon';
} else if  (randomTypeInt === 2){
  typeOfEnemy = 'Prowler';
} else if (randomTypeInt ===3 ){
  typeOfEnemy = 'Mighty Grunt';
} else {
  typeOfEnemy = 'Error';
}

///////////////Get hit points
//func to get hit points
function getRandomHitPoints(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
///////hitpoints that will be passed to the object constructor
var hitPoints = 0;
/////set hit points
if (typeOfEnemy === 'Ancient Dragon') {
  hitpoints = getRandomHitPoints(80, 100);
} else if ( typeOfEnemy === 'Prowler') {
  hitpoints = getRandomHitPoints (50, 79);
} else if (typeOfEnemy === 'Mighty Grunt'){
  hitpoints = getRandomHitPoints(20, 49);
} else if (typeOfEnemy === 'error') {
  hitpoints = 0;
}

///////defense
//////var that will be passed to constructor
var defense = hitpoints * 3;
var enemy = new Enemy (typeOfEnemy, hitpoints, defense);
greatArrayOfEnemies.push(enemy);

console.log('This is the new enemy: ' + greatArrayOfEnemies);

for (i=0; i<greatArrayOfEnemies.length; i++){
  console.log(greatArrayOfEnemies[i]);
}


// };
