"use strict";
//Question 131: Create two modules; one that exports a class, and another that imports the class and creates an instance.
Object.defineProperty(exports, "__esModule", { value: true });
const person_1 = require("./person");
const Sarah = new person_1.Person("Sarah");
Sarah.greet();
// This snippet imports the Person class and uses it to create an instance.
