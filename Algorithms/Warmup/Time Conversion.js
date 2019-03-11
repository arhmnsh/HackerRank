//https://www.hackerrank.com/challenges/time-conversion
function timeConversion(s) {
  let hour = s.substr(0, 2);
  let amPm = s.substr(8, 2);

  let militaryHour = hour;
  if (amPm === "AM" && hour === "12") {
    militaryHour = "00";
  } else if (amPm === "PM" && hour !== '12') {
    militaryHour = parseInt(hour) + 12;
  }

  return militaryHour + s.slice(2).slice(0, -2);
}
