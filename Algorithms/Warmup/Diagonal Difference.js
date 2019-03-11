//https://www.hackerrank.com/challenges/diagonal-difference
function diagonalDifference(arr) {
  let dimensions = arr.length;

  let firstDiagonalSum = 0;
  let secondDiagonalSum = 0;

  for (var i = 0; i < dimensions; i++) {
    firstDiagonalSum += arr[i][i];
    secondDiagonalSum += arr[i][dimensions - i - 1];
  }

  return Math.abs(firstDiagonalSum - secondDiagonalSum);
}
