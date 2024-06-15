/* Question-15: Changing Guest List: You just heard that one of your guests can’t make the dinner,
so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
Start with your program from Exercise 14. Add a print statement at the end of your program stating the
name of the guest who can’t make it.*/
let guestNames = ["Sana", "Rameen", "Farah", "Shahzaib", "Aiza", "Reema"];
let cannotJoin = "Aiza";
console.log(cannotJoin + " " + "can't join us at Dinner Party due to emergency");
//• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
let newGuest = "Manahel";
guestNames[guestNames.indexOf(cannotJoin)] = newGuest;
console.log(guestNames);
//• Print a second set of invitation messages, one for each person who is still in your list.
guestNames.map((item) => console.log(`Hey ${item}! You are Cordinally invited to a Dinner.`));
export {};
