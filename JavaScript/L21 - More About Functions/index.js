/* Higher-order Function:
Function that take other function as arguments or return them as results
*/

function startEngine(){ 
    return `Engine is started!`;
}

console.log(startEngine());

// Higher-order Function
function drive(driveName,engine){
    const message = engine();
    console.log(`${message} by ${driveName}`);
}

drive('Zoro',startEngine)



// pure function
function add(a,b){
    return a+b;
}
console.log(add(2,3));
console.log(add(2,3));
console.log(add(2,3));

// pure function
let counter =0;

function increment(value){
    counter+= value;
    return counter;
}
console.log(increment(2));
console.log(increment(2));
console.log(increment(2));

