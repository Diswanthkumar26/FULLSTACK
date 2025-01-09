// Loops
/* 
In programming, loops are used to execute a block of code repeatedly until
a specific condition is met or for a specified number of times.
They provide a way to perform repetitive tasks efficiently without writing
the same code multiple times.
*/

/* 
Types of Loops
1. For Loop
2. While Loop
3. Do While Loop
 */

// For Loop Example
// syntax
// for(){
// }
// debugger;
for(d=0; d<=5; d++){
    console.log(`looping ${d}`);
    console.log(d);
}
console.log(d);
// console.log(d);

for(var j=0; j<5; j++){
    console.log(`looping ${j}`);
}
console.log(j);

//Looping Backwards
// debugger;
for( i=5; i>0; i--){
    console.log(`looping back ${i}`);
}
console.log(i)

//Nested Loop
console.error(`Nested loop`);

// debugger;
for(x=1; x<=2; x++){
    console.log(`outer loop ${x}`);

    for(y=1; y<=3; y++){
        console.log(`inner loop ${y}`);
    }
}

// While Loop Example
// Syntax
// initialize
// while(condition){
    //    code block
    // iteration
// }
let cars = 10;
while(cars>0){
    console.log(`selling cars 1 by 1, cars in shop now ${cars}`);
    cars--;
}
console.log(`current no. of cars in shop is ${cars}`);


while(cars<50){
    cars+=10;
    console.log(`adding new cars when there is no cars in store ${cars}`);
}
console.log(`current no. of cars in shop is ${cars}`);


// Do While Loop Example
// initialize
// do{
//     code block
//     iteration
// }while(condition)

// debugger;
let num = 10;
do{
    console.log(`number:${num}`);
    num++;
}while(num<50);

// loop break 

for(let i=0; i<5; i++ ){
    if(i==3){
        break;
    }
    console.log(`loop ${i}`);
}

// skip

for(let i=0; i<5; i++ ){
    if(i==3){
        continue;
    }
    console.log(`skip loop ${i}`);
}

// example

function greeting(number){
    console.log(`hii all ${number}`);
}
for(let i=0; i<10; i++){
    greeting(i);
}
