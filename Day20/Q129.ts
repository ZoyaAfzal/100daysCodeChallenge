//129: Explain how this behaves differently in arrow functions compared to traditional functions.

//Demonstrating 'this' in traditional vs. arrow function:
const traditionalVsArrow = {
    value: "traditionalVsArrow value",
    traditionalFunction: function() {
        console.log("Traditionalfunction: " , this.value);
        //'this' refers to traditionalVsArrow object
        },

    arrowFunction: () => {
        console.log("Arrow function: " , this.value);
        //'this' is not bond to traditionalVsArrow object but to the scope in which traditionalVsArrow defined

        },
};
traditionalVsArrow.traditionalFunction();
//logging "traditionalVsArrow value"
traditionalVsArrow.arrowFunction();
// Likely undefined, depending on the outer scope's 'this.value'

/*// This code snippet illustrates the difference in how 'this' is determined in traditional functions versus 
    arrow functions.*/