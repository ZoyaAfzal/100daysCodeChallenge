Task157: Conditional branching: if, '?'
Sometimes, we need to perform different actions based on different conditions.
To do that, we can use the if statement and the conditional operator ?, that’s also called a “question mark” operator.

The “if” statement :

The if(...) statement evaluates a condition in parentheses and, if the result is true, executes a block of code.
If we want to execute more than one statement, we have to wrap our code block inside curly braces.
We recommend wrapping your code block with curly braces {} every time you use an if statement, even if there is only one statement to execute.

Boolean conversion :

The if (…) statement evaluates the expression in its parentheses and converts the result to a boolean.
Let’s recall the conversion rules from the chapter Type Conversions.

    A number 0, an empty string "", null, undefined, and NaN all become false. Because of that they are called “falsy” values.
    Other values become true, so they are called “truthy”.

The “else” clause :

The if statement may contain an optional else block. It executes when the condition is falsy.

Several conditions: “else if” :
Sometimes, we’d like to test several variants of a condition. The else if clause lets us do that.
There can be more else if blocks. The final else is optional.

Conditional operator ‘?’ :

Sometimes, we need to assign a variable depending on a condition.
The so-called “conditional” or “question mark” operator lets us do that in a shorter and simpler way.
The operator is represented by a question mark ?. Sometimes it’s called “ternary”, because the operator has three operands. It is actually the one and only operator in JavaScript which has that many.
The syntax is:

let result = condition ? value1 : value2;

The condition is evaluated: if it’s truthy then value1 is returned, otherwise – value2.
Technically, we can omit the parentheses around age > 18. The question mark operator has a low precedence, so it executes after the comparison >. But parentheses make the code more readable, so we recommend using them.

Multiple ‘?’ :

A sequence of question mark operators ? can return a value that depends on more than one condition.

Non-traditional use of ‘?’ :

Sometimes the question mark ? is used as a replacement for if.
It’s not recommended to use the question mark operator in this way.
The notation is shorter than the equivalent if statement, which appeals to some programmers. But it is less readable.
The purpose of the question mark operator ? is to return one value or another depending on its condition. Please use it for exactly that. Use if when you need to execute different branches of code.

