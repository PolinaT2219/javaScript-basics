function bills(input) {
  let months = Number(input[0]);
  let electricity = 0;
  let water = 20;
  let internet = 15;
  let others = 0;

  let elTotal = 0;
  let othersTotal = 0;

  for (let i = 1; i <= months; i++) {
    electricity = Number(input[i]);
    others = (electricity + water + internet) * 1.2;

    elTotal += electricity;
    othersTotal += others;
  }
  let average = (elTotal + (water * months) + (internet * months) + othersTotal) / months;

  console.log(`Electricity: ${elTotal.toFixed(2)} lv`);
  console.log(`Water: ${(water * months).toFixed(2)} lv`);
  console.log(`Internet: ${(internet * months).toFixed(2)} lv`);
  console.log(`Other: ${(othersTotal).toFixed(2)} lv`);
  console.log(`Average: ${average.toFixed(2)} lv`);
}
bills(["5",
  "68.63",
  "89.25",
  "132.53",
  "93.53",
  "63.22",
])