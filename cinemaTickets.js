function cinemaTickets(input) {
  let index = 0;
  let command = input[index];
  index++;

  let studentTickets = 0;
  let standardTickets = 0;
  let kidsTickets = 0;

  while (command !== 'Finish') {
    let movieTitle = command;

    let freeSpaces = Number(input[index]);
    index++;

    let command1 = input[index];
    index++;

    let spacesTaken = 0;

    while (command1 !== 'End') {
      let ticketType = command1;

      if (ticketType === 'student') {
        studentTickets++;
      } else if (ticketType === 'standard') {
        standardTickets++;
      } else {
        kidsTickets++;
      }
      spacesTaken++;

      if (spacesTaken === freeSpaces) {
        break;
      }
      command1 = input[index];
      index++;
    }
    let percentFull = (spacesTaken / freeSpaces) * 100;
    console.log(`${movieTitle} - ${percentFull.toFixed(2)}% full.`);

    command = input[index];
    index++;
  }

  let totalTickets = studentTickets + standardTickets + kidsTickets;
  console.log(`Total tickets: ${totalTickets}`);
  console.log(`${(studentTickets / totalTickets * 100).toFixed(2)}% student tickets.`);
  console.log(`${(standardTickets / totalTickets * 100).toFixed(2)}% standard tickets.`);
  console.log(`${(kidsTickets / totalTickets * 100).toFixed(2)}% kids tickets.`);
}
cinemaTickets(["The Matrix",

  "20",

  "student",

  "standard",

  "kid",

  "kid",

  "student",

  "student",

  "standard",

  "student",

  "End",

  "The Green Mile",

  "17",

  "student",

  "standard",

  "standard",

  "student",

  "standard",

  "student",

  "End",

  "Amadeus",

  "3",

  "standard",

  "standard",

  "standard",

  "Finish"])