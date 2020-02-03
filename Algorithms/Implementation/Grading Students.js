//https://www.hackerrank.com/challenges/grading
function gradingStudents(grades) {
  let updatedGrades = grades.map(grade => {
      if (grade < 38) return grade;

      let condition = Math.abs((grade % 5) - 5);
      if (condition < 3) {
          grade += condition;
      }
      return grade;
  });

  return updatedGrades;
}

gradingStudents([73, 67, 38, 33]);
