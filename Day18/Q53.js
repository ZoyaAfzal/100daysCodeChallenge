"use strict";
/*Question 53: Pulling Apart a Nested Object: Imagine you have a list inside another list that shows what a computer
programmer knows, like coding languages, tools, and software frameworks. Find a way to get three specific skills from
this list and show them.*/
let developerSkills = {
    languages: ["TypeScript", "JavaScript", "Python"],
    frameWorks: ["Angular", "React", "Django"],
    tools: ["Docker", "Git", "VScode"],
};
//Getting specified skills from the list
let { languages, frameWorks, tools } = developerSkills;
//Showing a skill from each category
console.log(`Language: ${languages[0]} ,
    FrameWork: ${frameWorks[1]} ,
        Tools: ${tools[2]}`);
