//https://www.hackerrank.com/challenges/staircase/
function staircase(n) {
  var iteration = 1;
  while (iteration <= n) {
  let myString = "#".repeat(iteration);
  console.log((" ".repeat(n) + myString).slice(iteration));
  iteration++;
  }
}