//Question 109: Write an if statement that logs "Good Morning" if the current time is before 12 PM.
//Checking the currennt hour and logging "Good Morning" if it is before 12pm:
const currentTime = new Date();
if (currentTime.getHours() < 12) {
    console.log("Good Morning");
    //Hours are in 24 hours format, so 12pm is 12 and It's morning before 12pm.
}
;
export {};
//This simply helps us greet user aproximately based on the time of a day.
