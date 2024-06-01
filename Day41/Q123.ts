//Question 123: Create a loop that iterates through a string and stops when it finds the first vowel.

//This function iterates through a string and logs each character until it finds a vowel:
function logUntilVowel(str: string): void {
    const vowels = "aeiouAeiou";
    for(const char of str){
        if(vowels.includes(char)){
            console.log(`First Vowel Found: ${char}`);
            break; // Will stop the loop at the first vowel found
        }
        console.log(char); //Logging each character until a vowel is encountered
    }
};
logUntilVowel("syzigy");//Will log 's', 'y', 'z' and then 'First vowel found: 'i'
//Demonstrating iteration through a string and stopping at the first vowel.
