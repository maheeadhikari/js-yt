function sayMyName(){
    console.log("M");
    console.log("A");
    console.log("H");
    console.log("E");
    console.log("E");
}

//sayMyName()  //reference + execute 

//function addTwoNumbers(number1 , number2){     //parameters
//    console.log(number1 + number2);
// }

// addTwoNumbers()
// addTwoNumbers(4,7) //can be stored in variables
// addTwoNumbers(8, "6")
// addTwoNumbers(3, "m")
// addTwoNumbers(3, null) //arguments

function addTwoNumbers(number3 , number4){
    // let result = number3 + number4
    // return  result  // rule: after u return, no one will do it. will reduce the function.
    return number3 + number4
}

const result = addTwoNumbers(3,4)

// console.log("Result:", result);

function loginUserMessage(username){
    if(username === undefined){
            console.log("Please Enter A Username");
            return
    }
    return `${username} just logged in ` 
}

//console.log(loginUserMessage("Mahee Adhikari"))
console.log(loginUserMessage())    // undefined 
