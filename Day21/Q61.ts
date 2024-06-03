/*Question 61-Making Enums for Vehicles: Let's create categories for vehicles like cars,trucks and motorcycles using enums,
and shows examples*/
//Making a list(enum) for different type of vehicles:

enum vehicleTypes{
    Car,
    Airplane,
    Train,
    Truck,
    Hellicopter,
    Carriage,
    Subway,
    Bicycle,
    MotorCycle,

}
//Shoiwing one type of vehicle from the list
console.log(vehicleTypes.Airplane);
console.log(vehicleTypes.Hellicopter);
console.log(vehicleTypes.Subway);
console.log(vehicleTypes.Car);
//Enum starts counting from 0.
//Here we are just checking what number the vehicle type got in our list.
