function miniMaxSum(arr) {
  arr.reduce((accumulator, currentValue, currentIndex, array) =>
    currentIndex !== 1 ? accumulator + currentValue : accumulator
  );

  arr.reduce(
    (accumulator, currentValue, currentIndex, array) =>
      accumulator + currentValue
  );

  var max = null;
  var min = null;
  arr.forEach((value, index) => {
    var initialvalue = 0;
    let currentSum = arr.reduce(
      (accumulator, currentValue, currentIndex, array) =>
        currentIndex !== index ? accumulator + currentValue : accumulator,
      initialvalue
    );
    // console.log('currentSum', currentSum);
    if (currentSum < min || min == null) min = currentSum;
    if (currentSum > max) max = currentSum;
  });

  console.log(min + " " + max);
}
