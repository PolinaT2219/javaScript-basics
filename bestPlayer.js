function bestPlayer(input) {
  let index = 0;
  let command = input[index];
  index++;
  let goals = Number(input[index])
  index++;

  let maxGoalsScored = 0;
  let bestPl = '';
  while (command != "END") {
    let player = command;

    if (goals > maxGoalsScored) {
      maxGoalsScored = goals;
      bestPl = player;
    }
    if (maxGoalsScored >= 10) {
      break;
    }
    command = input[index];
    index++;
    goals = Number(input[index])
    index++;
  }

  console.log(`${bestPl} is the best player!`);

  if (maxGoalsScored >= 3) {
    console.log(`He has scored ${maxGoalsScored} goals and made a hat-trick !!!`);
  } else {
    console.log(`He has scored ${maxGoalsScored} goals.`);
  }
}

bestPlayer(["Zidane",
  "1",
  "Felipe",
  "2",
  "Johnson",
  "4",
  "END"])