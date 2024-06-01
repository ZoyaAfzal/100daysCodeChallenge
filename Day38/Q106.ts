//Question 106: Determine if a given year is a leap year using comparison operators.

//This function checks if a year is a leap year:
function isLeapYear(year:number): boolean {
    //it will check the condition for a leap year
    return(year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
};
console.log(isLeapYear(2024));
console.log(isLeapYear(2023));

console.log(isLeapYear(2020));
console.log(isLeapYear(2019));

console.log(isLeapYear(2020));
console.log(isLeapYear(2019));