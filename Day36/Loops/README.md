Task 159- Loops: while and for

We often need to repeat actions.
Loops are a way to repeat the same code multiple times.
This article covers only basic loops: while, do..while and for(..;..;..).

The “while” loop :

The while loop has the following syntax:
while (condition) {
  // code
  // so-called "loop body"
}

While the condition is truthy, the code from the loop body is executed.

Iteration :
A single execution of the loop body is called an iteration.
If i++ was missing from the code, the loop would repeat (in theory) forever. In practice, the browser provides ways to stop such loops, and in server-side JavaScript, we can kill the process.

Any expression or variable can be a loop condition, not just comparisons: the condition is evaluated and converted to a boolean by while.
 
Curly braces are not required for a single-line body.
If the loop body has a single statement, we can omit the curly braces {…}.


The “do…while” loop :

The condition check can be moved below the loop body using the do..while syntax:
do {
  // loop body
} while (condition);

The loop will first execute the body, then check the condition, and, while it’s truthy, execute it again and again.
This form of syntax should only be used when you want the body of the loop to execute at least once regardless of the 
condition being truthy. Usually, the other form is preferred: while(…) {…}.

The “for” loop :

The for loop is more complex, but it’s also the most commonly used loop.
Syntax:
for (begin; condition; step) {
  // ... loop body ...
}
Let’s examine the for statement part-by-part :	
begin 	let i = 0 	Executes once upon entering the loop.
condition 	i < 3 	Checked before every loop iteration. If false, the loop stops.
body 	alert(i) 	Runs again and again while the condition is truthy.
step 	i++ 	Executes after the body on each iteration.

The general loop algorithm works like this:

Run begin
→ (if condition → run body and run step)
→ (if condition → run body and run step)
→ (if condition → run body and run step)
→ ...

That is, begin executes once, and then it iterates: after each condition test, body and step are executed.

Inline variable declaration :
Here, the “counter” variable declares right in the loop. This is called an “inline” variable declaration. 
Such variables are visible only inside the loop.

Skipping parts :

Any part of for can be skipped.
For example, we can omit begin if we don’t need to do anything at the loop start.
We can also remove the step part.
This makes the loop identical to while (i < 3).
We can actually remove everything, creating an infinite loop.
Note: Please note that the two for semicolons ; must be present. Otherwise, there would be a syntax error.

Breaking the loop :

Normally, a loop exits when its condition becomes falsy.
But we can force the exit at any time using the special break directive.
The combination “infinite loop + break as needed” is great for situations when a loop’s condition must be checked not in the beginning or end of the loop, but in the middle or even in several places of its body.

Continue to the next iteration :

The continue directive is a “lighter version” of break. It doesn’t stop the whole loop. Instead, it stops the 
current iteration and forces the loop to start a new one (if the condition allows).
We can use it if we’re done with the current iteration and would like to move on to the next one.

No break/continue to the right side of ‘?’ :

Please note that syntax constructs that are not expressions cannot be used with the ternary operator ?. 
In particular, directives such as break/continue aren’t allowed there.
For instance : 
For example, if we take this code:

if (i > 5) {
  alert(i);
} else {
  continue;
}
nd rewrite it using a question mark:
(i > 5) ? alert(i) : continue; // continue isn't allowed here

…it stops working: there’s a syntax error.

This is just another reason not to use the question mark operator ? instead of if.

Labels for break/continue :

Sometimes we need to break out from multiple nested loops at once.
The ordinary break after input would only break the inner loop. That’s not sufficient – labels, come to the rescue!
A label is an identifier with a colon before a loop:
labelName: for (...) {
  ...
}
We can also move the label onto a separate line:

outer:
for (let i = 0; i < 3; i++) { ... }

The continue directive can also be used with a label. In this case, code execution jumps to the next iteration of the labeled loop.

Labels do not allow to “jump” anywhere :

Labels do not allow us to jump into an arbitrary place in the code.
For example, it is impossible to do this:

break label; // jump to the label below (doesn't work)
label: for (...)

A break directive must be inside a code block. Technically, any labelled code block will do, e.g.:
label: {
  // ...
  break label; // works
  // ...
}

…Although, 99.9% of the time break is used inside loops, as we’ve seen in the examples.
A continue is only possible from inside a loop.

