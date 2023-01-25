"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let discriminant = (Math.pow(b, 2)) - (4 * a * c);
  if (discriminant === 0) {
    arr = [`x = ${-b / (2 * a)}`];
  } else if (discriminant > 0) {
    arr = [`x1 = ${(-b + Math.sqrt(d)) / (2 * a)}, x2 =  ${(-b - Math.sqrt(d)) / (2 * a)}`];
  } else {
    return arr
  }
  
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
   let interestRate = percent / 100 / 12;
    let credit = amount - contribution;
    let paymentPerMonth = credit * (interestRate + (interestRate / (Math.pow(1 + interestRate) ** countMonths) - 1));
    let sum = paymentPerMonth * countMonths - contribution;

    return sum
}