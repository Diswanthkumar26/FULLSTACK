// let , const , var

console.log(d)
{
var d = 20; // global variable and reassign the value
d = 30;
console.log(d);
}
console.log(d)
// console.log(e)
{
let e = 20; // cannot use in another block but we can reassign the value
e = 30;
console.log(e);
}
// console.log(e)

{
const f = 40; // cannot use in another block and we cannot reassign the value
// f = 50;
console.log(f);
}
// console.log(f)

//Decleare and initilize a variable
let x = 100;
console.log(x);

let thalapathy = "pooja";
console.log(thalapathy);
 
//Decleare a variable
let y;
console.log(y);

//initilize a variable
y=90;
console.log(y);

//Naming conventions
let userName = 'Diswanth'; // correct camelCase conventions
console.log(userName);

let user_name = 'Luffy';  //underscore is not recommended but valid
console.log(user_name);

console.log('Welcome '+ userName);
console.log('Hi '+ user_name);

//incorrect variable names

// let 5name = 5; (invalid: variable name never start with the number)
// let diswanth@home = 'myhome'; (invalid: variable name cannot contain spl char)

// Reserved keywords

// let new = 'data';
// let function = 20;

// Symbols in variable names

// let #function = 'data'; invalid
// let @function = 'data'; invalid
let $function = 'data'; // only $ symbol is allowed

// Constants

const D = 23.12; // THe value cannot be changed
console.log(D);

// D = "diswa";
// console.log(D);

// Var

var course = 'FS';
console.log(course);

course = 'frontend'
console.log(course);

// Redeclaration

var a = 2;
var a = 40;
console.log(a); //redeclaration is allowed

let b = 4;
// let b = 20;
b = 10; // reassignment is allowed
console.log(b); 


const c = 20;
// const c = 10;
// c = 30; ressignment not allowed 
console.log(c); //redeclaration not allowed
