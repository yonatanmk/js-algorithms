function fibMemo(index, cache = {}) {
  console.log(cache)
  if (cache[index]) {
    return cache[index];
  } else if (index < 3) {
    return 1;
  } else {
    cache[index] = fibMemo(index - 1, cache) + fibMemo(index - 2, cache);
  }

  return cache[index];
}

console.log(fibMemo(4))
// 3
console.log('_____________')
console.log(fibMemo(9))
// 34
console.log('_____________')
console.log(fibMemo(50))
// 12586269025
