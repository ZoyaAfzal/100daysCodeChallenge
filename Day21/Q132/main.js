"use strict";
//Question 132: Discuss the difference between default and named exports in JavaScript modules.
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//Importing name exports:
const math_1 = require("./math");
console.log((0, math_1.multiply)(2, 6));
console.log((0, math_1.divide)(15, 5));
//Importing a default export:
const calculator_1 = __importDefault(require("./calculator"));
const addition = new calculator_1.default(4, 4);
console.log(addition.add());
// This code illustrates the syntax and usage differences between default and named exports.
