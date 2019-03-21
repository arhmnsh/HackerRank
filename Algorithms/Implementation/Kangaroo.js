//https://www.hackerrank.com/challenges/kangaroo
function kangaroo(x1, v1, x2, v2) {
  let meet;
  for (var i = 0; i < 10000; i++) {
    let k1Pos = x1 + v1 * i;
    let k2Pos = x2 + v2 * i;

    if (k1Pos === k2Pos) {
      meet = "YES";
      break;
    } else if ((v1 >= v2 && k1Pos > k2Pos) || (v1 <= v2 && k1Pos < k2Pos)) {
      meet = "NO";
      break;
    }
  }

  return meet;
}

kangaroo(0, 3, 4, 2);