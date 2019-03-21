https://www.hackerrank.com/challenges/sherlock-and-anagrams
function sherlockAndAnagrams(s) {
  let count = 0;

  // Size of our sliding window
  for (let i = 1; i < s.length; i++) {
    let found = {};

    // Starting index of our sliding window
    for (let j = 0; j + i <= s.length; j++) {
      console.log("i", i);
      console.log("j", j);
      console.log("i+j", i + j);
      let substr = s.substr(j, i);
      substr = substr
        .split("")
        .sort()
        .join("");
      console.log(substr);

      if (found[substr]) {
        count += found[substr];
        found[substr]++;
      } else {
        found[substr] = 1;
      }
    }
  }

  // console.log('count', count);
  return count;
}

sherlockAndAnagrams('abba');