//Uptown Function You up


var lyrics = ["This","hit","that","ice","cold","Michelle","Pfeiffer","that","white","gold","This","one",
"for","them","hood","girls","Them","good","girls","straight","masterpieces","Stylin","whilen","livin","it","up","in","the","city",
"Got","Chucks","on","with","Saint","Laurent","Got","kiss","myself","Im","so","pretty"];

//Print the lyrics

var printLyrics = function (lyricsArray){
  var lyrString = '';
  for (i=0; i <= lyrics.length; i++){
    lyrString += ' '+lyricsArray[i];
  }
  return lyrString;
};

var lyricString = printLyrics(lyrics);
console.log(lyricString);

//////////////////////////////////////Print lyics backwards
console.log('      just a break                         ')

var printLyricsBackwards = function (lyricsArray){
  var lyrString = '';
  for (i=lyricsArray.length; i >= 0; i--){
    lyrString += ' '+lyricsArray[i];  }
  return lyrString;
};

var backwardsLyrics = printLyricsBackwards(lyrics);
console.log(backwardsLyrics);

//////////////////////////////////////Print lyics every other words
console.log('         just a break                         ')
var getEveryOtherLyric= function (lyricsArray){
  var everyotherLyricString = '';
  for (i=0; i <= lyrics.length; i++){
    if (i % 2 == 0){
      everyotherLyricString += ' ' + lyricsArray[i];
    }
  }
  return everyotherLyricString;
}

var everyotherLyricString = getEveryOtherLyric(lyrics);
console.log(everyotherLyricString);
