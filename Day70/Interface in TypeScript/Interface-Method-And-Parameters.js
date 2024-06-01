"use strict";
//Interface-Method-And-Parameters :
Object.defineProperty(exports, "__esModule", { value: true });
// Create an object that adheres to the 'Person' interface
const Sarah = {
    name: "Sarah",
    age: 30,
    greet(message) {
        console.log(`${this.name} says: ${message}`);
    },
};
Sarah.greet("Hello, TypeScript!"); // Output: Sarah says: Hello, TypeScript!
