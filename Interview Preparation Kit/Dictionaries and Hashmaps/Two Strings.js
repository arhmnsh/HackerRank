//https://www.hackerrank.com/challenges/two-strings/
function twoStrings(s1, s2) {
  var matchFound = "NO";

  for (var letter of s1) {
    if (s2.includes(letter)) {
      matchFound = "YES";
      break;
    }
  }

  return matchFound;
}
