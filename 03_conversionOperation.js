let score = 33

console.log(typeof score);
console.log(typeof(score)); // number

let marks = "99"

console.log(typeof marks);
console.log(typeof(marks)); // string 

let valueInNumber = Number(marks)
console.log(typeof valueInNumber);


// "33" => 33
// "33abc" => NaN not a number => but type = number
// true => 1; false => 0

let isLoggedIn = 1

let booleanIsloggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);
// 1 => true; 0 => false
// "" => false
// "mahee" => true 

let somenumber = 43

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);
