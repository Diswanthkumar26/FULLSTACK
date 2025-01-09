// Object issue : code repetition with individual objects

let me = {
    firstName :"Diswanth",
    lastName :"Kumar",
    dob : 2003,
    phoneNo : 7550269672,
    isEmployed : true,
    getDetails : function(){
        const age = new Date().getFullYear()-this.dob;
        console.log(
            `${this.firstName}${this.lastName} is ${age} old & contact no is ${this.phoneNo}`
        );
    },
    getEmployedStatus: function(){
        console.log(
            `${this.firstName} is ${this.isEmployed ? 'employed' : 'unemployed'}`
        );
    },
};

console.log(me);
me.getDetails();
me.getEmployedStatus();


let you = {
    firstName :"Monkey D.",
    lastName :"Luffy",
    dob : 2005,
    phoneNo : 1998202024,
    isEmployed : false,
    getDetails : function(){
        const age = new Date().getFullYear()-this.dob;
        console.log(
            `${this.firstName}${this.lastName} is ${age} old & contact no is ${this.phoneNo}`
        );
    },
    getEmployedStatus: function(){
        console.log(
            `${this.lastName} is ${this.isEmployed ? 'employed' : 'unemployed'}`
        );
    },
};

console.log(you);
you.getDetails();
you.getEmployedStatus();



class person{
    constructor(firstName,lastName,dob,phoneNo,isEmployed){
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = dob;
        this.phoneNo = phoneNo;
        this.isEmployed = isEmployed
    };
    getDetails(){
        const age = new Date().getFullYear()-this.dob;
        console.log(
            `${this.firstName}${this.lastName} is ${age} old & contact no is ${this.phoneNo}`
        );
    };
    getEmployedStatus(){
        console.log(
            `${this.firstName} is ${this.isEmployed ? 'employed' : 'unemployed'}`
        );
    };
}

let D = new person('Redhaired',' Shanks',1998,9876543210,true);
D.getDetails();
D.getEmployedStatus();

let Roger = new person('GolD.Roger',' Captain of roger priates',1987,8765498765,false);
Roger.getDetails();
Roger.getEmployedStatus();