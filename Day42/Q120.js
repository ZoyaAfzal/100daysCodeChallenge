//Question 120: Use a for...of loop to iterate through an array of your favorite movies and log each one.
//Defining an array of favorite movies
const favoriteMovies = [
    "Extraction2",
    "Mission Impossible-Dead Reckoning PartOne",
    "Madame Web",
    "Money Heist",
    "NoWhere",
    "Manifest"
];
//Using a for...of loop to iterate through favorite movies:
for (const movie of favoriteMovies) {
    console.log(movie); //It will log each movie name
}
;
export {};
//Each movie in the array is logged to the console, once at a time.
