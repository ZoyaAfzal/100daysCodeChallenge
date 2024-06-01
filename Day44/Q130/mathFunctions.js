"use strict";
//Question 130: Explain how to export a function from one JavaScript file and import it into another file.
Object.defineProperty(exports, "__esModule", { value: true });
exports.add = void 0;
const add = (a, b) => a + b;
exports.add = add;
//This line exports an add function from mathFunctions.ts into main.ts
