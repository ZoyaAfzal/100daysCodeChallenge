/*Question 61-Making Enums for Vehicles: Let's create categories for vehicles like cars,trucks and motorcycles using enums,
and shows examples*/
//Making a list(enum) for different type of vehicles:
var vehicleTypes;
(function (vehicleTypes) {
    vehicleTypes[vehicleTypes["Car"] = 0] = "Car";
    vehicleTypes[vehicleTypes["Airplane"] = 1] = "Airplane";
    vehicleTypes[vehicleTypes["Train"] = 2] = "Train";
    vehicleTypes[vehicleTypes["Truck"] = 3] = "Truck";
    vehicleTypes[vehicleTypes["Hellicopter"] = 4] = "Hellicopter";
    vehicleTypes[vehicleTypes["Carriage"] = 5] = "Carriage";
    vehicleTypes[vehicleTypes["Subway"] = 6] = "Subway";
    vehicleTypes[vehicleTypes["Bicycle"] = 7] = "Bicycle";
    vehicleTypes[vehicleTypes["MotorCycle"] = 8] = "MotorCycle";
})(vehicleTypes || (vehicleTypes = {}));
//Shoiwing one type of vehicle from the list
console.log(vehicleTypes.Airplane);
console.log(vehicleTypes.Hellicopter);
console.log(vehicleTypes.Subway);
console.log(vehicleTypes.Car);
//Enum starts counting from 0.
//Here we are just checking what number the vehicle type got in our list.
