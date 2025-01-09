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

class employee extends person {
    constructor(firstName,lastName,dob,phoneNo,isEmployed,jobTitle,company){
        super(firstName,lastName,dob,phoneNo,isEmployed);
        this.jobTitle = jobTitle;
        this.company = company;
    }
    // Overriding the getDetails method
    getDetails(){
        const age = new Date().getFullYear()-this.dob;
        console.log(`${this.firstName}${this.lastName} is ${age} years old, Work as a ${this.jobTitle} at ${this.company}`);
    }
    getJobDetails(){
        console.log(`${this.firstName} ${this.lastName} Work as a ${this.jobTitle} at ${this.company}`);
    }
}

let employee1 = new employee('PortgasD.' , 'Ace',2000,4567765488,true,'2nd Divion Caption','WhiteBread Priates');

employee1.getJobDetails();
employee1.getEmployedStatus();
employee1.getDetails();
console.log(employee1.firstName,employee1.lastName);



class student extends person {
    constructor(firstName,lastName,dob,phoneNo,isEmployed,school,grade){
        super(firstName,lastName,dob,phoneNo,isEmployed);
        this.school = school;
        this.grade = grade;
    }
    // Overriding the getDetails method
    getDetails(){
        const age = new Date().getFullYear()-this.dob;
        console.log(`${this.firstName}${this.lastName} is ${age} years old, student in grade ${this.grade} at ${this.school} & contact no is ${this.phoneNo}`);
    }
}

let student1 = new student('Donquixote',' Doflamingo',1999,7654321980,true,'Joker school','10th');

student1.getDetails();