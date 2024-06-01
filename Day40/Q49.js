"use strict";
/*Question 49: Function with Rest Parameters: Write a function that takes a rest parameter representing multiple
hobbies. It should log each hobby with a statement saying you enjoy that hobby.*/
function log_myHobbies(...hobbies) {
    hobbies.forEach((hobby) => {
        console.log(`${hobby} is my favourite hobby, i enjoy as it helps to grow mentally and psychologically.`);
    });
}
log_myHobbies("Painting", "Coding", "Reading");
