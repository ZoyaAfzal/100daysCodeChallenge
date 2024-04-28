Task157: "Comparisons" :

We know many comparison operators from maths.
In JavaScript they are written like this:

    Greater/less than: a > b, a < b.
    Greater/less than or equals: a >= b, a <= b.
    Equals: a == b, please note the double equality sign == means the equality test, while a single one a = b means an assignment.
    Not equals: In maths the notation is ≠, but in JavaScript it’s written as a != b.

Boolean is the result :

All comparison operators return a boolean value:

    true – means “yes”, “correct” or “the truth”.
    false – means “no”, “wrong” or “not the truth”.

String comparison :

To see whether a string is greater than another, JavaScript uses the so-called “dictionary” or “lexicographical” order.
In other words, strings are compared letter-by-letter.

The algorithm to compare two strings is simple:

    Compare the first character of both strings.
    If the first character from the first string is greater (or less) than the other string’s, then the first string is greater (or less) than the second. We’re done.
    Otherwise, if both strings’ first characters are the same, compare the second characters the same way.
    Repeat until the end of either string.
    If both strings end at the same length, then they are equal. Otherwise, the longer string is greater.

Note: A capital letter "A" is not equal to the lowercase "a". Which one is greater? The lowercase "a". Why? 
Because the lowercase character has a greater index in the internal encoding table JavaScript uses (Unicode)

Comparison of different types :

When comparing values of different types, JavaScript converts the values to numbers.
For boolean values, true becomes 1 and false becomes 0.
It is possible that at the same time:

    Two values are equal.
    One of them is true as a boolean and the other one is false as a boolean.


Strict equality :

A strict equality operator === checks the equality without type conversion.
In other words, if a and b are of different types, then a === b immediately returns false without an attempt to convert them.
A regular equality check == has a problem. It cannot differentiate 0 from false.The same thing happens with an empty string.
This happens because operands of different types are converted to numbers by the equality operator ==. An empty string, just like false, becomes a zero.
There is also a “strict non-equality” operator !== analogous to !=.
The strict equality operator is a bit longer to write, but makes it obvious what’s going on and leaves less room for errors.

Comparison with null and undefined :

There’s a non-intuitive behavior when null or undefined are compared to other values.

For a strict equality check ===
These values are different, because each of them is a different type.

For a non-strict check ==
There’s a special rule. These two are a “sweet couple”: they equal each other (in the sense of ==), but not any other value.

For maths and other comparisons < > <= >=
null/undefined are converted to numbers: null becomes 0, while undefined becomes NaN.

Strange result: null vs 0 

Let’s compare null with a zero:
Mathematically, that’s strange. The "null is greater than or equal to zero", so in one of the comparisons above it must be true, but they are both false.
The reason is that an equality check == and comparisons > < >= <= work differently. Comparisons convert null to a number, treating it as 0.
Why does it dislike zero so much? Always false!
undefined gets converted to NaN and NaN is a special numeric value which returns false for all comparisons.
undefined only equals null, undefined, and no other value.

Avoid problems :

    Treat any comparison with undefined/null except the strict equality === with exceptional care.
    Don’t use comparisons >= > < <= with a variable which may be null/undefined, unless you’re really sure of what you’re doing. If a variable can have these values, check for them separately.
