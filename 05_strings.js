const name = "kamalpratap"
const repoCount = 50 

//console.log(name + repoCount + " Value");

console.log(`hello myself ${name} and myrepocount is ${repoCount}`);

const gameName =new String('kamal')
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.toUpperCase());

console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherstring = (gameName.slice(-5,2))
console.log(anotherstring);

const newStringOne = "     hitesh - kamal - friends    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://en.wikipedia/40%.org/wiki/GitHub"
console.log(url.replace('40%','-'))


console.log(url.includes('org')) //it tells about presence of any term
console.log(newStringOne.split('-'));


