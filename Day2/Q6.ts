/*Question 3: Stripping Names: Store a person’s name, and include some whitespace characters at the beginning
 and end of the name. Use "\t" (tab) and "\n" (new line) at least once. Print the name once, so the whitespace 
 around the name is displayed. Then print the name after stripping the white spaces.*/


let name: string = "\t\n Zoya \t\n"; // This saves the name with whitespace

console.log(name); // Shows the name with whitespace
console.log(name.trim()); // Shows the name without whitespace
