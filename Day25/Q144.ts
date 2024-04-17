//Question 144: Explain the use of the Promise.all() method with an example.

import { getRandomValues } from "crypto";

// Example using Promise.all to wait for multiple promises to resolve
const promise1 = Promise.resolve(5);
const promise2 = 56;
const promise3 = new Promise<string>((resolve)=>{
    setTimeout(()=>{
        resolve("Promise");
}, 2000);
});

Promise.all([promise1, promise2, promise3]).then((values)=>{
    console.log(values);
//outputs:[ 5, 56, 'foo' ]
});
// This demonstrates how Promise.all waits for all promises to resolve and then logs the array of their results.

