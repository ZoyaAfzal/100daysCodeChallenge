/*Question 60: Self-Running User Profile: Create a quick, self-setup profile for a user that can tell you the
user's name and age.*/
//This profile sets itself up and can share info about the user:
var userProfile = (function () {
    //The user's details are kept inside:
    var name = "Jennifer";
    var age = "20";
    //This part shares the user's details:
    return {
        displayInfo: function () {
            console.log("Name: ".concat(name, ", Age: ").concat(age));
        },
    };
})();
//Asking the profile to tell us about the user:
userProfile.displayInfo();
//It will say the user's name and age
//We made a self-setup profile that can talk about the user
