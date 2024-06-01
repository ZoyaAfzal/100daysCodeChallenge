//Enums :
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
let playerDirection = Direction.Up;
console.log(`Direction is ${Direction[playerDirection]}`);
console.log(playerDirection); // Output: 0 
export {};
