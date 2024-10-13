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

//++++++++++++ memory ++++++++++++++++++++++
//Stack (Primitive) , Heap (Non -Primitive)
let myYouTubename = "kamalthakur.com"

let anothername = myYouTubename 
anothername = "chaigaram"

console.log(myYouTubename);
console.log(anothername);

let userOne = {
    email: "kamal@.com",
    upi: "user@ybl"
}

let userTwo = userOne
userTwo.email = "kamal@.com"

console.log(userOne.email);
console.log(userTwo.email);
/*In stack we store a primitive type value(numbers ,bollean,etc) and when we take something then we get copy of that things.
but in Heap we store a non primitive value and get refrence ,means we can do a change in original value */




