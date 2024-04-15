//Question 137: Implement a try-catch block to handle potential errors in a block of code.

//Demonstrating using a try-catch block to handle errors:
try {
    //Intentionally causing an error:
    throw new Error("Something went wrong!")
    } 
catch (error) {
    console.log(`An error occured,` , error);
};

// This code tries to execute a block that throws an error, and the catch block handles the error gracefully.
