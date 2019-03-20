//https://www.hackerrank.com/challenges/apple-and-orange
function countApplesAndOranges(s, t, a, b, apples, oranges) {
  let appleDistances = apples.map(apple => a + apple);
  let orangeDistances = oranges.map(orange => b + orange);

  let applesOnHouse = appleDistances.reduce(
    (acc, val) => (val >= s && val <= t ? acc + 1 : acc),
    0
  );

  let orangesOnHouse = orangeDistances.reduce(
    (acc, val) => (val >= s && val <= t ? acc + 1 : acc),
    0
  );

  console.log(applesOnHouse);
  console.log(orangesOnHouse);
}

countApplesAndOranges(7, 10, 4, 12, [2, 3, -4], [3, -2, -4]);
