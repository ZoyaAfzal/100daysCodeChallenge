/*Question 63: Shape Shifter: Write a program that can describe either a circle or a rectangle using a special 
type alias, including properties unique to each shape*/

//Creating a custom type (type alias) for shapes that could be circles or rectangles:
type Shape = {
    kind: "circle" | "rectangle";
    radius?: number;        //only for circles
    width?: number;         //only for rectangles
    height?:number;         //only for rectangles
};
//Describing a circle using our shape type:
let circle: Shape = {
    kind: "circle",
    radius: 5,
}
//Describing a rectangle using our shape type:
let rectangle: Shape = {
    kind: "rectangle",
    width: 20,
    height: 10,
};

//Showing what we described:
console.log(circle);
//Here's the circle
console.log(rectangle);
//Here's the rectangle

//We have made a flexible program that can describe different shapes in details.