/*Question 53: Pulling Apart a Nested Object: Imagine you have a list inside another list that shows what a computer
programmer knows, like coding languages, tools, and software frameworks. Find a way to get three specific skills from
this list and show them.*/
var developerSkills = {
    languages: ["TypeScript", "JavaScript", "Python"],
    frameWorks: ["Angular", "React", "Django"],
    tools: ["Docker", "Git", "VScode"],
};
//Getting specified skills from the list
var languages = developerSkills.languages, frameWorks = developerSkills.frameWorks, tools = developerSkills.tools;
//Showing a skill from each category
console.log("Language: ".concat(languages[0], " ,\n    FrameWork: ").concat(frameWorks[1], " ,\n        Tools: ").concat(tools[2]));
