// Decision Making: if, if...else, else if
console.log('Decision Making');

// Example 1: if statement

// Syntax
// if(condition){
//     code block
// }

let temperature = 20;
if(temperature >= 20){
    console.log('it is hot');
}


// Example 2: if...else statement

// Syntax
// if(condition){
//     code block
// }else{
//     code block
// }
if(temperature > 25){
    console.log('its hot');
}else{
    console.log('its cool');
}


let raining = true;
if(raining){
    console.log('its raining');
}else{
    console.log('not raining');
}

// Example 3: if..else if statement 

// Syntax
// if(condition){
//     code block
// }else if(condition){
//     code block
// }else{
//     code block
// }


let time = 18;
if(time < 12){
    console.log('good morning');
}else if (time < 18){
    console.log('afternoon');
}else{
    console.log('Good evening');
}


// Example 4: Nested if statements

// Variables
let year = 'firstyear';
let course = 'BCA';
let subject = 'Javascript'
// Decision logic
if(year === 'firstyear'){
    if(course ==='BCA'){
        if(subject ==='Javascript'){
            console.log('yes i have java script books');
        }else{
            console.log("yes i'm first year BCA but i don't have js books");
        }
    }else{
        console.log("yes i'm first year but not BCA");   
    }
}else{
    console.log("i'm final year bro ");
}

// Switch Statement

// Syntax
// switch(value){
//     case 1:
//         code block
//         break;
//     case 2:
//         code block
//         break;
//     default:
//         code block             
// }

let day = 8;
switch(day){
    case 1 :
        console.log('Monday');
        break;
    case 2 :
        console.log('Tuesday');
        break;
    case 3 :
        console.log('Wednsday');
        break;
    case 4 :
        console.log('Thursday');
        break;
    case 5 :
        console.log('Friday');
        break;
    case 6 :
        console.log('Saturday');
        break;     
    case 7 :
            console.log('Sunday');
            break; 
    default:
        console.log('Invaild day');              
}

const thala = "vishnu priya";
switch(thala){
    case "diswanth":
        console.log("im diswanth");
        break;
    case "udhaya":
        console.log("im udhaya");
        break;
    case "pooja":
        console.log("im vishnu priya");
        break;
    case "saajid":
        console.log("im saajid");
        break;
    default:
        console.log("invalid name");        
        
}

//Ternary Operator

// Syntax
// (condition)? Expression true : Expression false;
let me = true;
// if(me){
//     console.log('am admin');
// }else{
//     console.log('am user');
// }

let userme = me ? 'am admin' : 'am user';
console.log(userme)

let age = 30;

let ageis = age>=50 ? "adult" : "Kid";
console.log(ageis);