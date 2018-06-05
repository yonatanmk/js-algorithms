function meanMedianMode(array) {
  return {
    mean: getMean(array),
    median: getMedian(array),
    mode: getMode(array)
  }
}

function getMean(array) {
  // var sum = 0;

  // array.forEach(num => {
  //   sum += num;
  // });

  // var mean = sum / array.length;
  // return mean;
  return array.reduce((total, num) => total + num) / array.length
}

function getMedian(array) {
  const sortedArr = array.sort((a,b) => a - b)
  console.log(sortedArr)
  var median;

  if (sortedArr.length % 2 !== 0) {
    median = sortedArr[Math.floor(sortedArr.length / 2)];
  }
  else {
    var mid1 = sortedArr[(sortedArr.length / 2) - 1];
    var mid2 = sortedArr[sortedArr.length / 2];
    median = (mid1 + mid2) / 2;
  }

  return median;
}

function getMode(array) {
  var modeObj = {};

  array.forEach(num => {
    if (!modeObj[num]) modeObj[num] = 0;
    modeObj[num]++;
  });
  let output = [];
  let maxFreq = 0;
  for (let num in modeObj) {
    if (modeObj[num] == maxFreq) {
      output = [];
    } else if (modeObj[num] > maxFreq) {
      output = [num];
      maxFreq = modeObj[num];
    }
  }
  return output;
}


meanMedianMode([9,10,23,11,23,9]);
 
