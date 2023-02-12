function trainTheTrainers(input) {
  let index = 0;
  let gradesCount = Number(input[index]);
  index++;

  let command = input[index];
  index++;

  let totalGradesSum = 0;
  let presentCount = 0;

  while (command !== 'Finish') {
    let presentationName = command;
    let gradesSum = 0;

    for (let curGradeCount = 1; curGradeCount <= gradesCount; curGradeCount++) {
      let curGrade = Number(input[index]);
      index++;

      gradesSum += curGrade;
    }
    let avgGrade = gradesSum / gradesCount;
    console.log(`${presentationName} - ${avgGrade.toFixed(2)}.`)

    totalGradesSum += avgGrade;
    presentCount++;

    command = input[index];
    index++;
  }
  let totalAvgGrade = totalGradesSum / presentCount;
  console.log(`Student's final assessment is ${totalAvgGrade.toFixed(2)}.`)
}
trainTheTrainers(["3",

"Arrays",

"4.53",

"5.23",

"5.00",

"Lists",

"5.83",

"6.00",

"5.42",

"Finish"])