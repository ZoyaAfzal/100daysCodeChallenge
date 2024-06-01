//Question 99: Generate a date object representing your next birthday and log it to the console.

//Generating a Date Object for the next occurence of a specific birthday:
function getNextBirthday(month:number, day:number): Date {
    const today = new Date();
    let year = today.getFullYear();
    const birthday = new Date(year, month - 1, day);
    //Months are 0-indexed
    if(birthday < today){
        //if the birthday this year already passed, use next year's date
        birthday.setFullYear(year + 1);
    } 
    return birthday;
}
//Replace with your birth and month:
const nextBirthday = getNextBirthday(8, 11);
//Example: August 11
console.log("Next Birthday is on:", nextBirthday.toLocaleDateString());
//Shows the date of the next birthday.