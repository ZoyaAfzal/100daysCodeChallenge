//Question 111: Use an if-else-if chain to categorize a person's age group (child, teenager, adult).

//This function categorizes a person's age group:
function categorizeAge(age:number): string {
    if(age < 13){
        return "child";
    } else if (age <= 19){
        return "teenager";
    } else {
        return "adult";
    }
};
console.log(categorizeAge(10));
console.log(categorizeAge(18));
console.log(categorizeAge(20));

// Based on the age provided, we log the corresponding age group.
