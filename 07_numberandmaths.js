//const score = 400
//console.log(score);

//const balance = new Number(100)
//console.log(balance);
//console.log(balance.toString().length);
//console.log(balance.toFixed(2))


//const otherNumber = 239.6747646

//console.log(otherNumber.toPrecision(3));

//const hundreds = 100000
//console.log(hundreds.toLocaleString('en-IN'));

//************************Maths************************************

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.ceil(4.3));
console.log(Math.floor(4.5));
console.log(Math.min(4,3,6,8));
console.log(Math.max(4,5,6,3,2));

console.log(Math.random());
//the value always come between 0 & 1
console.log(Math.random()*10);
//to avoid the value like 0.04 we add 1
console.log((Math.random()*10) + 1);


const min = 10
const max = 20
console.log(Math.floor(Math.random () * max - min + 1) + min);