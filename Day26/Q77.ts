/*Question 77: Default Parameters: Write a function that greets a user. It should take the user's name as a 
parameter and say hello. If no name is given, it should greet an anonymous user.*/

//This function greets a user by name, or greets an anonymous user if no name is mentioned:

function greetUser(name:string = "anonymous"){
    //Saying Hello to the given name or an anonymous user
    console.log(`Hello, ${name}!`);
}

//Trying the function with a name:
greetUser("Isla");
greetUser();

//Her, we saw how our function can greet someone by name , or just say Hello! if we don't know the name.