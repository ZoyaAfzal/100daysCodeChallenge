//Task 155: DATA TYPES:

//DATA TYPES:

//String--
let firstname:string = "Kenneth";
let lastname:string = "Eric";
let message:string = "Hope you are doing good.";

console.log(`Hello ${firstname} ${lastname}! ${message}`); //string

//Numbers--
let num1:number = 5190;
let num2:number = 189.9;

console.log(num1 + num2); //number
console.log(num1 - num2); //number
console.log(num1 * num2); //number
console.log(num1 % num2); //number
console.log(num1 / num2); //number
console.log(num1 ** num2); //infinity


//Boolean--
let isImplemented:boolean = true;
let isNotImplemented:boolean = false;

console.log(isImplemented);//boolean
console.log(isNotImplemented);//boolean


//Undefined--
let term:undefined;

console.log(term); //undefined


//Null--
let value:null = null;

console.log(value); //null


//BigInt--
const BigNumber:bigint = BigInt(900736785546788855566);
console.log(BigNumber); //bigInt

//typeOf--
console.log(typeof undefined) // "undefined"
console.log(typeof 0) // "number"
console.log(typeof true)// "boolean"