//Question 57: Find the Average Grade: Given a list of grades, calculate the average grade.
//A list of grades:
var grades = [42, 39, 81, 65, 22, 13, 78, 52, 93];
//Calculating the average grade:
var averageGrade = grades.reduce(function (total, grade) { return total + grade; }, 0) / grades.length;
//Showing the average grade:
console.log(averageGrade);
