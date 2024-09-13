// primitive
// 7 type : String , boolen ,Number , Null , Undefined , Symbol , Bigint

const score = 100 
const scoreValue = 100.4


const islogged = false 
const outsideTemp = null //object
let useremail;

const id = Symbol('123')
const anotherid = Symbol('123')

console.log(id===anotherid);  // false

const bignumber = 234567887666n // undefined 

// Non primitive (Referance )
// Array , Objects , Functions

const heros = ["shaktiman", "hero","doga"];
let myObj = {
    name: "shad",
    age: 21,
}
const myfunction = function(){
    console.log("hello shad");
    
}
console.log(typeof bignumber);  //  bigint

console.log(typeof outsideTemp);  // object 

console.log(typeof myfunction);  // function 

console.log(typeof anotherid); // symbol


