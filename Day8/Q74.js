/*Question 74: Swapping Variables: Demonstrate how to swap the values of two variables. Start with variables a = 5
and b = 10, then swap their values so that a becomes 10 and b becomes 5.*/
//This function swaps the values of two variables:
function swapValues() {
    var a = 5;
    //Initially a is 5
    var b = 10;
    //Initially b is 10
    console.log("Before Swap: a =", a, ", b =", b);
    var tempVariable = a;
    //Temprarily storing the value of a in temp variable
    a = b;
    //Setting a to b's value
    b = tempVariable;
    //Setting b to a's original value stored in temp
    console.log("After Swap: a =", a, ", b =", b);
    //logging the swapped values
}
swapValues();
//We used a temporary variable to hold one value while we swapped them, like a Magic Trick!
