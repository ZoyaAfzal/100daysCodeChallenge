/*Question 59: Add a Special Number: Make a program that creates custom adders. These adders can add a specific 
number to any other number you give them later.*/

//This program makes a function that adds a specific number
function makeAdder(valueToAdd:number):(number:number) => number {

    //This is the magic box.It takes a number and add your special number to it.
    return function (number:number):number {
        return number + valueToAdd;
    };
}
//Making a magic box that that adds 10
let addTen = makeAdder(10);
console.log(addTen(2));
console.log(addTen(5));
//We made a function (magic box) thats adds 10 to any number 