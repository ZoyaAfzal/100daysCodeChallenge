//Question 142: Create a Promise that resolves with "Hello, World!" after 2 seconds.
// Creating a Promise that resolves with "Hello, World!" after 2 seconds:
const helloPromise = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Hello, World!");
    }, 3000);
});
//When a promise is fulfilled, you can access the resolved data in the 'then' method of the promise
helloPromise.then((message) => console.log(message));
export {};
// After 2 seconds, "Hello, World!" will be logged to the console.
