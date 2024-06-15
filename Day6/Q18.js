/*Question-18: Seeing the World: Think of at least five places in the world you’d like to visit.
//• Store the locations in a array. Make sure the array is not in alphabetical order.*/
let favPlacesArr = ["Maldives Island", "Eiffel Tower", "Niagara Falls", "Iceland", "DisneyLand"];
//• Print your array in its original order.
console.log("Original Order:");
console.log(favPlacesArr);
//• Print your array in alphabetical order without modifying the actual list.
console.log("Alphabetical Order:");
console.log([...favPlacesArr].sort());
//• Show that your array is still in its original order by printing it.
console.log("Still in Original Order:");
console.log(favPlacesArr);
//• Print your array in reverse alphabetical order without changing the order of the original list.
console.log("Reverse Alphabetical Order:");
console.log([...favPlacesArr].sort().reverse());
//• Show that your array is still in its original order by printing it again.
console.log("Still in Original Order:");
console.log(favPlacesArr);
//• Reverse the order of your list. Print the array to show that its order has changed.
favPlacesArr.reverse();
console.log("Reversed Order:");
console.log(favPlacesArr);
//• Reverse the order of your list again. Print the list to show it’s back to its original order.
favPlacesArr.reverse();
console.log("Back to Original Order:");
console.log(favPlacesArr);
//• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
favPlacesArr.sort();
console.log("Sorted in Alphabetical Order");
console.log(favPlacesArr);
//• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
favPlacesArr.sort((a, b) => b.localeCompare('a'));
console.log("Stored in Reversed Alphabetical Order:");
console.log(favPlacesArr);
export {};
