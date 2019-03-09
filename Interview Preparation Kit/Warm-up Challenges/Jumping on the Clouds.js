function jumpingOnClouds(c) {
  var totalJumps = 0;

  for (var i = 0; i < c.length; i++) {
    var firstCloud = c[i];
    var secondCloud = c[i + 1];

    if (!i == 0) {
      //no need to jump on the first cloud
      //as you are already on it
      if (secondCloud == 0) {
        totalJumps++;
        i++;
      } else if (firstCloud == 0) {
        totalJumps++;
      }
    }
  }
  
  return totalJumps;
}
