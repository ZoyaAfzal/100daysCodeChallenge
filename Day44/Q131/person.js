"use strict";
//Question 131: Create two modules; one that exports a class, and another that imports the class and creates an instance.
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
class Person {
    constructor(name) {
        this.name = name;
    }
    greet() {
        console.log(`Hello! my name is ${this.name}.`);
        console.log(`I hope, you are doing good! ${this.name}`);
    }
}
exports.Person = Person;
;
//Exporting the Person class
