function isPalindrome(str) {
  const filteredStr = str
    .toLowerCase()
    .split('')
    .filter(char => 'abcdefghijklmnopqrstuvwxyz'.split('').includes(char))
    .join('');
  return filteredStr == filteredStr.split('').reverse().join('');
}

console.log(isPalindrome('race car'))
// true
console.log(isPalindrome("Madam, I'm Adam"))
// true
console.log(isPalindrome("Madam, I'm Ada"))
// false
