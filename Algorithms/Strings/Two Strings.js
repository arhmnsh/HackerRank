//https://www.hackerrank.com/challenges/two-strings
function twoStrings(s1, s2) {
  // console.log('s1', s1);
  // console.log('s2', s2);
  var s1A = s1.split("");
  var s2A = s2.split("");

  var matchFound = "NO";
  for (var i = 0; i < s1A.length; i++) {
    if (s2A.includes(s1A[i])) {
      matchFound = "YES";
      break;
    }
  }
}
