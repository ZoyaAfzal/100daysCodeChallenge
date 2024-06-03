"use strict";
/*Question 52: Make a Smartphone Object: Create a simple way to keep track of a smartphone's details.
Include its brand, model, and other key features like how much storage it has, the size of its screen, and
how long its battery lasts.*/
let smartPhone = {
    make: "HUAWEI",
    model: "P3O Pro",
    specs: {
        display: {
            screenSize: "6.47 inches",
            resolution: "FHD+ 2340*1080",
            colors: ["Mystic Blue", "Misty Lavender", "Amber Sunrise", "Breathing Crystal", "PearlWhite", "Aurora"],
        },
        storage: "128GB",
        batteryCapacity: "4200mAh",
    },
};
console.log(smartPhone);
