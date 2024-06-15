/*Question-16: More Guests: You just found a bigger dinner table, so now more space is available.
Think of three more guests to invite to dinner.Start with your program from Exercise 15.
Add a print statement to the end of your program informing people that you found a bigger dinner table. */
let guestNames = ["Sana", "Rameen", "Farah", "Shahzaib", "Manahel", "Reema"];
guestNames.map((items) => console.log(`I want to inform you ${items} that i have found a bigger table so, i am thinking to invite three more guests`));
//• Add one new guest to the beginning of your array.
let firstGuest = "Musa";
guestNames.unshift(firstGuest);
console.log(guestNames);
//• Add one new guest to the middle of your array.
let midGuest = "Alishba";
let midIndex = guestNames.length / 2;
guestNames.splice(midIndex, 0, midGuest);
console.log(guestNames);
//• Use append() to add one new guest to the end of your list. 
guestNames.push("Sara");
console.log(guestNames);
//• Print a new set of invitation messages, one for each person in your list.
guestNames.map((item) => console.log(`Hey ${item}! You are Cordinally invited to a Dinner.`));
export {};
