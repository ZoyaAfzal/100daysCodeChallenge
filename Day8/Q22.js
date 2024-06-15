/*Question-22: Intentional Error: If you haven’t received an array index error in one of your programs yet,
try to make one happen. Change an index in one of your programs to produce an index error.
 Make sure you correct the error before closing the program. */
const weeks = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
//Intentional Error:
console.log(weeks.index[2]);
//Correction of Error:
console.log(weeks[3]);
console.log(weeks[6]);
export {};
