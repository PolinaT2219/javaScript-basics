function dishwasher(input) {
  let index = 0;
  let detergentL = Number(input[index]);
  index++;

  let detergentAvail = detergentL * 750;

  let command = "";
  let tableware = 0;
  let counter = 0;
  let dishesWashed = 0;
  let potsWashed = 0;

  while (true) {
    command = input[index];
    if (command === 'End') {
      break;
    }
    counter++;
    if (counter % 3 === 0) {
      tableware = Number(command);
      potsWashed += tableware;
      detergentAvail -= tableware * 15;
    } else {
      tableware = Number(command);
      dishesWashed += tableware;
      detergentAvail -= tableware * 5;
    }
    if (detergentAvail < 0) {
      console.log(`Not enough detergent, ${Math.abs(detergentAvail)} ml. more necessary!`);
      return;
    }
    index++;
  }
  console.log("Detergent was enough!");
  console.log(`${dishesWashed} dishes and ${potsWashed} pots were washed.`);
  console.log(`Leftover detergent ${Math.abs(detergentAvail)} ml.`);
}
dishwasher(["1", "10", "15", "10", "12", "13", "30"]);
