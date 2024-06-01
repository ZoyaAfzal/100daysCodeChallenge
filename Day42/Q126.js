//Question 126: Explain how the this keyword changes its value when used inside a nested function within a method.
//Demonstrating 'this' behaviour change in a nested function:
const myObject = {
    property: "Value",
    outerMethod: function () {
        console.log(this.property);
        //Worked as expected, logged "Value"
        const innerMethod = () => {
            console.log(this.property);
            //Still accessing myObject's property due to arrow function capturing 'this' from outer scope
        };
        innerMethod();
    }
};
myObject.outerMethod();
export {};
/*This example showed that using an arrow function for the inner method preserves the 'this' context
from the outer method.*/ 
