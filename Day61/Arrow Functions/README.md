Day-61 Task: Arrow functions, the basics :

There’s another very simple and concise syntax for creating functions, that’s often better than Function Expressions. It’s called “arrow functions”, because it looks like this:

let func = (arg1, arg2, ..., argN) => expression;

This creates a function func that accepts arguments arg1..argN, then evaluates the expression on the right side with their use and returns its result.
In other words, it’s the shorter version of:

let func = function(arg1, arg2, ..., argN) {
  return expression;
};

If we have only one argument, then parentheses around parameters can be omitted, making that even shorter.

For example:

let double = n => n * 2;
// roughly the same as: let double = function(n) { return n * 2 }

alert( double(3) ); // 6If there are no arguments, parentheses are empty, but they must be present:

    let sayHi = () => alert("Hello!");

    sayHi();

Arrow functions can be used in the same way as Function Expressions.
Arrow functions may appear unfamiliar and not very readable at first, but that quickly changes as the eyes get used to the structure. They are very convenient for simple one-line actions, when we’re just too lazy to write many words.

Multiline arrow functions :
Sometimes we need a more complex function, with multiple expressions and statements. In that case, we can enclose them in curly braces. The major difference is that curly braces require a return within them to return a value (just like a regular function does).

