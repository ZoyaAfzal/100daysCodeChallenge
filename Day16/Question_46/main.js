"use strict";
/*Question 46: Enhanced Laptop Object: Construct an object for a laptop including properties make, model, year,
and a method describe() that logs a sentence about the laptop.*/
let laptop = {
    make: "Dell",
    model: "XPS_16",
    year: 2024,
    describe: function () {
        console.log(`${this.make} model ${this.model} has recently released on February 20,${this.year}`);
    }
};
laptop.describe();
