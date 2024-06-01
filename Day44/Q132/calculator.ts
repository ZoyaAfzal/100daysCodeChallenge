//Question 132: Discuss the difference between default and named exports in JavaScript modules.

export default class Calculator {
    a: number;
    b: number;
    constructor(a: number, b: number){
        this.a = a;
        this.b = b;
    }
    add(){
        return this.a + this.b;
    }
};