function reverseArrayInPlace(arr) {
  const arrLength = arr.length;
  for (let i = 0; i < arrLength; i++) {
    const el = arr[arr.length - 1 - i * 2]
    arr.push(el)
  }
  return arr.splice(arrLength, arr.length)
}

reverseArrayInPlace([1,2,3,4,5])
// [5,4,3,2,1]

function reverseArrayInPlace2(arr) {
  for (var i = 0; i < arr.length / 2; i++) {
    var tempVar = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = tempVar;
  }

  return arr;
}

reverseArrayInPlace2([1, 2, 3, 4, 5, 6, 7, 8]);
