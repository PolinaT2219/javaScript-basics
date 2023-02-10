function gameOfIntervals(input) {
  let moves = Number(input[0]);

  let to9C = 0;
  let to19C = 0;
  let to29C = 0;
  let to39C = 0;
  let to50C = 0;
  let invalidC = 0;

  let points = 0;

  for (i = 1; i <= moves; i++) {
    let num = Number(input[i]);

    if (num >= 0 && num <= 9) {
      points += 0.2 * num;
      to9C++;
    } else if (num >= 10 && num <= 19) {
      points += 0.3 * num;
      to19C++;
    } else if (num >= 20 && num <= 29) {
      points += 0.4 * num;
      to29C++;
    } else if (num >= 30 && num <= 39) {
      points += 50;
      to39C++;
    } else if (num >= 40 && num <= 50) {
      points += 100;
      to50C++;
    } else {
      points /= 2;
      invalidC++;
    }

  }

  console.log(`${(points).toFixed(2)}`);
  console.log(`From 0 to 9: ${(to9C / moves * 100).toFixed(2)}%`);
  console.log(`From 10 to 19: ${(to19C / moves * 100).toFixed(2)}%`);
  console.log(`From 20 to 29: ${(to29C / moves * 100).toFixed(2)}%`);
  console.log(`From 30 to 39: ${(to39C / moves * 100).toFixed(2)}%`);
  console.log(`From 40 to 50: ${(to50C / moves * 100).toFixed(2)}%`);
  console.log(`Invalid numbers: ${(invalidC / moves * 100).toFixed(2)}%`);
}
gameOfIntervals(["10",
  "43",
  "57",
  "-12",
  "23",
  "12",
  "0",
  "50",
  "40",
  "30",
  "20",
]);