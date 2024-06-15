// Question-20: Think of something you could store in a array. 
//For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. 
//Write a program that creates a list containing these items.
let mountainsArr = [
    "Mount Everest",
    "K2",
    "Karakoram",
    "Lhotse",
    "Makalu",
    "Nanga Parbat",
    "Kangchenjunga",
    "Cho Oyu",
    "Manaslu",
    "Annapuirna"
];
//printing the list of mountains
console.log("List of Famous Mountains:");
mountainsArr.forEach((mountainsArr, index) => {
    console.log(`${index + 1}. ${mountainsArr}`);
});
export {};
