//console.log(2 > 1);
//console.log(2 >= 1);
//console.log(2 < 1);
//console.log(2 < 1);
//console.log(2 == 1);
//console.log(2 != 1);

//console.log("2" > 1);
//console.log("02" > 1);
//typescrit => says that datatypes must be of same types

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

//the reason is that an equality check == and comparison > < >= <= work differently.
//Comparisons converts null to a number, treating it as 0.
//That's why (3) null >= 0 is true and (1) null > 0 is false.

console.log(null > undefined);
console.log(null == undefined);
console.log(null >= undefined);

// === strictly check

console.log("2" === 2);
