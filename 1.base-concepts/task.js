"use strict"
let solveEquation = (a, b, c) => {
  if (a == 0)
    return false;
  let res = {};
  let D = b * b - 4 * a * c;
  //console.log('D = ' + D);
  if (D < 0)
    return false;
  res = D;
  if (D == 0)
    res = (-b + Math.sqrt(D)) / (2 * a);
  else if (D > 0) {
    let tmp = [];
    tmp.push((-b + Math.sqrt(D)) / (2 * a));
    tmp.push((-b - Math.sqrt(D)) / (2 * a));
    res = tmp;
  }
  return res;
}
console.log(solveEquation(1,5,4));
console.log(solveEquation(1, 2, 1));
console.log(solveEquation(1, 2, 10));



function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  
}