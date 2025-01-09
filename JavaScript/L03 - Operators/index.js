//Operators
/*
1.Arithmetic Operators
2.Assignment Operators
3.Comparison Operators
4.Logical Operators
5.String Operators
*/

//1.Arithmetic Operators - Arithmetic operators are used to perform basic mathematical operations
console.error('Arithmetic Operators ');
//1.1)Addition (+)
console.log('Addition');
let sum = 50 + 70;
console.log(sum); 

let a = 10;
let b = 20;
console.log(a+b);

let c = 2;
let d = 3;
let e = c + d;
console.log(e);

//1.2)Subtraction (-)
console.log('Subtraction');
let dif = 10 - 4;
console.log(dif);

//1.3)Multiplication (*)
console.log('Multiplication');
let multiple = 100* 2;
console.log(multiple);

//1.4)Division (/)
console.log('Division');
let div = 10/5;
console.log(div);

//1.5)Modulus (%)
console.log('Modulus');
let mod = 200%3;
console.log(mod);

//1.6)Exponentiation (**)
console.log('Exponentiation ');
let power = 2**4;
console.log(power);

//1.7)Increment (++)
console.log('Increment');
let Increment = 82;
Increment++;
console.log(Increment);

//1.8)Decrement (--)
console.log('Decrement');
let Decrement = 82;
Decrement--;
console.log(Decrement);

//2.Assignment Operators - Assignment operators are used to assign values to variables.
//2.1)Assignment (=)
console.error("Assignment Operators");

let z = 10;
console.log(z);

//2.2)Addition Assignment (+=)

z+=20;
console.log(z);

//2.3)Subtraction Assignment (-=):

z-=20;
console.log(z);

//2.4)Multiplication Assignment (*=):
z*=22;
console.log(z);

//2.5)Division Assignment (/=):
z/=2;
console.log(z);
//2.6)Modulus Assignment (%=):
z%=24;
console.log(z);
//2.7)Exponentiation Assignment (**=)
z**=2;
console.log(z);



//3.Comparison Operators - Comparison operators are used to compare two values.
console.error("Comparison Operators");
//3.1)Equal (==)
console.log('5==5 is', 5==5);
console.log("5==5 is", 5=='5'); //type coercion
//3.2)Strict Equal (===)
console.log("5===5 is", 5==='5');// check datatype.. not type coercion 
//3.4)Not Equal (!=)
console.log("4!=5 is", 4!='5'); // type coercion.... it should be different not same
console.log("10!=11",10!=11);
//3.5)Strict Not Equal (!==)
console.log("5!==5 is", 5!=='5'); // type coercion.....it should be different in datatype  also
//3.6)Greater Than (>)
console.log('Greater than 5 > 10 is',5>10);

//3.7)Less Than (<)
console.log('less than 5 < 10 is',5<10);
//3.8)Greater Than or Equal (>=)
console.log('Greater Than or Equal 10>=20 is',20>=20);
//3.9)Less Than or Equal (<=)
console.log('less than or Equal 10>=20 is',10<=20);

//4.Logical Operators - Logical operators are used to combine multiple conditions.
console.error('Logical Operators');
//4.1)Logical AND (&&)
console.log('AND operator');
console.log('AND', true && false);
console.log('AND', false && false);
console.log('AND', false && true);
console.log('AND', true && true); //in AND operator both side should be true..

//4.2)Logical OR (||)
console.log('OR operator');
console.log('OR', true || false);
console.log('OR', false || false);
console.log('OR', false || true);
console.log('OR', true || true); //in OR operator only one side should be true..

//4.3)Logical NOT (!)

console.log('NOT operator');
console.log('!', !false);
console.log('!',!true); //in NOT operator it should change the value..
//Example
console.log('example:');
let haveIdproof = false;
let isAdualt= true;
if(haveIdproof && isAdualt){
    console.log('your allowed');
}else{
    console.log('your not allowed');
}



//5. String Operators
console.error('String Operators');

console.log('hello word');

//String concatenation
let str = "diswanth" + ' '+"kumar";
console.log(str);
str += ' how r u'
console.log(str);

//String with Different Quotes:
console.log("I'm diswanth");
let msg= "I'm"+ ' '+'diswanth';
console.log(msg);
console.log('I\m "diswanth" kumar');
console.log("im" +' '+ "diswanth")

//Concatenation with Object Properties:

let me = {
    name:'diwsanth',
    id:1
};
console.log('welcome ' + me.name + ' ur id is' +  me.id);

//Template literal
console.log(`welcome ${me.name} ur id is ${me.id} `);

//Order Precedence
console.error("Order Precedence")
console.log(10 - 2 / 2);// in order 2/2= 1 , then 10-1=9 using js percedence value
console.log((10 - 2) / 2);// in order 10-2=8 , then 8/2= 4
// New Examples with - and /

// Additional Combined Example
