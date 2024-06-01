//Question 114: Iterate over a Map of student IDs and names, and log each pair to the console.
//Creating a Map to store students IDs(keys) and names(values):
const students = new Map();
students.set(1, "Alice");
students.set(2, "Bob");
students.set(3, "Charlie");
//Iterating over the Map and logs each student ID and name:
students.forEach((name, id) => {
    console.log(`Student ID: ${id}, Name:${name}`);
});
export {};
//This loop goes through each student and logs their Id and Name.
