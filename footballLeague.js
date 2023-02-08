function footballLeague(input) {
  let capacity = Number(input[0]);
  let fansNum = Number(input[1]);

  let sector = '';
  let a = 0;
  let b = 0;
  let g = 0;
  let v = 0;

  for (i = 2; i <= fansNum + 1; i++) {
    sector = input[i];

    if (sector === 'A') {
      a++;
    } else if (sector === 'B') {
      b++;
    } else if (sector === 'G') {
      g++;
    } else if (sector === 'V') {
      v++;
    }
  }

  console.log(`${(a / fansNum * 100).toFixed(2)}%`);
  console.log(`${(b / fansNum * 100).toFixed(2)}%`);
  console.log(`${(v / fansNum * 100).toFixed(2)}%`);
  console.log(`${(g / fansNum * 100).toFixed(2)}%`);
  console.log(`${(fansNum / capacity * 100).toFixed(2)}%`);
}
footballLeague([
  "93",
  "16",
  "A",
  "V",
  "G",
  "G",
  "B",
  "B",
  "G",
  "B",
  "A",
  "B",
  "B",
  "B",
  "A",
  "B",
  "B",
  "A"
])