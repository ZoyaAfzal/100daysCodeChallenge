/*Question:17: Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the
dinner, and you have space for only two guests.Start with your program from Exercise 16.
Add a new line that prints a message saying that you can invite only two people for dinner. */
let guestNames = ["Musa", "Sana", "Rameen", "Farah", "Alishba", "Shahzaib", "Manahel", "Reema", "Sara"];
console.log("i can invite only two guests for dinner because of the delay of my new dinner table.");
//• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
while (guestNames.length > 2) {
    let removeGuest = guestNames.pop();
    console.log(`Sorry ${removeGuest}, you are not invited to a Dinner.`);
}
//• Print a message to each of the two people still on your list, letting them know they’re still invited.
guestNames.map((item) => console.log(`Hey ${item}, you are still invited to a Dinner.`));
//• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
guestNames.pop();
guestNames.pop();
console.log(guestNames);
export {};
