//Question 104: Create a function that generates a random hexadecimal color code.
//This function generates a random hexadecimal color code:
function getRandomHexColor() {
    const color = '#' + Math.floor(Math.random() * 0xFFFFFF).toString(16).padStart(6, '0');
    return color;
    //It will return the random color code
}
;
console.log(getRandomHexColor());
export {};
//Output will be a random hex code like #ff3e12
//We generated a random number, converted it to hexadecimal, and ensured it's 6 characters long.
