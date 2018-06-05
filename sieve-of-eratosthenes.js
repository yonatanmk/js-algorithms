function sieveOfEratosthenes(num) {
  const numbers = Array(num).fill(true)
  numbers[0] = numbers[1] = false;
  if (num < 2) {
    return [];
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    // for (let j = 2; j < numbers.length; j++) {
    //   if ( i !== j && (!numbers[j] || j % i === 0)) {
    //     numbers[j] = false;
    //   }
    // }
    for (let j = 2; i * j < num; j++) {
      numbers[i * j] = false;
    }
  }
  return numbers.map((val, i) => val ? i : val).filter(a => a)
}

console.log(sieveOfEratosthenes(20))
// [2,3,5,7,11,13,17,19]
console.log(sieveOfEratosthenes(49))
