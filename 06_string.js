const name = "Mahee";
const repoCount = 50;

//console.log(name + repoCount + "Value")

console.log(`Hello , my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('maheeeeeeeee-mnuuuuu')

console.log(gameName[0]);
console.log(gameName.__proto__)


//console.log(gameName.length);
//console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('m'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(1, -4)
console.log(anotherString);

//const newString = "    Mahee     "
//console.log(newStringOne);
//console.log(newAtringOne.trim());

const url ="https://mahee.com/mahee%23adhikari"

console.log(url.replace('%23' , '-'))

console.log(url.includes('mahee'))
console.log(url.includes('adhikari'))
console.log(url.includes('ridhis'))

const gameFrame = new String('Mahee-mnu-Adhikari')
console.log(gameFrame.split('-'))
