//Question 115: Use a switch statement to log the days of the week based on a number (1-7).
//This function logs the day of the week based on number (1-7);
function logdaysOfWeek(dayNumber) {
    switch (dayNumber) {
        case 1:
            console.log("Sunday");
            break;
        case 2:
            console.log("Monday");
            break;
        case 3:
            console.log("Tuesday");
            break;
        case 4:
            console.log("Wednesday");
            break;
        case 5:
            console.log("Thursday");
            break;
        case 6:
            console.log("Friday");
            break;
        case 7:
            console.log("Saturday");
            break;
        default:
            console.log("Invalid Day Number!");
            break;
    }
    ;
}
;
logdaysOfWeek(1);
logdaysOfWeek(4);
logdaysOfWeek(7);
export {};
//Used a Switch statement to select the appropriate day based on the number.
