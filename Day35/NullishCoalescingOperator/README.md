Task158: Nullish coalescing operator '??' :

A recent addition :
This is a recent addition to the language. Old browsers may need polyfills.

The nullish coalescing operator is written as two question marks ??.
As it treats null and undefined similarly, we’ll use a special term here. For brevity, we’ll say that a value is “defined” when it’s neither null nor undefined.

The result of a ?? b is:

    if a is defined, then a,
    if a isn’t defined, then b.

In other words, ?? returns the first argument if it’s not null/undefined. Otherwise, the second one.
The nullish coalescing operator isn’t anything completely new. It’s just a nice syntax to get the first “defined” value of the two.

Comparison with || :

The OR || operator can be used in the same way as ?? .
For example, in the code above we could replace ?? with || and still get the same result.
Historically, the OR || operator was there first. It’s been there since the beginning of JavaScript, so developers were using it for such purposes for a long time.

On the other hand, the nullish coalescing operator ?? was added to JavaScript only recently, and the reason for that was that people weren’t quite happy with ||.

The important difference between them is that:

    || returns the first truthy value.
    ?? returns the first defined value.
In other words, || doesn’t distinguish between false, 0, an empty string "" and null/undefined. They are all the same – falsy values. If any of these is the first argument of ||, 
then we’ll get the second argument as the result.

Precedence of ?? :

The precedence of the ?? operator is the same as ||. They both equal 3 in the MDN table.
That means that, just like ||, the nullish coalescing operator ?? is evaluated before = and ?, but after most 
other operations, such as +, *.

Using ?? with && or || :

Due to safety reasons, JavaScript forbids using ?? together with && and || operators, unless the precedence is explicitly specified with parentheses.
The limitation is surely debatable, it was added to the language specification with the purpose to avoid programming mistakes, when people start to switch from || to ??. 

So we may need to add parentheses in expressions. Otherwise, if we omit parentheses, then as * has the higher precedence than ??, it would execute first, leading to incorrect results.

Using ?? with && or || :

Due to safety reasons, JavaScript forbids using ?? together with && and || operators, unless the precedence is explicitly specified with parentheses.
The limitation is surely debatable, it was added to the language specification with the purpose to avoid programming mistakes, when people start to switch from || to ??. 
