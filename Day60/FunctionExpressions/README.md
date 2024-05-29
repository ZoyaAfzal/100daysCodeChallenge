Function expressions in JavaScript:

In JavaScript, a function is not a “magical language structure”, but a special kind of value.
There is another syntax for creating a function that is called a Function Expression.
It allows us to create a new function in the middle of any expression.
For example:

let sayHi = function() {
  alert( "Hello" );
};
As the function creation happens in the context of the assignment expression (to the right side of =), this is a Function Expression.
Please note, there’s no name after the function keyword. Omitting a name is allowed for Function Expressions.

Function is a value: 
Let’s reiterate: no matter how the function is created, a function is a value. An example above store a function in the sayHi variable.

We can even print out that value using alert:

function sayHi() {
  alert( "Hello" );
}

alert( sayHi ); // shows the function code

Please note that the last line does not run the function, because there are no parentheses after sayHi. There are programming languages where any mention of a function name causes its execution, but JavaScript is not like that.
Surely, a function is a special value, in the sense that we can call it like sayHi().
But it’s still a value. So we can work with it like with other kinds of values.

Why is there a semicolon at the end???
You might wonder, why do Function Expressions have a semicolon ; at the end, but Function Declarations do not:

function sayHi() {
  // ...
}

let sayHi = function() {
  // ...
};

The answer is simple: a Function Expression is created here as function(…) {…} inside the assignment statement: let sayHi = …;. The semicolon ; is recommended at the end of the statement, it’s not a part of the function syntax.
The semicolon would be there for a simpler assignment, such as let sayHi = 5;, and it’s also there for a function assignment.

Callback functions :
Let’s look at more examples of passing functions as values and using function expressions.
We’ll write a function ask(question, yes, no) with three parameters:

question
    Text of the question
yes
    Function to run if the answer is “Yes”
no
    Function to run if the answer is “No”

The function should ask the question and, depending on the user’s answer, call yes() or no():Function 

Expression vs Function Declaration :
Let’s formulate the key differences between Function Declarations and Expressions.
First, the syntax: how to differentiate between them in the code.

Function Declaration: a function, declared as a separate statement, in the main code flow:

// Function Declaration
function sum(a, b) {
  return a + b;
}

Function Expression: a function, created inside an expression or inside another syntax construct. Here, the function is created on the right side of the “assignment expression” =:

// Function Expression
let sum = function(a, b) {
  return a + b;

};

A Function Expression is created when the execution reaches it and is usable only from that moment.
Once the execution flow passes to the right side of the assignment let sum = function… – here we go, the function is created and can be used (assigned, called, etc. ) from now on.

Function Declarations are different.
A Function Declaration can be called earlier than it is defined.
For example, a global Function Declaration is visible in the whole script, no matter where it is.
That’s due to internal algorithms. When JavaScript prepares to run the script, it first looks for global Function Declarations in it and creates the functions. We can think of it as an “initialization stage”.
And after all Function Declarations are processed, the code is executed. So it has access to these functions.

For example, this works:For example, this works:

sayHi("John"); // Hello, John

function sayHi(name) {
  alert( `Hello, ${name}` );
}

The Function Declaration sayHi is created when JavaScript is preparing to start the script and is visible everywhere in it.

…If it were a Function Expression, then it wouldn’t work:

sayHi("John"); // error!

let sayHi = function(name) {  // (*) no magic any more
  alert( `Hello, ${name}` );
};

Function Expressions are created when the execution reaches them. That would happen only in the line (*). Too late.

Another special feature of Function Declarations is their block scope.
In strict mode, when a Function Declaration is within a code block, it’s visible everywhere inside that block. But not outside of it.


When to choose Function Declaration versus Function Expression? :

As a rule of thumb, when we need to declare a function, the first thing to consider is Function Declaration syntax. It gives more freedom in how to organize our code, because we can call such functions before they are declared.

That’s also better for readability, as it’s easier to look up function f(…) {…} in the code than let f = function(…) {…};. Function Declarations are more “eye-catching”.

…But if a Function Declaration does not suit us for some reason, or we need a conditional declaration (we’ve just seen an example), then Function Expression should be used.








