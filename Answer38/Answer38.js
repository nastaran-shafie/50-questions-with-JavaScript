function checkInRange(num, renge1, renge2) {
  if (num < renge2 && num > renge1) {
    console.log(`${num} is between the range ${renge1} and ${renge2} `);
  } else {
    console.log(`${num} is outside the range ${renge1} and ${renge2} `);
  }
}

checkInRange(15, 11, 30); //"15 is between the range 11 and 30"
checkInRange(20, 34, 51); //"20 is outside the range 34 and 51"
