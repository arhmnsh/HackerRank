//https://www.hackerrank.com/challenges/divisible-sum-pairs/problem
function divisibleSumPairs(n, k, ar) {
    let result = 0;
    for (let i = 0; i < n - 1; i++) {
      result += ar.slice(i + 1, n).filter((item, index) => {
        if ((item + ar[i]) % k === 0) {
          return item;
        }
      }).length;
    }
    
    return result;
}

divisibleSumPairs(6, 3, [1, 3, 2, 6, 1, 2]);
