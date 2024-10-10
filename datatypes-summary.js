//Primitive

// 7 types : string,number,boolean,null,undefined,symbol,BigInt
const score = 100
const scorevalue  = 100.3

const isLoggedIn = false
const outsidetemp  = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);
const bigNumber = 454365476587n


//Reference (Non Primitive)

// Array,Objects,Functions

const heroes = ["shkatiman","ironman","thor"];
let myobj = {
    name: "kamal",
    age : "18",
}

const myFunction = function(){
    console.log("hello worlD");
}

console.log(typeof bigNumber);