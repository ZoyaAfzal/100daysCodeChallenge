"use strict";
//Question 58: Average Score Calculator: Write a simple program that can take lots of scores and find their average.
//This program calculates the average of all scores given
function averageScore(...scores) {
    //Add all scores together and divides by the number of scores
    let total = scores.reduce((sum, score) => sum + score, 0);
    return total / scores.length;
}
//Example:finding the average of four scores
console.log(averageScore(70, 100, 90, 80));
//Showing the average score
