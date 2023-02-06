function getArrayParams(...arr) {

  let min = Infinity;
  let max = -Infinity;
  let sum = min + max;
  for (let i = 0; i < arr.length; I++) {
    let element = arr[i];
    sum += element;
    let avg = sum / arr.length
    if (arr === [] ) {
      return 0;
    } else if (element > Math.max(arr)) {
      max === element;
    } else if (element < Math.min(arr)) {
      min === element;
    }
  return Number({ min: min, max: max, avg: toFixed(avg, 2) });
}
}

function summElementsWorker(...arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) { 
    if (arr === [] ) {
      return 0;
    } else if (arr[i] > 0) {
    sum += arr[i];
  } else {
    break;
  }
}
  return sum
}

function differenceMaxMinWorker(...arr) {
  if (arr === [] ) {
    return 0;
  } 
  x = Math.max(arr);
  y = Math.min(arr);
  return x - y
}

function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0;
  let sumOddElement = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr === [] ) {
      return 0;
    } else if (arr[i] % 2 === 0) {
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

  for (let i = 0; i < newArray.length; i++) {
    element = newArray[i]
    if (arr === [] ) {
      return 0;
    } else if (element % 2 === 0) {
      sumEvenElement += element;
      countEvenElement += 1;
    }
  }
  return sumEvenElement / countEvenElement
}

function makeWork (arrOfArr, func) {
  let maxWorkerResult = -Infinity;
  for (let i = 0; i < arrOfArr.length: i++){
    let const = func(...arrOfArr[i]);
  }
  if (const > maxWorkerResult) {
    const = maxWorkerResult;
  }
  return const;

}
