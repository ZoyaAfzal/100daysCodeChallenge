//Enums :

enum Direction {
    Up,
    Down,
    Left,
    Right,
}

let playerDirection: Direction = Direction.Up;
console.log(`Direction is ${Direction[playerDirection]}`);
console.log(playerDirection);