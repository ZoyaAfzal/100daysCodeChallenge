//Question 101: Generate a random integer between 1 and 10.

//Generating a random integar between 1 to 10:
function getRandomIntegar():number {
    return Math.floor(Math.random() * 10) + 1
};
console.log(getRandomIntegar());
//Output will be a random integar between 1 and 10

/*This function combines Math.random() with Math.floor() to create a random 
integer within our range.*/