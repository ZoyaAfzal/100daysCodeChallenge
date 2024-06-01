//Question 103: Write a function that returns a random boolean value, true or false.

//This function returns a random boolean value :
function getRandomBooleanValue():boolean{
    return Math.random() > 0.5;
    //It will return true if the random number is greater than 0.5
};
console.log(getRandomBooleanValue());
//Output will be true and false randomly

//By comparing a random number to 0.5, we effectively get a true or false randomly.
