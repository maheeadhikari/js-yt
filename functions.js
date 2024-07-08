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

function loginUserMessage(username){ // we can put a default value as (username = "raam")
    if(username === undefined){   //always run when your situation is set to true and i.e. correct, if not passing anything then if is undefined => username = undefined
        // can be written as if(!username)
            console.log("Please Enter A Username");
            return
    }
    return `${username} just logged in ` 
}

//console.log(loginUserMessage("Mahee Adhikari"))
console.log(loginUserMessage())    // undefined

//shopping cards

function calculateCartPrice(...num1){       //... => rest or spread operator based on its use 
    // function calculateCartPrice(val1, val2, ...num1) Output: [678]
    return num1
}

console.log(calculateCartPrice(90, 400, 678));

const user = {
    username: "mahee",
    price: 999
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}

//handleObject(user)
handleObject({
        username: "Raam",
        price: 299
})

const myNewArray = [200, 500 , 800 , 1000]

function returnSecondValue(getArray){
    return getArray[1]
}

//console.log(returnSecondValue(myNewArray));

console.log(returnSecondValue([200 , 500 , 800 , 1000]))