function twoSum(array, sum) {
  const numObj = {};
  const output = [];
  array.forEach(el => {
    if (numObj[el]) {
      numObj[el]++;
    } else {
      numObj[el] = 1;
    }
  })

  // console.log(numObj)
  for (let num in numObj) {
    const partnerNum = sum - num;
    if (numObj[partnerNum]) {
      for (let i = 0; i < numObj[num] * numObj[partnerNum]; i++) {
        output.push([num, partnerNum])
      }
      delete numObj[partnerNum];
    }
  }
  return output;
}

console.log(twoSum([1,6,4,5,3,3,1,6], 7))
// [[6,1],[3,4],[3,4]]

function twoSum2(numArray, sum) {
  var pairs = [];
  var hashTable = [];

  for (var i = 0; i < numArray.length; i++) {
    var currNum = numArray[i];
    var counterpart = sum - currNum;
    if (hashTable.indexOf(counterpart) !== -1) {
      pairs.push([ currNum, counterpart ]);
    }
    hashTable.push(currNum);
  }

  return pairs;
}

console.log(twoSum2([1,6,4,5,3,3,1,6], 7))
// [[6,1],[3,4],[3,4]]
