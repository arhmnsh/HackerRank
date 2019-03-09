// Complete the countingValleys function below.
function countingValleys(n, s) {
  var valleys = 0;
  var sum = 0;

  var steps = s.split("");
  let stepsNumeric = steps.map(step => (step == "D" ? -1 : 1));

  stepsNumeric.forEach(step => {
    var currentSum = sum + step;
    if (sum >= 0 && currentSum < 0) {
      valleys++;
    }
    sum = currentSum;
  });

  return valleys;
}
