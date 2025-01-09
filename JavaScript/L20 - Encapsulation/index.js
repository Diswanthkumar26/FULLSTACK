class bankAccount{
    #balance; //private field

    constructor(initialBalance){
        this.#balance = initialBalance;
    }
    deposit(amount){
        if(amount>0){
            this.#balance += amount;
            console.log(`Deposited ${amount}. New Balance ${this.#balance}`);
        }else{
            console.log('Invalid Deposit amount');
        }
    }
    withdraw(amount){
        if(amount>0 && amount <= this.#balance){
            this.#balance -= amount;
            console.log(`withdraw ${amount}. New balance ${this.#balance}`);
        }else{
            console.log('insufficient funds or invalid amount');
        }
    }

    getBalance(){
        return this.#balance;
    }
}

let savingsAcc = new bankAccount(1000);

savingsAcc.deposit(500);
savingsAcc.withdraw(200);

savingsAcc.withdraw(1400);
savingsAcc.deposit(-1000);
// savingsAcc.#balance = 2000; Encapsulation is used to protect private field

// if we need to see the balance use get  function

savingsAcc.getBalance();
console.log(savingsAcc.getBalance());
