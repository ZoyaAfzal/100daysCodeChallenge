Task160 : "Functions" :

Quite often we need to perform a similar action in many places of the script.
Functions are the main “building blocks” of the program. They allow the code to be called many times without repetition.

Function Declaration :

To create a function we can use a function declaration.
It looks like this:

function showMessage() {
  alert( 'Hello everyone!' );
}

The function keyword goes first, then goes the name of the function, then a list of parameters between the parentheses and finally the code of the function, 
also named “the function body”, between curly braces.

function name(parameter1, parameter2, ... parameterN) {
 // body
}

Local variables :
A variable declared inside a function is only visible inside that function.

Outer variables :
A function can access an outer variable as well.
The function has full access to the outer variable. It can modify it as well.

The outer variable is only used if there’s no local one.
If a same-named variable is declared inside the function then it shadows the outer one.


Global variables :

Variables declared outside of any function, such as the outer userName in the code above, are called global.
Global variables are visible from any function (unless shadowed by locals).
It’s a good practice to minimize the use of global variables. Modern code has few or no globals. Most variables 
reside in their functions. Sometimes though, they can be useful to store project-level data.

Parameters :

A parameter is the variable listed inside the parentheses in the function declaration (it’s a declaration time term).
When a value is passed as a function parameter, it’s also called an argument.
An argument is the value that is passed to the function when it is called (it’s a call time term).
We can pass arbitrary data to functions using parameters.
If the function has two parameters and the function is called , the given values are copied to local 
variables from and text. Then the function uses them.
We declare functions listing their parameters, then call them passing arguments.

Default values :

If a function is called, but an argument is not provided, then the corresponding value becomes undefined.
For instance, the aforementioned function showMessage(from, text) can be called with a single argument:

showMessage("Ann");

That’s not an error. Such a call would output "*Ann*: undefined". As the value for text isn’t passed, it becomes undefined.
We can specify the so-called “default” (to use if omitted) value for a parameter in the function declaration, using =:

Evaluation of default parameters :

In JavaScript, a default parameter is evaluated every time the function is called without the respective parameter.

Default parameters in old JavaScript code :

Several years ago, JavaScript didn’t support the syntax for default parameters. So people used other ways to specify 
them. Nowadays, we can come across them in old scripts.

For example, an explicit check for undefined:

function showMessage(from, text) {
  if (text === undefined) {
    text = 'no text given';
  }

  alert( from + ": " + text );
}

…Or using the || operator:

function showMessage(from, text) {
  // If the value of text is falsy, assign the default value
  // this assumes that text == "" is the same as no text at all
  text = text || 'no text given';
  ...
}

Alternative default parameters :

Sometimes it makes sense to assign default values for parameters at a later stage after the function declaration.
We can check if the parameter is passed during the function execution, by comparing it with undefined …Or we could use the || operator.
Modern JavaScript engines support the nullish coalescing operator ??, it’s better when most falsy values, such as 0, should be considered “normal”.

Returning a value :

A function can return a value back into the calling code as the result.
The directive return can be in any place of the function. When the execution reaches it, the function stops, and the value is returned to the calling code (assigned to result above).
There may be many occurrences of return in a single function.
It is possible to use return without a value. That causes the function to exit immediately.

A function with an empty return or without it returns undefined :

If a function does not return a value, it is the same as if it returns undefined.

Never add a newline between return and the value :

For a long expression in return, it might be tempting to put it on a separate line, like this:

return
 (some + long + expression + or + whatever * f(a) + f(b))

That doesn’t work, because JavaScript assumes a semicolon after return. That’ll work the same as:

return;
 (some + long + expression + or + whatever * f(a) + f(b))

So, it effectively becomes an empty return.

If we want the returned expression to wrap across multiple lines, we should start it at the same line as return. Or at least put the opening parentheses there as follows:

return (
  some + long + expression
  + or +
  whatever * f(a) + f(b)
  )

And it will work just as we expect it to .


Naming a function :

Functions are actions. So their name is usually a verb. It should be brief, as accurate as possible and describe what the function does, so that someone reading the code gets an indication of what the function does.
It is a widespread practice to start a function with a verbal prefix which vaguely describes the action. 
There must be an agreement within the team on the meaning of the prefixes.
For instance, functions that start with "show" usually show something.
Examples of such names:

showMessage(..)     // shows a message
getAge(..)          // returns the age (gets it somehow)
calcSum(..)         // calculates a sum and returns the result
createForm(..)      // creates a form (and usually returns it)
checkPermission(..) // checks a permission, returns true/false

With prefixes in place, a glance at a function name gives an understanding what kind of work it does and what kind of value it returns.


One function – one action :

A function should do exactly what is suggested by its name, no more.
Two independent actions usually deserve two functions, even if they are usually called together (in that case we can make a 3rd function that calls those two).
A few examples of breaking this rule:

    getAge – would be bad if it shows an alert with the age (should only get).
    createForm – would be bad if it modifies the document, adding a form to it (should only create it and return).
    checkPermission – would be bad if it displays the access granted/denied message (should only perform the check and return the result).

Ultrashort function names :

Functions that are used very often sometimes have ultrashort names.
For example, the jQuery framework defines a function with $. The Lodash library has its core function named _.
These are exceptions. Generally function names should be concise and descriptive.

Functions == Comments :

Functions should be short and do exactly one thing. If that thing is big, maybe it’s worth it to split the function into a few smaller functions. Sometimes following this rule may not be that easy, but it’s definitely a good thing.
A separate function is not only easier to test and debug – its very existence is a great comment!
Functions can be created even if we don’t intend to reuse them. They structure the code and make it readable.