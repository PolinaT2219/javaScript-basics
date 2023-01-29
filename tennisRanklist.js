function tennisRanklist(input) {

  let tournamentsCount = Number(input[0]);
  let startingPoints = Number(input[1]);

  let pointsWon = 0;
  let tournamentsWon = 0;

  for (let i = 2; i < input.length; i++) { //for (let i = 2; i < tournamentsCount + 1; i++) - better option
    let curResult = input[i];

    if (curResult === 'W') {
      pointsWon += 2000;
      tournamentsWon++;
    } else if (curResult === 'F') {
      pointsWon += 1200;
    } else {
      pointsWon += 720;
    }
  }

  let totalPoints = startingPoints + pointsWon;
  console.log(`Final points: ${totalPoints}`);

  let avgPoints = Math.floor(pointsWon / tournamentsCount);
  console.log(`Average points: ${avgPoints}`);

  let tournamentsWonPercent = (tournamentsWon / tournamentsCount) * 100;
  console.log(`${tournamentsWonPercent.toFixed(2)}%`)
}
tennisRanklist(["5", "1400", "F", "SF", "W", "W", "SF"]);