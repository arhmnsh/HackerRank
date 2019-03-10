//https://www.hackerrank.com/challenges/compare-the-triplets
function solve(a0, a1, a2, b0, b1, b2) {
  // Complete this function
  var alice = 0;
  var bob = 0;
  if (a0 > b0) alice++;
  else if (a0 < b0) bob++;

  if (a1 > b1) alice++;
  else if (a1 < b1) bob++;

  if (a2 > b2) alice++;
  else if (a2 < b2) bob++;

  return [alice, bob];
}
