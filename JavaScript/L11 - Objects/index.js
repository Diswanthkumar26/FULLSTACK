let emp =  {
    name:'diswanth',
    id:1,
    course:'Js',
    age: 21
};

console.log(emp);
console.log(emp.name);
console.log(emp.id);
console.log(emp.course);
console.log(emp.age);

// Adding a new property

emp.city = 'Tambaram';
console.log(emp);

// Modifying an existing property

emp.age = 25;
console.log(emp);

// Object with method

let Onepiece = {
    priates: 'StrawHats',
    shipName:'Sunny',
    members: 10,
    year:1998,
    diplayInfo:function(){
        return `${this.priates} ${this.shipName} ${this.members} ${this.year}`
    }

}; 
console.log(Onepiece);
console.log(Onepiece.diplayInfo());
// console.log(diplayInfo());


// Destructuring assignment

let Captain = {
    Name : 'Monkey D.Luffy',
    age : '19',
    memberOf : 'StrawHat'
}
console.log(Captain);
console.log(Captain.Name);
console.log(Captain.age);
console.log(Captain.memberOf);

let {Name,age,memberOf} = Captain;
console.log(Name);
console.log(age);
console.log(memberOf);


//Nested Complex Objects

let institute = {
    Name : 'Greens Technology',
    branch: 'T.nagar',
    Admin : {
        Name : 'Anvesh',
        age : 30,
        contact : {
            phone : 7589345634,
            email : 'Anvesh234@gmail.com'
        }
    },
    courseMenu : [
        {course : 'Fullstack', price : 30000 , duration : '6 months'},
        {course : 'Testing', price : 40000 , duration : '4 months'},
        {course : 'Fresher combo', price : 25000 , duration : '8 months'}
    ]
};

console.log(institute.courseMenu[0]);

console.log(institute);

// Accessing properties of the nested objects

console.log(`Welcome to ${institute.Name} in ${institute.branch}`);
console.log(`Admin name is ${institute.Admin.Name}, Age is ${institute.Admin.age} and to contact him use this ${institute.Admin.contact.email} and ${institute.Admin.contact.phone}`);

institute.courseMenu.forEach((list) => {
    console.log(`${list.course} : ${list.price} , ${list.duration} `);
});

// Destructure owner object

let {Name:adminName,age:adminAge,contact:{email:adminEmail,phone:adminPhone}} = institute.Admin;

// Output details about the restaurant

console.log(`Admin name is ${adminName}, Age is ${adminAge},to contact him use this ${adminEmail} and ${adminPhone}` );


// Output the menu items using destructuring within forEach
institute.courseMenu.forEach(({course,price,duration}) => {
    console.log(`${course} : ${price} , ${duration} `);
});