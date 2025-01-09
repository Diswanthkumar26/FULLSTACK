// Datatypes
// Javascript is Dynamic Typing
// Primitive and Object Type

//Primitive Data Types
//1.Number - Represents both integer and floating-point numbers.

let age = 22;
console.log(age);
console.log(typeof age);

let price = 44.22
console.log(price);
console.log(typeof price);

//2.String - Represents a sequence of characters.

let me = 'Im here'
console.log(me);
console.log(typeof me);

//3.Boolean - Represents a logical entity and can have two values: true or false.

let u = true;
console.log(u);
console.log(typeof u);

 let v = false;
 console.log(v);
 console.log(typeof v);
//4.Undefined - A variable that has been declared but not assigned a value.

let q;
console.log(q);

//5.Null - Represents the intentional absence of any object value.
 
let a = null;
console.log(a);
console.log(typeof a);


//6.Symbol - Represents a unique and immutable value, often used as object property keys.

let unique = Symbol('key');
console.log(unique);

//7.BigInt - Represents whole numbers larger than 2^53 - 1 (the largest number JavaScript can reliably represent with the Number type).

let lnum = BigInt(987654321098765432);
console.log(lnum);
console.log(typeof lnum);

let llnum = 987665342213345n;
console.log(llnum);
console.log(typeof llnum);


//Non-Primitive Data Types
//1.Object
/*Represents a collection of properties, each consisting of a key (usually a string) 
and a value (which can be any data type, including another object).*/

let person = {
    name: 'diswanth',
    age: 20,
    course: 'FS'
};
console.log(person);
console.log(person.name);
console.log(person.age);
console.log(person.course);

let n = {};
console.log(n);

//2.Array
//A special type of object used for storing ordered collections of values.

let numbers = [1,2,3,4,5];
console.log(numbers);

let alldata = [4,'diswa','khan',33,null,true,{}];
console.log(alldata);


//3.Function
//A special type of object that is callable and can perform an action.
// function functionName(){
//     code block
// }
// functionName();

function namee(){
    console.log('im diswanth');
}
namee();

//4.Date - A built-in object for handling dates and times.
let now = new Date();
console.log(now);

