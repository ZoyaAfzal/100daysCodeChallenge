//Literal Types :

let direction: "left" | "right" | "up" | "down";
direction = "right";
direction = "down";
console.log(direction);

function setColor(color: "red" | "green" | "blue") {
    return `selected color is ${color}`
}
console.log(setColor("red"));