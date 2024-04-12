//Question 122: Use a while loop to count down from 10 to 1 and breaks the loop when it reaches 5.

//Initializing the counter at 10
let counter:number = 10;
//This while will loop count down from 10 to 1 and stop at 5:
while(counter > 0){
    if(counter === 5){
        break; //It will exit the loop when counter reaches 5
    }
console.log(counter);
counter--; //Decremented the counter
};
//Logging the countdown from 10 but stops abruptly when it hits 5.