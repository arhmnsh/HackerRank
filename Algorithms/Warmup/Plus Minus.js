//https://www.hackerrank.com/challenges/plus-minus
var numberOfPositiveValues = 0,
  numberOfNegativeValues = 0,
  numberOfZeroes = 0;

arr.forEach(val => {
  if (val > 0) {
    numberOfPositiveValues++;
  } else if (val < 0) {
    numberOfNegativeValues++;
  } else {
    numberOfZeroes++;
  }
});

console.log(numberOfPositiveValues / arr.length);
console.log(numberOfNegativeValues / arr.length);
console.log(numberOfZeroes / arr.length);
