const user = {
    username: "mahee",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);

        //console.log(this);
    }
    //this refers the current context 
}

//user.welcomeMessage()
//user.username = "Raam"
//user.welcomeMessage()

//console.log(this);   // global object is the window object -- inside the browser

//function chai(){
  //  let username = "mahee"
//  console.log(this.username);
// }

// chai()

//const coffee = function() {
  //  let username = "mahee"
  //     console.log(this.username);
// }

// const tea = () => {                       // arrow function 
//         let username = "tulsi"
//         console.log(this);
// }

//tea()

//const addTwo = (num1 , num2) => {                     basic function -- explicit return 
 //   return num1 + num2
// }

 //const addTwo = (num1, num2) => num1 + num2              //implicit return
const addTwo = (num1, num2) => num1 + num2; ({username: "mahee"})


console.log(addTwo(4,5));