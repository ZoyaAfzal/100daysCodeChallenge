"use strict";
/*Question 48: Combining Arrays with Spread Operator: Suppose you're comparing prices of two different sets
of laptops. Use the spread operator to combine these arrays into a single array sorted in ascending order,
then log the result.*/
let pricesSet1 = [2055, 1675, 1195];
let pricesSet2 = [1945, 1505, 1435];
let combinedPrices = [...pricesSet1, ...pricesSet2].sort((a, b) => a - b);
console.log(combinedPrices);
