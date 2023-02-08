function coins(input) {
  let totalSum = Number(input[0]);
  let coinsLeft = Math.trunc(totalSum * 100);
  let coinsUsed = 0;

  while (coinsLeft > 0) {

  if (coinsLeft >= 200) {
    coinsLeft -= 200;
    coinsUsed++;
  } else if (coinsLeft >= 100) {
    coinsLeft -= 100;
    coinsUsed++;
  } else if (coinsLeft >= 50) {
    coinsLeft -= 50;
    coinsUsed++;
  } else if (coinsLeft >= 20) {
    coinsLeft -= 20;
    coinsUsed++;
  } else if (coinsLeft >= 10) {
    coinsLeft -= 10;
    coinsUsed++
  } else if (coinsLeft >= 5) {
    coinsLeft -= 5;
    coinsUsed++;
  } else if (coinsLeft >= 2) {
    coinsLeft -= 2;
    coinsUsed++;
  } else if (coinsLeft >= 1) {
    coinsLeft -= 1;
    coinsUsed++;
  }
}
console.log(coinsUsed);
}
coins(["7.5"]);