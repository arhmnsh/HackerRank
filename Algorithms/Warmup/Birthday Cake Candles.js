//https://www.hackerrank.com/challenges/birthday-cake-candles
function birthdayCakeCandles(ar) {
    let maxVal = Math.max.apply(null, ar);

    var maxCount = 0;
    ar.forEach(val => {
    if (val == maxVal) maxCount++;
    });

    console.log(maxCount);
    return maxCount;
}