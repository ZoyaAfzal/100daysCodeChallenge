//Question 110: Create a function that assigns a grade (A, B, C, D, F) based on a student's score.

//This function assigns grades to students based on their scores:
function assignGrade(score:number): string {
    if(score >= 90){
        return "A";
    } else if (score >= 80){
        return "B";
    } else if(score >= 70){
        return "C";
    } else if (score >= 60){
        return "D";
    } else {
        return "F";
    }
};
//logging the grades:
console.log(assignGrade(90));
console.log(assignGrade(82));
console.log(assignGrade(75));
console.log(assignGrade(60));
console.log(assignGrade(55));

//This function will help students to find their grades based on their scores.