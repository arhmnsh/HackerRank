//https://www.hackerrank.com/challenges/the-birthday-bar/problem
function birthday(s, d, m) {
  let foundSegments = 0;
  for (let i = 0; i <= s.length - m; i++) {
    let sum = s.slice(i, m + i).reduce((acc, cv) => acc + cv);
    if (sum == d) foundSegments++;
  }
  return foundSegments;
}

birthday([1, 2, 1, 3, 2], 3, 2);
