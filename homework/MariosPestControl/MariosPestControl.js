var goombaTotal = 0;
var bobombTotal = 0;
var cheepcheepTotal=0;
var cheepcheepCharge = cheepcheepTotal * 11;
var goombaTotalDisplay = document.getElementById('goombasTotal');
goombaCharge = goombasTotal * 5;
var audio = new Audio('smb2_coin.wav');
// audio.play();
var audioClear = new Audio('clearAll.wav');

function clearAll (){
  if (audioClear.paused){
  audioClear.play();
} else {
    audioClear.currentTime = 0;
  }

  goombaTotal = 0;
  bobombTotal = 0;
  cheepcheepTotal=0;
  document.getElementById('totalCoinCost').innerHTML = 'Total Charge: 0 ';
  document.getElementById('goombasKilled').innerHTML = 'Goombas Killed: 0' ;
  document.getElementById('goombasTotal').innerHTML = 'Goomba Charge: 0';
  document.getElementById('bobombsKilled').innerHTML = 'Bob-ombs Killed: 0';
  document.getElementById('bobombsTotal').innerHTML = 'Goomba Charge: 0';
  document.getElementById('cheepcheepsKilled').innerHTML = 'Cheep Cheeps Killed: 0';
  document.getElementById('cheepcheepsTotal').innerHTML = 'Cheep Cheep Charge: 0';
}

function incrementgoombaTotal () {
  goombaTotal ++;
  if (audio.paused){
  audio.play();
} else {
    audio.currentTime = 0;
  }

  var goombaCharge = goombaTotal * 5;
  document.getElementById('goombasKilled').innerHTML = 'Goombas Killed: ' + goombaTotal;
  document.getElementById('goombasTotal').innerHTML = 'Goomba Charge: ' + goombaCharge;
  document.getElementById('totalCoinCost').innerHTML = 'Total Charge: ' + (goombaCharge + (bobombTotal * 7) + (cheepcheepTotal *11));

};

function incrementBobombTotal () {
  bobombTotal ++;
  if (audio.paused){
  audio.play();
} else {
    audio.currentTime = 0;
  }
  var bobombCharge = bobombTotal * 7;
  document.getElementById('bobombsKilled').innerHTML = 'Bob-ombs Killed: ' + bobombTotal;
  document.getElementById('bobombsTotal').innerHTML = 'Goomba Charge: ' + bobombTotal * 7;
  document.getElementById('totalCoinCost').innerHTML = 'Total Charge: ' + ((goombaTotal *5) + (bobombTotal * 7) + (cheepcheepTotal *11));

};

function incrementCheepCheepTotal () {
  cheepcheepTotal ++;
  if (audio.paused){
  audio.play();
} else {
    audio.currentTime = 0;
  }
  document.getElementById('cheepcheepsKilled').innerHTML = 'Cheep Cheeps Killed: ' + cheepcheepTotal;
  document.getElementById('cheepcheepsTotal').innerHTML = 'Cheep Cheep Charge: ' + cheepcheepTotal * 11;
  document.getElementById('totalCoinCost').innerHTML = 'Total Charge: ' + ((goombaTotal *5) + (bobombTotal * 7) + (cheepcheepTotal *11));

};


document.getElementById('goombaButton').addEventListener('click', function(){
  incrementgoombaTotal();
});

document.getElementById('bobombButton').addEventListener('click', function(){
  incrementBobombTotal();
});

document.getElementById('cheepcheepButton').addEventListener('click', function(){
  incrementCheepCheepTotal();
});

document.getElementById('clearButton').addEventListener('click', function(){
  clearAll();
});
