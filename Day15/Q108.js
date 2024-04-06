//Question 108: Compare two strings to check if they are identical, ignoring case sensitivity.
//This function compares two strings, ignoring case senstivity:
function areStringEqualIgnoringCase(str1, str2) {
    //Converting both strings to lowercase before comparison:
    return str1.toLowerCase() === str2.toLowerCase();
}
;
console.log(areStringEqualIgnoringCase("hello", "Hello"));
console.log(areStringEqualIgnoringCase("world", "Word"));
console.log(areStringEqualIgnoringCase("hello", "HElLo"));
console.log(areStringEqualIgnoringCase("typescript", "Typscript"));
export {};
//We made both strings lowercase to ensure the comparison ignores case differences.
