// #Primitive - Call By Value

//7 types :  String , Number , Boolean , null , Undefined , Symbol , BigInt


const score = 100
const scoreValue = 100.3

const isLoggedIn = 100.3

const outsideTemp = null
let userEmail; //output = undefined 

const id = Symbol('1234')
const anotherId = Symbol('12344')

console.log(id === anotherId);


const bigNumber = 23424262556325316267n


// # Reference - Non-Primitive

//Array , Objects , Functions

const heros = ["Saktimaan" , "Naagraaj" , "Doga"]
let myObj = {

    name: "Mahee",
    age: 21,

}

const myFunction = function()
{
    console.log("Helloooo World ");

}
console.log(typeof bigNumber);
console.log(typeof outsideTemp);
console.log(typeof scoreValue);
console.log(typeof anotherId);



//JavaScript is a dynamically typed language. This means that variable types are determined at runtime, and you do not need to explicitly declare the type of a variable before using it. You can assign different types of values to a variable during its lifetime.

//For example, in JavaScript, you can do the following:

//let x = 10; // x is now a number
//x = "Hello"; // x is now a string
//x = true; // x is now a boolean
//On the other hand, statically typed languages require you to declare the variable's type explicitly, and the type checking is done at compile-time, before the code is executed.

//Languages like Java, C++, and TypeScript are statically typed, and they require you to specify the variable type explicitly when declaring them:

//int x = 10; // x is a variable of type int
//String name = "John"; // name is a variable of type String
//JavaScript's dynamic typing allows for more flexibility but can lead to potential runtime errors if not handled carefully. Static typing, on the other hand, provides better type safety at the cost of some initial verbosity and strictness.





             