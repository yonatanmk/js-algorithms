function fibonacci(position) {
  return position > 2 ? fibonacci(position - 1) + fibonacci(position - 2) : 1;
}

console.log(fibonacci(4))
// 3
console.log(fibonacci(9))
// 34
