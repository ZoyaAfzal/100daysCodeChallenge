//Question 143: Show how to use the .then() and .catch() methods to handle Promise resolution and rejection.

// Creating a Promise that either resolves or rejects based on a condition:
const conditionalPromise = new Promise<string>((resolve, reject)=>{
    const success = Math.random() > 0.5;
    // Randomly choose success or failure
    if(success){
        resolve("Success!");
    } else {
        reject(new Error("Failure!"));
    }
});
conditionalPromise.then((result)=> console.log(result)); // Handling a successful resolution
conditionalPromise.catch((error)=> console.log(error.message)); //// Handling a rejection


// This code will randomly log either "Success!" or "Failure" based on the outcome of the promise.