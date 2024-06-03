/*Question 62-Making a Student Template: Create a blueprint for student information, including their name, age, 
and the class thay're talking, and then fill in the blueprint with an example student.*/

//Creating a blueprint (interface) for student information:

interface Student {
    firstName: string
    lastName: string;
    age: number;
    grade: number;
    section: string;
    studentIdNumber: number;
    courses: string[];

}
//Filling in the blueprint with an example student:
let studentInfo: Student = {
    firstName: "Mona",
    lastName: "Lisa",
    age: 16,
    grade: 10,
    section: "A",
    studentIdNumber: 1112,
    courses: ["Physics", "Chemistry" , "Biology" , "Mathematics"],

};
//Showing t(he student's information:
console.log(studentInfo);

