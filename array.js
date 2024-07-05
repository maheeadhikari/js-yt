//array - js arrays are resizable

const myArr = [0 , 1 , 2 , 3 , 4 , 5 ]

const myArr2 = new Array (1, 2, 3, 4)

//console.log(myArr[1]);
//console.log(myArr2[3]);

// Array methods 

//myArr.push (6)
//console.log(myArr);
//myArr.push (7,8)
//myArr.pop()

//myArr.unshift(3)
//myArr.shift()

//console.log(myArr.includes(9)); // output boolean types
//console.log(myArr.indexOf(19)); //if not exsist then value = -1
//console.log(myArr.indexOf(3));

const newArr = myArr.join() //adds all elements of an array into an string
console.log(myArr);
console.log(newArr);

//slice , splice 

console.log("A" , myArr);

const myn1 = myArr.slice(1,3)

console.log(myn1);
console.log("B" , myArr);

const myn2 = myArr.splice(1,3)
console.log("C", myArr);
console.log(myn2);



