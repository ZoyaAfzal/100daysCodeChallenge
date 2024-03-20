//Question 56: Keep Only Strings: Given a mix of different types of items, make a new list that has only the words.
//A mixed collection of items
var mixedItemsArray = [1, "Tennis", 2, "Golf", 3, "Baseball", true];
//Picking out only the words
var stringArray = mixedItemsArray.filter(function (item) { return typeof item === "string"; });
//Showing the list of only words
console.log(stringArray);
