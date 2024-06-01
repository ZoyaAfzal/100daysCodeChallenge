//Question 113: Write a function that checks if a Map contains a key for "Canada" and logs the capital if it exists.

//Assuming Countries from Q112:
const countries = new Map<string, string>();
countries.set("USA", "Washington, D.C.");
//Added USA to the Map

countries.set("France", "Pris");
//Added France to the Map

countries.set("Japan", "Tokyo");
//Added Japan to the Map

countries.set("Germany", "Berlin");
//Added Germany to the Map

//Question 113:

//This function will check for "Canada" in the Map and log it's Capital:
function capitalOfCanada(countries:Map<string, string>): void {
    if(countries.has("Canada")){
        console.log(`The Capital of Canada is ${countries.get("Canada")}`);
    } else {
        console.log("Canada is not in the Map");
    }
}
//Assuming Countries Map from Q112:
capitalOfCanada(countries);
//It will check if Canada is in our Map and logs the capital if it exists.
