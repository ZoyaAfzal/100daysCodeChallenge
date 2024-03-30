/*Question 81: Iterating Over Object Properties: Write a function that takes an object as an argument and logs all
of its properties and values.*/
//This function shows every detail about an object:
function logObjectProperties(obj) {
    for (let property in obj) {
        //Looping through each property in the Object.
        console.log(`${property}: ${obj[property]}`);
        //Showing the property name and value.
    }
}
//Using this function with a Car Object:
logObjectProperties({
    make: "Ferrari",
    model: "SF90 Stradale",
    year: 2019,
    color: "Red"
});
export {};
//Now this function is telling each piece of information stored about the car.
