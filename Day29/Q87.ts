//Question 87: Extracting a Substring: Demonstrate how to extract the first 10 characters from a string.

//This function takes out the first 10 characters of any text:
function extractingFirstTenChars(str:string):string {
    return str.substring(0, 10);
    //It will get characters from start to index 10.
}
//Example:Taking out the first 10 characters of a sentence:
console.log(extractingFirstTenChars("Hello, JavaScript World!"));
//It will show the first ten characters.
//It will give us a smaller piece of the original text, just the begining part.

