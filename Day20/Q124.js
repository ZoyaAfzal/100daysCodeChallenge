//Question 124: Create a function inside an object that returns the object's own name property using the this keyword.
//Defining an object with a name property and a method to return it's name:
const person = {
    name: "Steven",
    getName: function () {
        return this.name;
        //Used 'this' to refer to the object itself and return its 'name' property
    },
};
console.log(person.getName());
export {};
//This method correctly identifies and return the object's 'name' property using 'this'.
