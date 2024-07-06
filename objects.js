//singleton

//objects.create

// object literals

const mySym = Symbol("key1");

const JsUser = {
    name: "Mahee",
    "full name": "Mahee Adhikari",
    age: 20,
    [mySym]: "key1",  // Using the Symbol as a key
    location: "Champawat",
    email: "maheeadhikari@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
};

//console.log(JsUser.email); // Output: maheeadhikari@gmail.com
//console.log(JsUser["email"]); // Output: maheeadhikari@gmail.com
//console.log(JsUser["full name"]); // Output: Mahee Adhikari
//console.log(JsUser.mySym); // Output: undefined (since mySym is not a string key)
//console.log(typeof JsUser); // Output: object
//console.log(JsUser[mySym]); // Output: key1
//console.log(JsUser["mySym"]); // Output: undefined (since mySym is not a string key)

JsUser.email = "mahee@chatgpt.com";
// Object.freeze(JsUser);
JsUser.email = "mahee@microsoft.com";
console.log(JsUser); // Check if the email change is reflected

// Functions: Functions in JavaScript are one of the fundamental building blocks of the language, Can Be Treated as Variable 

JsUser.greeting = function() {
    console.log("Hello JsUser");
};

//console.log(JsUser.greeting); // Output: [Function: greeting]
//JsUser.greeting(); // Output: Hello, Mahee!

JsUser.greetingTwo = function(){
        console.log(`Hello JS user , ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo())

