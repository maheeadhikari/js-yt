// if statement 
const isUserLoggedIn = true
//if (true){
        //the code will run
//}
//if (false){
    //the whole code will not run
//}
// < less than , > greater than, <= less than or equal to , >= greater than or equal to , = assigns value , == equals to , != not equals to, === strict equal, !== checks negative sign 

if ( 2 != 3){
    console.log("executes")
}

const temperature = 41

if (temperature === 41){
    console.log("less than 50");
}else{

console.log("temperature is greater than 50");
}

const score = 200
if (score > 100){
    const power = "fly"
    console.log(`User power: ${power}`);
}
// var --- global scope


const balance = 1000
// if (balance > 500) console.log("test"), console.log("test2");
//if (balance < 500){
  //  console.log("less than");
//} else if (balance <750){
  //  console.log("less than 750")
//}
//else if (balance < 900){
  //  console.log("less than 900");
//}
//else{
  //  console.log("less than 1200")
//}

const userloggedIn = true
const debitCard = true 
const loggedInFromGoogle = false 
const loggedInFromEmail = true  

if(userloggedIn && debitCard && 2 ==3) { 
    console.log("Allow To Buy Course");
}
if (loggedInFromGoogle || loggedInFromEmail ){
    console.log("User logged in");

}