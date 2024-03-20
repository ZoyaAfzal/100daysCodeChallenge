//Question 57: Find the Average Grade: Given a list of grades, calculate the average grade.

//A list of grades:
let grades: number[] =[42, 39, 81, 65, 22, 13, 78, 52, 93];

//Calculating the average grade:
let averageGrade = grades.reduce((total, grade) => total + grade, 0) / grades.length;

//Showing the average grade:
console.log(averageGrade);
