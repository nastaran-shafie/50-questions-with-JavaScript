function checkLeapYear(year) {
  //three conditions to find out the leap year
  if ((0 == year % 4 && 0 != year % 100) || 0 == year % 400) {
    console.log(year + " is a leap year");
  } else {
    console.log(year + " is not a leap year");
  }
}
checkLeapYear(2012); //"Year 2012 is a leap year"
checkLeapYear(1900); //"Year 1900 is not a leap year"
checkLeapYear(2000); //"Year 2000 is a leap year"
checkLeapYear(2011); //"Year 2011 is not a leap year"
