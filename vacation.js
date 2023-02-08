function vacation(input) {
  index = 0;
  let moneyNeeded = Number(input[index]);
  index++;
  let moneyAvail = Number(input[index]);
  index++;

  let action = input[index];
  index++;
  let sum = Number(input[index]);
  index++;

  let daysSpentCount = 0;
  let counter = 0;

  while (moneyAvail < moneyNeeded) {
    counter++;

    if (action === 'spend') {
      if (sum > moneyAvail) {
        moneyAvail = 0
      } else {
        moneyAvail -= sum;
      }

      daysSpentCount++;
    } else {
      moneyAvail += sum;
      daysSpentCount = 0;
    }

    if (daysSpentCount === 5) {
      console.log("You can't save the money.");
      console.log(counter);
      return;
    }
    action = input[index];
    index++;
    sum = Number(input[index]);
    index++;
  }

  console.log(`You saved the money for ${counter} days.`)
}
vacation(["250",

"150",

"spend",

"50",

"spend",

"50",

"save",

"150",

"save",

"100"])