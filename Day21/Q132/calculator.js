"use strict";
//Question 132: Discuss the difference between default and named exports in JavaScript modules.
Object.defineProperty(exports, "__esModule", { value: true });
class Calculator {
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }
    add() {
        return this.a + this.b;
    }
}
exports.default = Calculator;
;
