let score = "44"

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score)
console.log(typeof valueInnumber);
console.log(valueInNumber);

//"33"=> 33
//"44abc"=>NaN
// true => 1; false => 0

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)


console.log(booleanIsLoggedIn);
// 1 => true;
// "" => false
//"hitesh" = true

let somenumber = 33

let stringnumber = String(somenumber)
console.log(stringnumber);
console.log(typeof stringnumber);

//*************operations ****************
let str1 = "hello"
let str2 = " thakurshaab"
let str3 = str1 + str2
console.log(str3);


//**************Opertaions ***************** 
let value = 3
let negvalue = -value
console.log(negvalue)

console.log("1"+2);
console.log(1 + "2");
console.log(1 + 2+"3");
console.log("1" + 2+3);

console.log(+true);
console.log(+"");


let num1 ,num2 ,num3
 num1 = num2 = num3 = 3 + 3
 console.log(num1);

 let gameCounter = 100
 gameCounter++
 console.log(gameCounter)

 
//***prefix and postfix operator *****//
 let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"
