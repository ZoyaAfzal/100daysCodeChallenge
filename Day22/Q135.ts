//Question 135: Explain how you can format a JSON string with proper indentation for readability.

//Reusing the 'person' object from Question 133:
const person = {
    name: "Charles",
    age: 25,
    city: "Austin"
};
//Converting the object into a JSON string with identation:
const jsonString = JSON.stringify(person, null, 2);
//The '2' specifies the number of spaces to use as white space.

//Logging the json string:
console.log(jsonString);
/*Output: 
{
    "name": "Charles",
    "age": 25,
    "city": "Austin"
}; */

// Shows how adding indentation to the JSON string makes it easier to read.


