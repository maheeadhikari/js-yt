// for of

["", "", ""]
[{},{},{}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    console.log(num);
}

const greetings = "Hello World !"
for(const greet of greetings){
    console.log(`Each char is ${greet}`)
}

// Maps -- we know for unique values

const map = new Map ()
map.set('IN', "India")
map.set('USA', "United States Of America")
map.set('AUS', "Australia")
map.set('BAN', "Bangladesh")


//console.log(map);

for (const [key , value] of map){
    console.log(key, ':-', value);
}

const myObject = {
    'game1': 'NFS',
    'game2': 'Spiderman'
}

//for (const [ key, value] of myObject){               ---  this is not iterable
   // console.log(key, ':-', value);

//}
