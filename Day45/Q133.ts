//Question 133: Take a JSON string and parse it into a JavaScript object.

//Defining a JavaScript Object:
const person = {
    name: "Charles",
    age: 25,
    city: "Austin"
};
//Converting the object into a JSON string:
const jsonString = JSON.stringify(person);
//Outputs:{"name":"Charles","age":25,"city":"Austin"}


//Logging the json string:
console.log(jsonString);

//Demonstrated converting an object to a JSON string, making it easy to store or transmit.