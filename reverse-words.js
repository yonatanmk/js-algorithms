function reverseWords1(str) {
  return str.split(' ')
    .map(word => {
      let reverseWordArr = [];
      word.split('').forEach(char => reverseWordArr.unshift(char));
      return reverseWordArr.join('');
    })
    .join(' ');
}

reverseWords1('zoo keeper')
// keeper zoo

function reverseWords2(string) {
  var wordsArr = string.split(' ');
  var reversedWordsArr = [];

  wordsArr.forEach(word => {
    var reversedWord = '';
    for (var i = word.length - 1; i >= 0; i--) {
      reversedWord += word[i];
    };
    reversedWordsArr.push(reversedWord);
  });

  return reversedWordsArr.join(' ');
}

reverseWords2('Coding JavaScript');
