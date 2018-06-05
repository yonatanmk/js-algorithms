function binarySearch(numArray, key) {
  const sortedArr = numArray.sort((a,b) => a - b);
  const centerIndex = Math.floor(numArray.length / 2);
  const centerNum = sortedArr[centerIndex];

  if (centerNum == key) {
    return true;
  } else if (numArray.length <= 1) {
    return false
  } else if (centerNum > key) {
    const newArr = sortedArr.slice(0, centerIndex);
    return binarySearch(newArr, key);
  } else {
    const newArr = sortedArr.slice(centerIndex + 1, sortedArr.length);
    return binarySearch(newArr, key);
  }

  return centerNum
}

console.log(binarySearch([1,2,3, 3,4, 5.5,7], 5.5))
// true
console.log(binarySearch([1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,6,4,6,5,6,7,8], 5.5))
// false
console.log(binarySearch([1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,6,4,6,5, 5.5,6,7,8], 5.5))
// true

function binarySearch2(numArray, key) {
    var middleIdx = Math.floor(numArray.length / 2);
    var middleElem = numArray[middleIdx];

    if (middleElem === key) return true;
    else if (middleElem < key && numArray.length > 1) {
        return binarySearch(numArray.splice(middleIdx, numArray.length), key);
    }
    else if (middleElem > key && numArray.length > 1) {
        return binarySearch(numArray.splice(0, middleIdx), key);
    }
    else return false;
}

binarySearch2([5, 7, 12, 16, 36, 39, 42, 56, 71], 56);
