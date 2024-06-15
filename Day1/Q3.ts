//Question 3: Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.


let name: string = "Zoya"; // This saves the name

console.log(name.toLowerCase()); // Shows the name in all small letters
console.log(name.toUpperCase()); // Shows the name in ALL BIG LETTERS
console.log(name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()); 
//Show the name with first letter big and the other letters small