//Question 93: Find the index of "Banana" in an array of fruits and replace it with "Mango".
//This function will find "Banana" in the fruits array and replace it with "Mango":
function replaceBananaWithMango(fruits) {
    const index = fruits.indexOf("Banana");
    //finding the index of "Banana".
    if (index !== -1)
        fruits[index] = "Mango";
    //It will replace "Banana" with "Mango", if found.
}
//Example: Replacing "Banana" in the fruits list:
const fruits = ["Apple", "Mango", "Cherry"];
replaceBananaWithMango(fruits);
console.log(fruits);
export {};
//We have swapped "Banana" for "Mango" in our fruits list.
