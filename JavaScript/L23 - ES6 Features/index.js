/*
Arrow Functions
Variable Declarations
Template Literals
Object Destructuring
Default Parameters
Spread Operator
*/

// ES5 TO ES6



// Arrow Functions
// ES5
function addd(a,b){
    return a+b;
}

// ES6
const add = (a,b) => a+b;


// Variable Declarations
// ES5
var num = 34;
// ES6
let num1 = 20;
const PI =3.145;

// Template Literals
// ES5
let me = 'diswanth';
console.log("hi, " +"i'm " + me )
// ES6
console.log(`hi,i'm ${me}`);


// Object Destructuring
// ES5
var user1 = {firstNmae : 'disswanth' , age : 21};
console.log(user1.firstNmae);
console.log(user1.age);
// ES6
var user2 = {firstNmae : 'disswanth' , age : 21};
const {firstNmae,age} = user2;
console.log(firstNmae,age);


// Default Parameters
// ES5
function greet(Name){
   Name = Name || 'Guest';
    console.log('hii ', Name);
}
greet('D')
// ES6
function greetus(name = 'Guest'){
    console.log(`hello ${name}` );
}
greetus('D')


// Spread Operator
// ES5
let x =[1,2,3];
let y =[4,5,6];
let z = x.concat(y);
console.log(z);
// ES6
let combined = [...x,...y] ;
console.log(combined)
