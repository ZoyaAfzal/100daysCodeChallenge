Task156: Basic Operators, Maths :

We know many operators from school. They are things like addition +, multiplication *, subtraction -, and so on.
We’ll start with simple operators, then concentrate on JavaScript-specific aspects, not covered by school arithmetic.

Terms: “operand”, "unary", "binary" :

Operand:

  An operand – is what operators are applied to. For instance, in the multiplication of 5 * 2 there are two operands: the left operand is 5 and the right operand is 2.Sometimes, people call these “arguments” instead of “operands”.
  
Unary:

An operator is unary if it has a single operand. For example, the unary negation - reverses the sign of a number.
Binary:
An operator is binary if it has two operands. The same minus exists in binary form as well.

Maths :

The following math operations are supported:

    Addition +,
    Subtraction -,
    Multiplication *,
    Division /,
    Remainder %,
    Exponentiation **.

The first four are straightforward, while % and ** need a few words about them.

Remainder % :

The remainder operator %, despite its appearance, is not related to percents.
The result of a % b is the remainder of the integer division of a by b.

Exponentiation ** :

The exponentiation operator a ** b raises a to the power of b.
Just like in maths, the exponentiation operator is defined for non-integer numbers as well.

String concatenation with binary + :

Let’s meet the features of JavaScript operators that are beyond school arithmetics.
Usually, the plus operator + sums numbers.

But, if the binary + is applied to strings, it merges (concatenates) them:
Note that if any of the operands is a string, then the other one is converted to a string too.
The binary + is the only operator that supports strings in such a way. Other arithmetic operators work only with numbers and always convert their operands to numbers.

Numeric conversion, unary + :

The plus + exists in two forms: the binary form that we used above and the unary form.
The unary plus or, in other words, the plus operator + applied to a single value, doesn’t do anything to numbers. But if the operand is not a number, the unary plus converts it into a number.
iIf we are getting values from HTML form fields, they are usually strings. What if we want to sum them?
The binary plus would add them as strings. If we want to treat them as numbers, we need to convert and then sum them.

Operator precedence :

If an expression has more than one operator, the execution order is defined by their precedence, or, in other words, the default priority order of operators.
From school, we all know that the multiplication in the expression 1 + 2 * 2 should be calculated before the addition. That’s exactly the precedence thing. The multiplication is said to have a higher precedence than the addition.
Parentheses override any precedence, so if we’re not satisfied with the default order, we can use them to change it. For example, write (1 + 2) * 2.
There are many operators in JavaScript. Every operator has a corresponding precedence number. The one with the larger number executes first. If the precedence is the same, the execution order is from left to right.

Here’s an extract from the precedence table (you don’t need to remember this, but note that unary operators are higher than corresponding binary ones):
Precedence 	Name 	Sign
… 	… 	…
14 	unary plus 	+
14 	unary negation 	-
13 	exponentiation 	**
12 	multiplication 	*
12 	division 	/
11 	addition 	+
11 	subtraction 	-
… 	… 	…
2 	assignment 	=
… 	… 	…


Assignment :

Let’s note that an assignment = is also an operator. It is listed in the precedence table with the very low priority of 2.That’s why, when we assign a variable, like x = 2 * 2 + 1, the calculations are done first and then the = is evaluated, storing the result in x.

Assignment = returns a value :
The fact of = being an operator, not a “magical” language construct has an interesting implication. All operators in JavaScript return a value. That’s obvious for + and -, but also true for =.
The call x = value writes the value into x and then returns it.

Chaining assignments :

Another interesting feature is the ability to chain assignments:
Chained assignments evaluate from right to left. First, the rightmost expression 2 + 2 is evaluated and then assigned to the variables on the left: c, b and a. At the end, all the variables share a single value.

Modify-in-place :

We often need to apply an operator to a variable and store the new result in that same variable.
This notation can be shortened using the operators += and *=.
Short “modify-and-assign” operators exist for all arithmetical and bitwise operators: /=, -=, etc.
Such operators have the same precedence as a normal assignment, so they run after most other calculations:

Increment/decrement :
Increasing or decreasing a number by one is among the most common numerical operations.
So, there are special operators for it:

Increment ++ increases a variable by 1:
Decrement -- decreases a variable by 1:
 The operators ++ and -- can be placed either before or after a variable.

Postfix: When the operator goes after the variable, it is in “postfix form”: counter++.
Prefix: The “prefix form” is when the operator goes before the variable: ++counter.

Both of these statements do the same thing: increase counter by 1.
The prefix form returns the new value while the postfix form returns the old value (prior to increment/decrement).

Increment/decrement among other operators :

The operators ++/-- can be used inside expressions as well. Their precedence is higher than most other arithmetical operations.

Bitwise operators :

Bitwise operators treat arguments as 32-bit integer numbers and work on the level of their binary representation.These operators are not JavaScript-specific. They are supported in most programming languages.
The list of operators:

    AND ( & )
    OR ( | )
    XOR ( ^ )
    NOT ( ~ )
    LEFT SHIFT ( << )
    RIGHT SHIFT ( >> )
    ZERO-FILL RIGHT SHIFT ( >>> )

These operators are used very rarely, when we need to fiddle with numbers on the very lowest (bitwise) level. 
We won’t need these operators any time soon, as web development has little use of them, but in some special areas, such as cryptography, they are useful.

Comma :

The comma operator , is one of the rarest and most unusual operators. Sometimes, it’s used to write shorter code, so we need to know it in order to understand what’s going on.
The comma operator allows us to evaluate several expressions, dividing them with a comma ,. Each of them is evaluated but only the result of the last one is returned.
