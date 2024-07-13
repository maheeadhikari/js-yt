// reduce method is used in shopping card

//const array1 = [1, 2, 3, 4];

//const initialValue = 0;
//const sumWithInitial = array1.reduce(
//    (accumulator, currentValue) => accumulator + currentValue,
//    initialValue
// );       -- accumulator is an empty varirable given, initial value is already declared

// console.log(sumWithInitial);

 const myNums = [1, 2, 3]

//const myTotal = myNums.reduce(function (acc,currval) {
//    console.log(`acc: ${acc} and currval: ${currval}`);
//   return acc + currval
// },3)   acc: 3 and currval: 1
        //acc: 4 and currval: 2
        //acc: 6 and currval: 3

const myTotal = myNums.reduce( (acc, curr) =>acc + curr, 0)

console.log(myTotal);

const shoppingCart = [
    {
        itemName: "js course",
        price: 399
    },
    {
        itemName: "java course",
        price: 499
    },
    {
        itemName: "C++ course",
        price: 599
    },
    {
        itemName: "Data Science course",
        price: 12999
    },
    {
        itemName: "App Development course",
        price: 1999
    },
]

 const priceToPay = shoppingCart.reduce( (acc, item) => acc + item.price, 0)
 console.log(priceToPay);