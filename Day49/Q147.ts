//Question 147: Explain how to handle errors in a callback pattern.

// Function that uses a callback pattern, including error handling
function fetchData(
    callback:(error: Error|null , data?: string) => void
): void {
    // Simulating an error condition:
    const error = new Error ("Failed to fetch data");
    const data = "Some data";

// Simulate fetching data with a chance of error:
if (Math.random() > 0.5) {
    callback(null, data); // No error, data is fetched successfully
} else {
    callback(error);  // Passes error to the callback
}
};
// Using the fetchData function with error handling in the callback:
fetchData((error, data)=> {
    if (error) {
        console.log(error.message); //Handling the error
    } else {
        console.log(data); //Processing the data
    }
})
// Demonstrated a callback pattern where errors are handled gracefully.
