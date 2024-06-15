/* Question-14:Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? 
Make a list that includes at least three people you’d like to invite to dinner.
Then use your list to print a message to each person, inviting them to dinner.*/

let guestNames : String[] = ["Sana", "Rameen", "Farah", "Shahzaib", "Aiza", "Reema"];

guestNames.map((items) => 
    console.log(`Hey ${items}! I am hosting a dinner party.Let's gather around the table and share a meal together.`)
);

