function getStockPrices1(arr) {
  let output = arr[1] - arr[0];
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      // console.log(i, j)
      const profit = arr[j] - arr[i];
      if (profit > output) output = profit
    }
  }
  return output;
}

function getStockPrices2(arr) {
  if (arr.length < 2) {
    return 'Getting a profit requires at least 2 prices';
  }
  let min = arr[0];
  let output = arr[1] - arr[0];
  for (let i = 1; i < arr.length - 1; i++) {
    const profit = arr[i] - min;
    if (profit > output) output = profit
    if (arr[i] < min) min = arr[i];
  }
  return output;
}

console.log(getStockPrices2([10, 7, 5, 8, 11, 9]))
// 6
console.log(getStockPrices2([100, 90, 88, 70, 30, 10]))
// -2
console.log(getStockPrices2([100, 100, 100, 100, 100]))
// 0
console.log(getStockPrices2([100]))
// Error
