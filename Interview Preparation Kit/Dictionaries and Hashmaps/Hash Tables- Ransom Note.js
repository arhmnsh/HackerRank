function checkMagazine(magazine, note) {
  var finalResult = "No";
  for (var i = 0; i < note.length; i++) {
    var word = note[i];
    if (magazine.indexOf(word) >= 0) {
      magazine[magazine.indexOf(word)] = null;
      finalResult = "Yes";
    } else {
      finalResult = "No";
      break;
    }
  }
  console.log(finalResult);
}
