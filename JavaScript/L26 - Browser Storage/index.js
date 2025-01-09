// localStorage.setItem('UserName1','Diswanth');
// localStorage.setItem('UserName2','Luffy');

// const userNameOne = localStorage.getItem('UserName2');
// console.log(userNameOne);

// localStorage.removeItem('UserName');

// localStorage.clear();


// sessionStorage.setItem('day','white');
// sessionStorage.setItem('night','dark');

// const theme = sessionStorage.getItem('day');
// console.log(theme)

// sessionStorage.removeItem('day');
// sessionStorage.clear();


const user = {
    id : 1,
    name : 'Luffy',
    age : 19
};
localStorage.getItem('user',JSON.stringify(user));

const lsuser= JSON.parse(localStorage.getItem('user'));
console.log(lsuser);

const User1 = {
    id : 1,
    Name : 'Diswanth',
    age : 21,
}

localStorage.getItem('User1',JSON.stringify(User1));

const MyUser = JSON.parse(localStorage.getItem('User1'));
console.log(MyUser)
