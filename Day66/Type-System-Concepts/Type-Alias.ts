// Type-Alias :

type MyString = string;

let myName: MyString = "Glitcher";
console.log(myName);

type MyStringOrNumber = string | number;

let myValue: MyStringOrNumber = 10;
console.log(myValue);

// another example
type Employee = {
    name: string;
    age: number;
    email?: string;
};

const alice: Employee = {
    name: "Alice",
    age: 30,
    email: "alice@example.com",
};

const bob: Employee = {
    name: "Bob",
    age: 25,
};

console.log(alice);
console.log(bob);