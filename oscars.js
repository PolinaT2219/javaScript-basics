//final score = defaultPoints + (judgeNameCount * pointsGiven)/2;

function oscars(input) {
  let actorName = input[0];
  let defaultPoints = Number(input[1]);
  let numberOfAssessors = Number(input[2]);

  let points = defaultPoints;
  let isNominated = false;

  for (i = 3; i < input.length; i += 2) {
    let nameLength = input[i].length;
    let pointsGiven = Number(input[i + 1]);

    points += ((nameLength * pointsGiven) / 2)
    if (points > 1250.5) {
      isNominated = true;
      break;
    }
  }
  if (isNominated) {
    console.log(`Congratulations, ${actorName} got a nominee for leading role with ${points.toFixed(1)}!`);
  } else {
    let pointsNeeded = 1250.5 - points;
    console.log(`Sorry, ${actorName} you need ${pointsNeeded.toFixed(1)} more!`);
  }
}
oscars([
  "Zahari Baharov",
  "205",
  "4",
  "Johnny Depp",
  "45",
  "Will Smith",
  "29",
  "Jet Lee",
  "10",
  "Matthew Mcconaughey",
  "39"])