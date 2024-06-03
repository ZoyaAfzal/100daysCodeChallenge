//Question 56: Keep Only Strings: Given a mix of different types of items, make a new list that has only the words.
//A mixed collection of items
let mixedItemsArray = [1, "Tennis", 2, "Golf", 3, "Baseball", true];
//Picking out only the words
let stringArray = mixedItemsArray.filter((item) => typeof item === "string");
//Showing the list of only words
console.log(stringArray);
export {};
