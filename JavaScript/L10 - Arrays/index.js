/*
An array is a data structure that can hold multiple values at once. 
These values can be of any type, including numbers, strings, objects, or even other arrays.
Arrays in JavaScript are zero-indexed, meaning the first element is at index 0.
*/
/*Syntax
const arrayname = [item1,item2,item3,..];
*/
// Using square brackets
let fruits = ['apple','banana','cherry']
console.log(fruits);
// Accessing Array Elements:
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);

// Change Value in Array

fruits[1] = 'orange';
console.log(fruits);

/*
Using for loop to print array with hard-coded condition 
it will create issue if condition is like i < 5
*/
// let fruits = ['apple','banana','cherry']
for(let i=0; i<3 ; i++){
    console.log(fruits[i]);
}

let greens = ["diswanth" ,"nandhan","ganesh","pooja","priya","vishnu","suba","udhaya"]

console.log (greens);

for(i=0;i<10;i++){
    console.log(greens[i]);
}


/* 
To avoid hard-coded condition switch to array 
*/
// We can use array length
// let fruits = ['apple','banana','cherry']
console.log(fruits.length);
for(let i=0; i<fruits.length; i++){
    console.log(fruits[i]);
}

// More Array Methods

const boxs = ['car', 'bike' , 'mobile' , 'laptop' , 'headphones'];
console.log(boxs);
/* 
Add element to array
Adds one or more elements to the end of an array 
and returns the new length of the array.
*/
boxs.push('books');
console.log(boxs);//new value always stores at last
/*
Remove element from array
Removes the last element from an array and returns that element.
*/
boxs.pop();
console.log(boxs);
/*
Adds one or more elements to the beginning of an array and returns the new length of the array.
*/
boxs.unshift('toys');
console.log(boxs);
/*
Removes the first element from an array and returns that element.
*/
boxs.shift();
console.log(boxs);

boxs.shift();
console.log(boxs);
// Anonymous Functions

boxs.forEach(function (x,i){
    console.log(x,i);
})

boxs.forEach((x,i) =>{
    console.log(x,i);
})
// Combining Arrays
let ary1 = ['TV' , 'PC'];
let ary2 = ['PS5', 'Laptop'];

let ary3 = ary1.concat(ary2);
console.log(ary3);

// Finding an Element Index, If not found it will return -1
console.error('from here');

let searchValue = 'P5'

let index = ary3.indexOf(searchValue);
console.log(index);

if(index>=0){
    console.log(`index of ${searchValue} is ${index}`);
}else{
    console.log(`${searchValue} is not available`);
}
// Array with mixed data types
let  mixed = ['D', 1.3 , true , 'Monkey D Luffy' , false , 6 , 10 , undefined , null ]
console.log(mixed);


let result = mixed.includes('D');
console.log(result);

let result1 = mixed.includes(1.3);
console.log(result1);

console.log(mixed.includes('Monkey D Luffy'));
console.log(mixed.includes(67));


// Array of Employee Objects
let emp = [
    {
        
        name:'diswanth',
        id:1,
        course:'Js',
        age: 21
    },
    {
        name:'Luffy',
        id:2,
        course:'Java',
        age: 19
    },
    {
        name:'Zoro',
        id:3,
        course:'Python',
        age: 22
    }
];
console.log(emp);

emp.forEach((emp) => {
    console.log(emp);
});
console.log(emp[1].course);

emp.forEach((emp) => {
    console.log(`Emp Id ${emp.id}`);
    console.log(`Emp name ${emp.name}`);
    console.log(`Emp course ${emp.course}`);
    console.log(`Emp age ${emp.age}`);
    console.log('-----');
});


//Fliters

let empl = emp.find((x) => x.id === 1);
console.log(empl);

let x = emp.filter((x) => x.age > 20);
console.log(x);



// Map

emp.map((employee) =>{
    console.log(`Name:${employee.name},DOB:${new Date().getFullYear()- employee.age}`);
});
