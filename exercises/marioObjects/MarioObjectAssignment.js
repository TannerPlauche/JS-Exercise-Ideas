var Player = {
  name: 'Tanner',
  totalCoins: 0,
  status: 'Small',
  star: true,
  setName: function (namePicked){
    if (namePicked==='Mario'){
      this.setName = 'Mario';
    } else if (namePicked ==='Luigi'){
      this.setName = 'Luigi';
    }
  },
  gotHit: function (){
    if (this.status ==="Powered Up"){
      this.status ==="Big";
    } else if (this.status ==='Big'){
      this.status = 'Small'}
     else {
      this.status = "Dead"
    }
  },
    gameActive: true,
    getPoweredUp: function (){
      if (this.status ==='Dead'){
        this.status ==='Small';
      } else if (this.status ==='Small'){
        this.status = 'Big'}
       else {
        this.status = "Powered Up"
      }
    },
    addCoin: function(){
      this.totalCoins ++;
    },
    print: function () {
      console.log('Name: '+ this.name);
      console.log('Total Coins: ' + this.totalCoins);
      console.log('Status: ' + this.status);
      console.log('Star:' + this.star);
    }


} /////////END OF OBJECT

var playGame = function (){

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var randomInt = getRandomInt(0,3);

if (randomInt === 0){
  Player.gotHit();
} else if (randomInt  === 1){
  Player.getPoweredUp()
} else if (randomInt  === 2){
  Player.addCoin();
}
console.log(randomInt);
Player.print();
}

playGame();
playGame();
playGame();
