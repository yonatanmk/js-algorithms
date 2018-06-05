function harmlessRansomNote(noteText, magazineText) {
  var noteArr = noteText.split(' ');
  var magazineArr = magazineText.split(' ');
  var magazineObj = {};

  magazineArr.forEach(word => {
    if (!magazineObj[word]) magazineObj[word] = 0;
    magazineObj[word]++;
  });

  var noteIsPossible = true;
  for (let i =0; i < noteArr.length; i++) {
    if (magazineObj[noteArr[i]]) {
      magazineObj[noteArr[i]]--;
      if (magazineObj[noteArr[i]] < 0) {
        noteIsPossible = false;
        break;
      }
    } else {
      noteIsPossible = false;
      break;
    }
  }

  return noteIsPossible;
}

console.log(harmlessRansomNote('this is a secret note for you from a secret admirer', 'puerto rico is a place of great wonder and excitement it has many secret waterfall locations that i am an admirer of you must hike quite a distance to find the places as they are far from populated areas but it is worth the effort a tip i have for you is to go early in the morning when it is not so hot out also note that you must wear hiking boots this is one of the best places i have ever visited'));
// false

console.log(harmlessRansomNote('this is a note for you from a secret admirer', 'puerto rico is a place of great wonder and excitement it has many secret waterfall locations that i am an admirer of you must hike quite a distance to find the places as they are far from populated areas but it is worth the effort a tip i have for you is to go early in the morning when it is not so hot out also note that you must wear hiking boots this is one of the best places i have ever visited'));
// true
