Task155: 
◾ <Data Types In JavaScript> ◾ 
A value in JavaScript is always of a certain type. For example, a string or a number. There are eight basic data types in JavaScript.

◼ Number :
The number type represents both integer and floating point numbers.
let n = 123;
n = 12.345;
There are many operations for numbers, e.g. multiplication *, division /, addition +, subtraction -, and so on.
Besides regular numbers, there are so-called “special numeric values” which also belong to this data type: Infinity, -Infinity and NaN.
Infinity represents the mathematical Infinity ∞. It is a special value that’s greater than any number.
We can get it as a result of division by zero:
alert( 1 / 0 ); // Infinity
Or just reference it directly:
alert( Infinity ); // Infinity

◼ String :
A string in JavaScript must be surrounded by quotes.
In JavaScript, there are 3 types of quotes.
 ◽ Double quotes: "Hello".
 ◽ Single quotes: 'Hello'.
 ◽ Backticks: `Hello`.
Double and single quotes are “simple” quotes. Backticks are “extended functionality” quotes. They allow us to embed variables and expressions into a string by wrapping them in ${…}.

◼ Boolean (logical type)
The boolean type has only two values: true and false.
This type is commonly used to store yes/no values: true means “yes, correct”, and false means “no, incorrect”. 

◼ BigInt:
In JavaScript, the “number” type cannot safely represent integer values larger than (253-1) (that’s 9007199254740991)  or less than -(253-1) for negatives. All odd integers greater than (253-1) can’t be stored at all in the “number” type. A BigInt value is created by appending n to the end of an integer.const bigInt = 1234567890123456789012345678901234567890n;

◼ The “null” value :
In JavaScript, null is not a “reference to a non-existing object” or a “null pointer” like in some other languages. It’s just a special value which represents “nothing”, “empty” or “value unknown”.

◼ The “undefined” value :
This special value makes a type of its own, just like null. The meaning of undefined is “value is not assigned”.
If a variable is declared, but not assigned, then its value is undefined.

◼ Objects and Symbols :
The object type is special. All other types are called “primitive” because their values can contain only a single thing (be it a string or a number or whatever). 
◻ In contrast, objects are used to store collections of data and more complex entities.
◻ The symbol type is used to create unique identifiers for objects.

◼ The typeof operator :
The typeof operator returns the type of the operand. It’s useful when we want to process values of different types differently or just want to do a quick check.
The typeof(x) syntax
You may also come across another syntax: typeof(x). It’s the same as typeof x. To put it clear: typeof is an operator, not a function. The parentheses here aren’t a part of typeof. 



[Data Types in JavaScript]:
(https://lnkd.in/dn9XQ-Ys)
