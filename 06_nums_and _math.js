const score = 400 
console.log(score);

const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(1));

const otherNumber = 123.8999
console.log(otherNumber.toPrecision(4)) //The toPrecision() method in JavaScript is used to format a number to a specified length.
//It converts a number into a string that represents the number in fixed-point or exponential notation, depending on the value and the precision specified.


const hundreds = 100000
console.log(hundreds.toLocaleString('en-IN'))
//to convert a number into a string that represents the number formatted according to a specific locale's conventions.

//*****************MATHS  *********** */

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.ceil(4.2));//takes top value
console.log(Math.floor(4.9));//takes lower value
console.log(Math.min(4,6,8,3));
console.log(Math.max(4,6,8,3));

console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20
console.log(Math.floor(Math.random()* (max - min + 1)) + min)






