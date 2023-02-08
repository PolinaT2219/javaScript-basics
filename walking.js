function walking(input) {

  let command = input.shift();
  let goal = 10000;
  let totalStepsCount = 0;

  while (command !== 'Going home') {

    let inputSteps = Number(command);
    totalStepsCount += inputSteps;

    if (totalStepsCount >= goal) {
      console.log("Goal reached! Good job!");
      console.log(`${totalStepsCount - goal} steps over the goal!`)
      break;
    }
    command = input.shift();
  }
 
  if (command === 'Going home') {
    let finalSteps = Number(input.shift(command));
    totalStepsCount += finalSteps;

    if (totalStepsCount >= goal) {
      console.log("Goal reached! Good job!");
      console.log(`${totalStepsCount - goal} steps over the goal!`)
    }
    else {
      console.log(`${goal - totalStepsCount} more steps to reach goal.`);
    }
  }
}

walking(["1500", "3000", "250", "1548", "2000", "Going home", "2000"])
