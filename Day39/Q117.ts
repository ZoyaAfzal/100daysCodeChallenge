/*Question 117: Implement a switch statement that evaluates an expression and uses the default case if none of the 
cases match.*/

//This function evaluates a grade and logs the corresponding remark:
function evaluateGrade(grade:string): void {
    switch(grade){
        case "A":
            console.log("Excellent");
            break;
        case "B":
            console.log("Good");
            break;
        case "C":
            console.log("Fair");
            break;
        case "D":
            console.log("Poor");
            break;
        default:
            console.log("Invalid Grade!");
            break;
            }
};
evaluateGrade("A");
evaluateGrade("C");
//Used a Switch Statement to evaluate the grade and defaults to "Invalid Grade!" if no match is found.