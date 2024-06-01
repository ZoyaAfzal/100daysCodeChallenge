//Question 92: Write a function to remove the last element from an array and return the removed element.

//This function removes the last element from an array and returns it:
function removeLastElement<T>(arr:T[]):T | undefined {
    return arr.pop();
    //It will remove and return the last element of an array
}

//Example: Removing the last fruit from an array:
const fruits:string[] = ["RaspBerries", "Oranges", "Coconuts"];
console.log(removeLastElement(fruits));
console.log(fruits);

//Here, we picked out a last fruit and showed the updated fruits list.