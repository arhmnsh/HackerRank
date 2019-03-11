//https://www.hackerrank.com/challenges/simple-array-sum
function simpleArraySum(n, ar) {
  return ar.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
}
