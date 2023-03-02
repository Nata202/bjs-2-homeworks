function getArrayParams(...arr) {

  let min = Math.min(...arr);
  let max = Math.max(...arr);
  let sum = 0;
  
  for (let i = 0; i < arr.length; i++) {
    let element = arr[i];
    sum += element;
  }

  let avg = sum / arr.length

  return { min: min, max: max, avg: Number(avg.toFixed(2)) };
}

function summElementsWorker(...arr) {
  let sum = 0;
  if (arr.length === 0 ) {
    return 0;
  } 
  for (let i = 0; i < arr.length; i++) { 
    sum += arr[i];
  }
  return sum
}

function differenceMaxMinWorker(...arr) {
  if (arr.length === 0 ) {
    return 0;
  }  
  const x = Math.max(...arr);
  const y = Math.min(...arr);
  return x - y
}

function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0;
  let sumOddElement = 0;
  if (arr.length === 0 ) {
    return 0;
  } 
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
    } else {
      sumOddElement += arr[i];
    }
  }
  
  return sumEvenElement - sumOddElement
}

function averageEvenElementsWorker(...arr) {
  let sumEvenElement = 0;
  let countEvenElement = 0;
  if (arr.length === 0 ) {
    return 0;
  } 

  for (let i = 0; i < arr.length; i++) {
    element = arr[i]
     if (element % 2 === 0) {
      sumEvenElement += element;
      countEvenElement += 1;
    }
  }
  return sumEvenElement / countEvenElement
}

function makeWork (arrOfArr, func) {
  let maxWorkerResult = -Infinity;
  for (let i = 0; i < arrOfArr.length; i++){
    const result = func(...arrOfArr[i]);
    if (result > maxWorkerResult) {
      maxWorkerResult = result;
    }
  }
  return maxWorkerResult;
}
