/*Question 84: Replacing Text in a String: Write a function that takes a sentence and replaces all instances of the
word "JavaScript" with "TypeScript".*/
//This function replaces "Javascript" with "Typescript" in a sentence:
function replaceJavaScriptWithTypeScript(sentence) {
    return sentence.replace(/JavaScript/g, "TypeScript");
    //Used a regular expression with the 'g' flag for a global replacement
}
//Example:Changing a programnming language name in a sentence:
console.log(replaceJavaScriptWithTypeScript("I love JavaScript and JavaScript is my favourite programming language..."));
export {};
//Every "Javascript" in the sentence will replace by "Typescript".
