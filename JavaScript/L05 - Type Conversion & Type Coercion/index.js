//Type Conversion (Manually)
/*Type conversion (also known as type casting) is when you explicitly convert a value from one type to another. JavaScript provides several functions for this purpose.*/

// Type Conversion
console.log('Type Conversion'); 

// String to Number
let Name = '260803';
console.log(Name);
let num = Number(Name);
console.log(num);
console.log(typeof num);

// Number to String
let numb = 26;
let str = String(numb);
console.log(str);
console.log(typeof str);


// Boolean to String

let bool = true; 
let stri = String(bool);
console.log(stri);
console.log(typeof stri);


// String to Boolean
let nam = '';
let namf = 'false'; //if there is a value it is consider as a true.. only if there is no value it will be false. 
let boolt = Boolean(nam);
console.log(boolt);
let boolf = Boolean(namf);
console.log(boolf);

// Parsing integers and floats
let floatstr = '260.83';
let intnum = parseInt(floatstr);
console.log(intnum);
//if we need absolute value
let floatnum = parseFloat(floatstr);
console.log(floatnum);

//Type Coercion
/*Type coercion is when JavaScript automatically converts a
value from one type to another during an operation.
This often happens with equality checks and arithmetic operations. */

// Type Coercion (Automatically)
console.log('Type Coercion');

// String and Number
let result1 = '5' + 2;
console.log(result1);

let res2 = '5' - 2;
console.log(res2);

let res3 = '5' * 2;
console.log(res3);

let res4 = '5' / 2;
console.log(res4);

let res8 = '5'**2;
console.log(res8);

let res9 = '5'%2;
console.log(res9);

// Boolean and Number
let res5 = true + 1 ; //value of true is 1
console.log(res5);

let res6 = false + 1; //value of false is 0
console.log(res6);

// Coercion occurs in equality checks (==), but not in strict equality checks (===).
// Equality checks
console.log(1=='1');
console.log(1==='1');
console.log(1===1);

console.log(0 == false);
console.log(0 === false);