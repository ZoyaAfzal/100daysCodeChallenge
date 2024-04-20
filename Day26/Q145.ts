//Question 145: Create a function that accepts a callback and invokes it with some arguments.

// This function accepts a callback function and invokes it with given arguments:
function executeCallback( 
    callback:(arg1:number, arg2:number, arg3:number)=> void,
    arg1: number,
    arg2: number,
    arg3: number 
): void {
    callback(arg1, arg2, arg3);
    // This function accepts a callback function and invokes it with given arguments
};
// Example callback function that adds two numbers:
const add = (a:number, b:number, c:number)=> {
    console.log(a + b + c); // Outputs the sum of a, b and c

};

executeCallback(add, 4, 4, 2);
//Outputs: 10

// Demonstrated invoking a callback function with arguments to perform an addition.
