function bubbleSort(arr) {
  let count = 0;
  let roundCounter = 0;
  for (let i = 0; i <= arr.length; i++) {
    // let sortingComplete = true;
    for (let j = 0; j < arr.length - i - 1; j++) {
      console.log(`j: ${arr[j]}, j+1: ${arr[j + 1]}`)
      if (arr[j] > arr[j + 1]) {
        const tempVar = arr[j];
        console.log(arr)
        arr[j] = arr[j + 1];
        arr[j + 1] = tempVar;
        console.log(arr)
        console.log('__________________')
        // if (j !== arr.length - i - 2) {
        //   sortingComplete = false;
        // }
        // if (j === arr.length - i - 2) {
        //   console.log('BREAK')
        //   console.log(`j: ${arr[j]}, j+1: ${arr[j + 1]}`)
        //   console.log(arr)
        // }
      }
      count++;
    }
    // if (sortingComplete) {
    //   break;
    // }
    roundCounter++;
    console.log('__________________')
    console.log(`Round ${roundCounter} result:`)
    console.log(arr)
    console.log('__________________')
  }
  console.log('count: ', count)
  return arr;
}

console.log(bubbleSort([5,3,8,2,1,3,7,5,6,12,4]))
// [1,2,3,4,5,8]

// function bubbleSort2(array) {
//     for (var i = array.length; i > 0; i--) {
//       for (var j = 0; j < i; j++) {
//         if (array[j] > array[j + 1]) {
//           var temp = array[j];
//           array[j] = array[j + 1];
//           array[j + 1] = temp;
//         }
//       }
//     }

//     return array;
// }

// bubbleSort2([6000, 34, 203, 3, 746, 200, 984, 198, 764, 9, 1]);
