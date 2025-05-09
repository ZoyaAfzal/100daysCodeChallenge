//Question 97: Write a function that returns the current date in the format "DD-MM-YYYY".

/// This function formats the current date as DD-MM-YYYY:
function getCurrentDateFormatted():string {
    const now = new Date();
    const day = String(now.getDate()).padStart(2, '0');
    //Ensures the day in two digits
    const month = String(now.getMonth() + 1).padStart(2, '0');
    //Adding 1 because months are 0-indexed.1
    const year = now.getFullYear();
    return `${day}-${month}-${year}`;
}
console.log(getCurrentDateFormatted());
// Outputs the current date in DD-MM-YYYY format
// Shows today's date, neatly formatted.