// Truthy and Falsy Values
console.log('Truthy and Falsy Values');

// Falsy Values:
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean(''));
console.log(Boolean(null));
console.log(Boolean(NaN));
console.log(Boolean(false));

let we = [];
console.log(Boolean(we))

// Truthy Values: 
console.log("Truthy");
console.log(Boolean(1));
console.log(Boolean(-1));
console.log(Boolean('Hello'));
console.log(Boolean([]));
console.log(Boolean({}));
console.log(Boolean(function () {} ));


let cash = 0;
if(cash){
    if(cash>500){
        console.log('we can eat food');
    }else{
        console.log('we can eat snacks only');
    }
}else{
    console.log('lets go home');
}
//it will automatically check true or false and excute

let age = 0;
console.log(age);
if(age){
    console.log('age is defined');
}else{
    console.log('age is unfined');
}


console.log([1]==[1]);