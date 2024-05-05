Task159: The "switch" statement :

A switch statement can replace multiple if checks.
It gives a more descriptive way to compare a value with multiple variants.
The syntax :
The switch has one or more case blocks and an optional default.

It looks like this:

switch(x) {
  case 'value1':  // if (x === 'value1')
    ...
    [break]

  case 'value2':  // if (x === 'value2')
    ...
    [break]

  default:
    ...
    [break]
}

    The value of x is checked for a strict equality to the value from the first case (that is, value1) then to the 
    second (value2) and so on.
    If the equality is found, switch starts to execute the code starting from the corresponding case, 
    until the nearest break (or until the end of switch).
    If no case is matched then the default code is executed (if it exists).

Grouping of “case” :

Several variants of case which share the same code can be grouped.
The ability to “group” cases is a side effect of how switch/case works without break.

Type matters :

Let’s emphasize that the equality check is always strict. The values must be of the same type to match.