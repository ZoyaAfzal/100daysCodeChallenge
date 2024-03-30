/*Question 80: Updating Object Properties: Add a property named color to the existing car object, and then update 
the year property to 2021. Show how to perform these operations.*/

//Starting with our car object:
let car:any = {
    make: "Ferrari",
    model: "SF90 Stradale",
    year: 2019,
};
//Adding a new property 'color' and updating 'year':
car.color = "Red";
//Added a new property color:

car.year =  2021;
//Updated the year property

//Showing the updated Car Object:
console.log(car);


//Now, our car is Red and the year has been updated to 2021.