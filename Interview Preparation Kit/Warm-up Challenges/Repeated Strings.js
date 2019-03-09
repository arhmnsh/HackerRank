function repeatedString(s, n) {
  var initialLength = s.length;

  var mulitiplierFraction = n / initialLength;

  var multiplier = Math.floor(mulitiplierFraction);

  var sArray = s.split("");
  let aInInitalString = 0;

  sArray.forEach(val => {
    if (val == "a") {
      aInInitalString++;
    }
  });

  console.log("aInInitalString", aInInitalString);

  let initialSum = aInInitalString * multiplier;
  console.log("initialSum", initialSum);

  let remainingCharacters = n % s.length;

  let remainingString = s.substr(0, remainingCharacters);

  let remainingArray = remainingString.split("");

  let remainingSum = 0;
  remainingArray.forEach(val => {
    if (val == "a") {
      remainingSum++;
    }
  });

  return initialSum + remainingSum;
}
