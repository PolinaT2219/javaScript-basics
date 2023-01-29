function cleverLily(input) {

  let age = Number(input[0]);
  let washingMachinePrice = Number(input[1]);
  let pricePerToy = Number(input[2]);

  let totalMoneyWon = 0;
  let evenBdayMoneyWon = 10;

  for (let i = 1; i <= age; i++){
      if (i % 2 === 0){
        totalMoneyWon += evenBdayMoneyWon;
        totalMoneyWon -= 1;
        evenBdayMoneyWon += 10;
      } else {
        totalMoneyWon += pricePerToy;
      }
  }

    if (totalMoneyWon >= washingMachinePrice) {
      let moneyLeft = totalMoneyWon - washingMachinePrice;
      console.log(`Yes! ${moneyLeft.toFixed(2)}`);
    } else {
      let moneyNeeded = washingMachinePrice - totalMoneyWon;
      console.log(`No! ${moneyNeeded.toFixed(2)}`);
    }
}
cleverLily(["21",

"1570.98",

"3"]);