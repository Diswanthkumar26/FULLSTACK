// Function
// Functions are pieces of code that we can reuse again and again in our code
/*Function syntax
function FunctionName(){
    code block
}
FunctionName()*/ // callin function

// Function Declaration - JavaScript Hoisting
/* A function declaration defines a named function.It's hoisted,
 meaning you can call it before it's defined. */
//when we need same output for 5 times we have to type 5 time print statement if need any changes we have to change all the 5 lines of code.
 console.log('hi lets see js');
 console.log('hi lets see js');
 console.log('hi lets see js');
 console.log('hi lets see js');
 console.log('hi lets see js');
 console.log('hi lets see js');
 console.log('hi lets see js');

 console.error('using function');

 //but using fuuntion we have to just open function using function name and type the code we needed in output for once then we need to call the function where ever we need multi times
 dataN();

 function dataN(){
    console.log('hi lets see js');
 }

// Calling the function
/*dataN();
dataN();
dataN();
dataN();
dataN();*/ // if we need any changes.. we need to change it only it will automatically 5 times.

// Function Parameters and Arguments
/*Functions can take parameters, which act as placeholders for the values 
that will be passed to the function.The passing value is called an argument.*/


/*Syntax
function FunctionName(parameters){
   code block
}
FunctionName(Arguments)*/

function NameD(userName){
   console.log('Hey '+ userName +'!');
}
NameD('Diswanth');
NameD('D');
NameD('pooja');



function Onepiece(firstName, lastName){
   console.log(`Im, ${firstName} ${lastName}`);

}
Onepiece('MonkeyD.','Luffy');
Onepiece('Roronoa','Zoro');

function operators(x,y,z){
   console.log(x+y+z);
   console.log(x-y-z);
   console.log(x*y/z);
}
operators(80,30,20)


// Default Parameter

function OP(KingOfPriate ='Luffy',Swordsman= 'zoro'){
   console.log(` ${KingOfPriate} and ${Swordsman} `);
}
OP('Gol D Roger','Mihawk');
OP();

// Function with Return Type
function add(a,b){
   return a+b;
}

let sum = add(50,30);
console.log(sum);
///////////////////////////////////////////////////////////////////////

// Function Expression
/* A function expression defines a function inside an expression.
It's not hoisted, so you can't call it before it's defined.*/
/*Syntax
const FunctionName = function (){
   code block
} 
FunctionName()*/

const me = function(){
   console.log('hi all');
};
me();

// With Argument
const myself = function (Name){
   console.log(`i'm ${Name}`);
};
myself('Diswanth');


// Function Expression with Return Type
const multi = function(d,c){
   return d*c;
}
let u = multi(20,30);
console.log(u);
console.log(multi(5,5));

///////////////////////////////////////////////////////////////////////

// Arrow Function
// Arrow functions provide a concise syntax and do not bind their own 'this'. They are not hoisted.
/*Syntax
const FunctionName= () =>{
   code block
}
FunctionName()*/

const Strawhat = () =>{
   console.log('Mr.D');
};
Strawhat();

// With Argument
const Strawhats = (Luffy,Zoro) =>{
   console.log(`Future ${Luffy} and worlds Greatest ${Zoro}`);
};
Strawhats('Priate King','Swordsman');

// Arrow Function with Return Type

const Sub = (s,e) =>{
   return s-e
}
let su = Sub(4,8);
console.log(su);
console.log(Sub(6,4)); 


// Shorter Way

const addi = (g,h) => g+h;
console.log(addi(5,5));


//Function Calling Other Function
function Work(my){
   console.log(`welcome to our ${my} company,`);
};

function workBase(self){
   Work(self)
}
workBase('IT');

//Anonymous Functions: Later on Course on Arrays

setTimeout(()=>{
   console.log('Learning Js');
},3000)

/**
Scope of variables will on functions and loops
var: Function scoped.
let: Block scoped.
const: Block scoped.
 */
function myfun(){
   var b = 'm';
   console.log(b);
   if(true){
      var a= 'dis';
      let s= 'wan';
      const f ='th';
      
   }
   console.log(a);
   // console.log(s);
   // console.log(f);
   
}
myfun()

