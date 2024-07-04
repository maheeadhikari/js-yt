//Dates

let myDate = new Date()
//console.log(myDate.toString());
//console.log(myDate.toDateString());
//console.log(myDate.toLocaleString())
//console.log(myDate.toLocaleTimeString());
//console.log(myDate.toDateString());
//console.log(myDate.getHours());
console.log(myDate.getMonth());
console.log(myDate.toLocaleString());

//console.log(typeof myDate);         //object


//let myCreatedDate = new Date(2024, 8 , 23)
//let myCreatedDate = new Date(2024 , 8 , 23 , 0 , 0)
//console.log(myCreatedDate.toDateString());
//console.log(myCreatedDate.toLocaleString())

//let myCreatedDate = new Date("2024-09-24")
//console.log(myCreatedDate.toLocaleString());

let myCreatedDate = new Date("04-07-2024")
//console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

//console.log(myTimeStamp);
//console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));

let myNewDate = new Date()
//console.log(myNewDate.getMonth() + 1);
// ` ${newDate.getDay()}` and the time 

console.log(myNewDate.toLocaleString('default' , {
    weekday: "long"
}))