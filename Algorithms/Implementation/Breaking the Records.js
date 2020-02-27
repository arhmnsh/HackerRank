//https://www.hackerrank.com/challenges/breaking-best-and-worst-records/problem
function breakingRecords(scores) {
  let minRecord = 0,
    maxRecord = 0,
    minScore = 0,
    maxScore = 0;

  scores.forEach((score, index) => {
    if (index == 0) {
      minScore = score;
      maxScore = score;
    } else if (score < minScore) {
      minRecord++;
      minScore = score;
    } else if (score > maxScore) {
      maxRecord++;
      maxScore = score;
    }
  });

  return [maxRecord, minRecord];
}


breakingRecords([10,5,20,20,4,5,2,25,1]);