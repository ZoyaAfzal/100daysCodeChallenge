/*Question 54: Making Flexible Object Keys: Learn how to set up a list where you can change the name of each section
based on what you need at that moment, like adjusting labels based on user choices.*/
function createObjectWithDynamicKey(key, value) {
    var dynamicObject = {};
    // Setting up a section in the list with a changeable name
    dynamicObject[key] = value;
    return dynamicObject;
}
;
//Using the flexible list setup for a user's preference
var userPreference = createObjectWithDynamicKey("theme", "night owl");
//showing the user's choice
console.log(userPreference);
