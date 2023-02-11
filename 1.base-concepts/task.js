"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let x1 = 0;
  let x2 = 0;
  let discriminant = (Math.pow(b, 2)) - (4 * a * c);
  if (discriminant === 0) {
    x1 = -b / (2 * a);
    arr.push(x1)
  } else if (discriminant > 0) {
    x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
    arr.push(x1,x2);
  } 
     return Math.floor(arr);
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
if (typeof(percent) === "string" || typeof(contribution) === "string" || typeof(amount) === "string" || typeof(countMonths) === "string") {
  Number(percent);
  Number(contribution);
  Number(amount);
  Number(countMonths);
} else {
  return false;
}
   let interestRate = percent / 100 / 12;
    let credit = amount - contribution;
    let paymentPerMonth = credit * (interestRate + (interestRate / (Math.pow(1 + interestRate) ** countMonths) - 1));
    let sum = paymentPerMonth * countMonths - contribution;

    return sum
}